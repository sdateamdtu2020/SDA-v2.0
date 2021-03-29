import React, { useState, useRef } from "react";
import { useStyles } from "./styles";
import { useGlobalStyles } from "../../theme/GlobalStyles";
import { useTheme } from "@material-ui/core/styles";

import {
  Typography,
  MobileStepper,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const ImportModal = ({ setShowModalImport }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const ref = useRef();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [dimension, setDimension] = useState("EUR");
  const [measure, setMeasure] = useState("EUR");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUpload = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleClear = () => {
    ref.current.value = "";
  };

  const handleDropdownDimensionChange = (event) => {
    setDimension(event.target.value);
  };
  const handleDropdownMeasureChange = (event) => {
    setMeasure(event.target.value);
  };

  const StepOne = () => (
    <>
      <Typography variant="subtitle1">
        Upload your data. Only <b>(.CSV, .JSON, .XML)</b> are accepted
      </Typography>
      <input
        id="upload-file"
        name="upload-file"
        type="file"
        ref={ref}
        className={classes.input}
      />
      <div className={classes.groupButton}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleUpload}
          className={`${globalClasses.button} ${classes.buttonUpload}`}
        >
          Upload
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleClear}
          className={`${globalClasses.button} ${classes.buttonClear}`}
        >
          Clear
        </Button>
      </div>
    </>
  );

  const StepTwo = () => (
    <>
      <h2>Step Two</h2>
    </>
  );

  const StepThree = () => (
    <>
      <Typography variant="subtitle1" className={classes.typoStep3}>
        Choose your dimension:
      </Typography>
      <TextField
        id="standard-select-currency"
        select
        value={dimension}
        onChange={handleDropdownDimensionChange}
        className={classes.textField}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="subtitle1" className={classes.typoStep3}>
        Choose your measure:
      </Typography>
      <TextField
        id="standard-select-currency"
        select
        value={measure}
        onChange={handleDropdownMeasureChange}
        className={classes.textField}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography variant="h6">Import</Typography>
        <div
          className={classes.closeButton}
          onClick={() => setShowModalImport(false)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className={classes.body}>
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          className={classes.step}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 2}
            >
              Next
              {theme.direction === "rtl" ? (
                <IoIosArrowBack />
              ) : (
                <IoIosArrowForward />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <IoIosArrowForward />
              ) : (
                <IoIosArrowBack />
              )}
              Back
            </Button>
          }
        />
        {activeStep === 0 ? (
          <StepOne />
        ) : activeStep === 1 ? (
          <StepTwo />
        ) : (
          <StepThree />
        )}
      </div>
    </div>
  );
};

export default ImportModal;
