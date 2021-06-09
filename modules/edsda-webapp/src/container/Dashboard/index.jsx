import React from "react";
import { Navbar, EditorPane } from "../index";
import { useStyles } from "./styles";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Dashboard = () => {
  const classes = useStyles();
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", [1752, 1000]);
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <div className={classes.dashboard}>
      <Navbar handleExport={printDocument} />
      <div id="divToPrint">
        <EditorPane />
      </div>
    </div>
  );
};

export default Dashboard;
