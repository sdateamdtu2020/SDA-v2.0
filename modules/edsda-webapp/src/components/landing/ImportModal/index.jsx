import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import JSONTable from "./Table.jsx";
import riceFieldData from "../../../utils/riceField.json";
import dieYoungUnder5AgeData from "../../../utils/dieYoungUnder5Age.json";
import { setFileNameImport } from "../../../app/slice/ui";
import { lists } from "../AddBlock/data";

import {
  Radio,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CircularProgress,
  Button,
  Checkbox,
  Modal,
} from "@material-ui/core";

const data = [
  {
    id: 75950,
    name: "Louella Wallace",
    age: 24,
    phone: "+44 (0)203 437 7302",
    color: "green",
  },
  {
    id: 80616,
    name: "Hanson Perry",
    age: 36,
    phone: "+44 (0)203 279 3708",
    color: "brown",
  },
  {
    id: 77621,
    name: "Brandi Long",
    age: 20,
    phone: "+44 (0)203 319 4880",
    color: "gray",
  },
  {
    id: 81299,
    name: "Tonia Sykes",
    age: 38,
    phone: "+44 (0)208 328 3671",
    color: "blue",
  },
  {
    id: 14225,
    name: "Leach Durham",
    age: 23,
    phone: "+44 (0)208 280 9572",
    color: "green",
  },
];

const ImportModal = ({ open, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isUpload, setIsUpload] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [step, setStep] = useState(1);
  const [dimension, setDimension] = React.useState({
    year: false,
    city: false,
  });
  const [measures, setMeasures] = useState("");
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = React.useState(0);

  const ref = useRef();
  const handleClear = () => {
    ref.current.value = "";
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDimensionChange = (event) => {
    setDimension({ ...dimension, [event.target.name]: event.target.checked });
  };

  const handleMeasuresChange = (event) => {
    setMeasures(event.target.value);
  };

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
    }, 5000);

    const action = setFileNameImport(fileName);
    dispatch(action);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const newDC =
      fileName === "sanluonglua.csv"
        ? {
            id: "riceYield",
            name: "Rice Yield",
            description: "Rice Yield statistic values from 1995 to 2019",
            input: "-",
            output: "Dataset",
          }
        : fileName === "dieYoungUnder5Age.csv"
        ? {
            id: "dieYoungUnder5Age",
            name: "Die Young Under 5 Age",
            description:
              "Die Young Under 5 Age statistic values from 1995 to 2019",
            input: "-",
            output: "Dataset",
          }
        : {};
    lists[1].children.push(newDC);

    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={onClose}
    >
      <div className={classes.modal}>
        {step === 1 ? (
          <div>
            <h2>
              Step 1: Upload your data. Only (.CSV, .JSON, .XML, .XLSX) are
              accepted
            </h2>
            <input
              type="file"
              className={classes.input}
              onChange={handleFileChange}
              ref={ref}
              accept=".csv, .json, .xml, .xlsx"
            />
            <div className={classes.buttonGroup}>
              <Button
                className={classes.button}
                onClick={handleUpload}
                disabled={loading ? true : false}
              >
                Upload
              </Button>
              <Button
                className={classes.button}
                onClick={handleClear}
                variant="secondary"
              >
                Clear
              </Button>
            </div>
            {loading && (
              <CircularProgress variant="determinate" value={progress} />
            )}
          </div>
        ) : step === 2 ? (
          <div className={classes.step2}>
            <div className={classes.step2header}>
              <h2>Step 2: Review Your Data</h2>
              <div className={classes.buttonGroup}>
                <button className={classes.button} onClick={handleBack}>
                  Back
                </button>
                <button className={classes.button} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
            <JSONTable
              className={classes.tableGroup}
              data={
                fileName === "sanluonglua.csv"
                  ? riceFieldData
                  : fileName === "dieYoungUnder5Age.csv"
                  ? dieYoungUnder5AgeData
                  : data
              }
            />
          </div>
        ) : (
          <div className={classes.step3}>
            <div className={classes.step3header}>
              <h2>Step 3: Choose dimension & measure</h2>
              <div className={classes.buttonGroup}>
                <button className={classes.button} onClick={handleBack}>
                  Back
                </button>
                <button
                  className={classes.button}
                  onClick={handleNext}
                  style={{ display: step === 3 ? "none" : "block" }}
                >
                  Next
                </button>
              </div>
            </div>

            <div className={classes.radioGroup}>
              <FormControl component="fieldset">
                <FormLabel component="h2" className={classes.formLabel}>
                  Dimensions
                </FormLabel>
                <FormGroup
                  aria-label="gender"
                  name="Dimensions"
                  value={dimension}
                  onChange={handleDimensionChange}
                >
                  <FormControlLabel
                    value={
                      fileName === "sanluonglua.csv"
                        ? "Year"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "Year"
                        : "Null"
                    }
                    control={
                      <Checkbox
                        checked={dimension[0]}
                        onChange={handleDimensionChange}
                        name={
                          fileName === "sanluonglua.csv"
                            ? "year"
                            : fileName === "dieYoungUnder5Age.csv"
                            ? "year"
                            : "Null"
                        }
                      />
                    }
                    label={
                      fileName === "sanluonglua.csv"
                        ? "Year"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "Year"
                        : "Null"
                    }
                  />
                  <FormControlLabel
                    value={
                      fileName === "sanluonglua.csv"
                        ? "City"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "City"
                        : "Null"
                    }
                    control={
                      <Checkbox
                        checked={dimension[0]}
                        onChange={handleDimensionChange}
                        name={
                          fileName === "sanluonglua.csv"
                            ? "year"
                            : fileName === "dieYoungUnder5Age.csv"
                            ? "year"
                            : "Null"
                        }
                      />
                    }
                    label={
                      fileName === "sanluonglua.csv"
                        ? "City"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "City"
                        : "Null"
                    }
                  />
                </FormGroup>
              </FormControl>
              <FormControl component="fieldset" style={{ marginTop: "20px" }}>
                <FormLabel component="h2" className={classes.formLabel}>
                  Measures
                </FormLabel>
                <FormGroup
                  aria-label="gender"
                  name="Dimensions"
                  value={measures}
                  onChange={handleMeasuresChange}
                >
                  <FormControlLabel
                    value={
                      fileName === "sanluonglua.csv"
                        ? "Rice Yield"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "Die Young Under 5 Age"
                        : "Null"
                    }
                    control={<Radio />}
                    label={
                      fileName === "sanluonglua.csv"
                        ? "Rice Yield"
                        : fileName === "dieYoungUnder5Age.csv"
                        ? "Die Young Under 5 Age"
                        : "Null"
                    }
                  />
                </FormGroup>
              </FormControl>
            </div>
            <Button className={classes.button} onClick={handleSubmit}>
              Submit
            </Button>
            {loading && (
              <CircularProgress variant="determinate" value={progress} />
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ImportModal;
