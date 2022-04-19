import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './testData';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Kyivska = data.Kyivska;
const Odeska = data.Odeska;
const Lvivska = data.Lvivska;

function createData(name, reg) {
  const XX2017 = reg.G[2017].XX.value;
  const YY2017 = reg.G[2017].YY.value;
  const ZZ2017 = reg.G[2017].ZZ.value;
  const XX2018 = (reg.G[2018]) ? reg.G[2018].XX.value : 0;
  const YY2018 = (reg.G[2018]) ? reg.G[2018].YY.value : 0;
  const ZZ2018 = (reg.G[2018]) ? reg.G[2018].ZZ.value : 0;
  const XX2019 = (reg.G[2019]) ? reg.G[2019].XX.value : 0;
  const YY2019 = (reg.G[2019]) ? reg.G[2019].YY.value : 0;
  const ZZ2019 = (reg.G[2019]) ? reg.G[2019].ZZ.value : 0;

  const vals = [XX2017, YY2017, ZZ2017, XX2018, YY2018, ZZ2018, XX2019, YY2019, ZZ2019];
  return { name, vals };
}

const rows = [
  createData('Kyivska', Kyivska),
  createData('Odeska', Odeska),
  createData('Lvivska', Lvivska),

];

export default function TableRegion() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell rowSpan={2}>Region</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>2017</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>2018</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>2019</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell align="center">XX</StyledTableCell>
            <StyledTableCell align="center">YY</StyledTableCell>
            <StyledTableCell align="center">ZZ</StyledTableCell>
            <StyledTableCell align="center">XX</StyledTableCell>
            <StyledTableCell align="center">YY</StyledTableCell>
            <StyledTableCell align="center">ZZ</StyledTableCell>
            <StyledTableCell align="center">XX</StyledTableCell>
            <StyledTableCell align="center">YY</StyledTableCell>
            <StyledTableCell align="center">ZZ</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody onClick={() => window.open('/comment', 'commentTable', 'width=914,height=212,left=450,top=400',)}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell align="center">{row.vals[0]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[1]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[2]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[3]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[4]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[5]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[6]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[7]}</StyledTableCell>
              <StyledTableCell align="center">{row.vals[8]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
