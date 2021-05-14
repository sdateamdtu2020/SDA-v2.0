import React, { useState, useEffect, useCallback } from 'react';


const ColumnCheckBoxes = ({ columns, setDim, setMea }) => {
    const [dimensions, setDimensions] = useState({});
    const [measures, setMeasures] = useState({});


    useEffect(() => {
        setDimensions({});
        setMeasures({});

        const measuresObject = {};
        columns.forEach(column => {
            measuresObject[column] = false;
        });
        setMeasures(measuresObject);
        setMea(measuresObject);

        const checkBoxes = document.querySelectorAll('.column-checkbox input');
        checkBoxes.forEach(checkBox => {
            checkBox.checked = false;
        });

    }, [columns])


    useEffect(() => {
        setDim(dimensions);
        setMea(measures);
    }, [dimensions, measures]);

    const handleCheckBox = (e) => {
        const { name, checked } = e.target;

        if (checked) {
            setDimensions({ ...dimensions, [name]: checked });
            delete measures[name];
        }
        else {
            setMeasures({ ...measures, [name]: checked });
            delete dimensions[name];
        }

    }


    return (
        (
            columns.map(function (item, i) {
                return (
                    <div key={i} className="column-checkbox">
                        <label>{item}</label>
                        <input type="checkbox" value={item} name={item} onChange={e => handleCheckBox(e)} />
                    </div>
                )

            })
        )
    );


};

export default ColumnCheckBoxes;