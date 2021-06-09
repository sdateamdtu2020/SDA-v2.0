import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.css";

export default class JSONTable extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function () {
    return Object.keys(this.props.data[0]);
  };

  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return (
        <TableCell styles="border: 1px solid black" key={key}>
          {key.toUpperCase()}
        </TableCell>
      );
    });
  };

  getRowsData = function () {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <TableRow key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </TableRow>
      );
    });
  };

  render() {
    return (
      <Paper className="table">
        <TableContainer className="table__container">
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>{this.getHeader()}</TableRow>
            </TableHead>
            <TableBody>{this.getRowsData()} </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return <TableCell key={props.data[key]}>{props.data[key]}</TableCell>;
  });
};
