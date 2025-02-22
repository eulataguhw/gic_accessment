import * as React from "react";
import Table, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SxProps } from "@mui/material";

type Cell_Type = {
  data: {
    value: any;
    type: "text" | "amount" | "number" | "date" | "";
  };
  sx?: SxProps;
};

type Header_Type = {
  sx?: SxProps;
  title: string;
};

type Row_Type = {
  name?: string | number;
  cell?: Array<Cell_Type>;
  sx?: SxProps;
};

export interface ICommonTableProps extends TableProps {
  rows: Array<Row_Type>;
  headers: Array<Header_Type>;
}

const getData = (
  value: any,
  type: "text" | "amount" | "number" | "date" | "",
) => {
  switch (type) {
    case "amount": {
      return `${Number(value).toFixed(2)}`;
    }
    case "date": {
      return new Date(value).toLocaleDateString("en-SG", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
    }
  }
};

const CommonTable = (props: ICommonTableProps) => {
  const { rows, headers } = { ...props };
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {headers?.map((header: Header_Type) => (
              <TableCell sx={header.sx}>{header.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((item) => (
            <TableRow
              key={item.name}
              sx={{
                ...item.sx,
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {item?.cell?.map((data: Cell_Type) => (
                <TableCell
                  component="th"
                  scope="row"
                  sx={data.sx}
                >
                  {getData(data.data.value, data.data.type)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CommonTable };
