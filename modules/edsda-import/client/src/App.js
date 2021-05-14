import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { CsvToHtmlTable } from 'react-csv-to-table';
import ColumnCheckBoxes from './components/ColumnCheckBoxes';


const App = () => {
    const apiURL = 'http://localhost:8082';
    const [file, setFile] = useState();
    const [csvFile, setCsvFile] = useState();
    const [columns, setColumns] = useState([]);
    const [dimensions, setDim] = useState({});
    const [measures, setMea] = useState({});


    const sampleData = `
    Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
    Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
    `;

    const onUploadHandle = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Choose a file before upload')
            return;
        }
        const formData = new FormData();
        formData.append("file", file);

        axios({
            method: 'post',
            url: `${apiURL}/api/upload/${Object.keys(dimensions).length === 0 ? undefined : Object.keys(dimensions)}/${Object.keys(measures).length === 0 ? undefined : Object.keys(measures)}/csv`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(async function (res) {
                console.log('RES', res.data.fileNameInServer);
                console.log('Status', res.data.status);
                console.log('Message', res.data.message);
            })
            .catch(error => {
                //handle error
                console.log(error);
            });

    }

    const handleFiles = files => {
        var reader = new FileReader();
        reader.onload = (e) => {
            // Use reader.result
            // Get only first string start with \n
            const columnData = reader.result.match(/^(\S+)\s(.*)/)[0];
            //splitting to an array
            const columnArray = columnData.split(",");
            setCsvFile(reader.result.replace(columnData, ''));
            setColumns(columnArray);
        }
        try {
            reader.readAsText(files[0]);
        } catch (error) {
            return
        }

    }



    console.log('dimensions: ', Object.keys(dimensions));
    console.log('measures: ', Object.keys(measures));


    return (
        <React.Fragment>
            <h1>Import file !</h1>
            <div>
                <form onSubmit={e => onUploadHandle(e)} >
                    <label htmlFor="file">Pick a file </label>
                    <input
                        onChange={(e) => {
                            e.preventDefault();
                            setFile(e.target.files[0])
                            handleFiles(e.target.files)
                        }}
                        type="file" name="file" id="file"
                        placeholder=" Choose a file" />
                    <input type="submit" value="Import" />

                </form>

            </div>

            <div className="column-checkboxes">
                <ColumnCheckBoxes columns={columns} setDim={setDim} setMea={setMea} />
            </div>
            <div className="table-data">
                <CsvToHtmlTable
                    data={csvFile || sampleData}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                    hasHeader={false}
                />
            </div>

        </React.Fragment >
    );
}

export default App;