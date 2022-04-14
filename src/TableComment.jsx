import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './TableComment.css'; 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

function createData(value, date, user, comment) {
  return { value, date, user, comment };
}

const rows = [
  createData(66, '12/12/12', 'Jo', 'lorem5'),
];

export default function TableComment({active, setActive}) {
  const data = new Date();
  const dataY = data.getFullYear();
  const dataM = data.getMonth();
  const dataD = data.getDay();
  const dateF = `${dataY}/${dataM}/${dataD}`;

  console.log(dateF);

  const [value, setValue] = useState('');
  const [date, setDate] = useState(dateF);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  const clearInputs = () => {
    setValue(0);
    setDate(dateF)
    setUser('');
    setComment('');

  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newRow = {
      value,
      date,
      user,
      comment,
    };

    rows.push(newRow);
    clearInputs();
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <TableContainer component={Paper}>
          <form onSubmit={onFormSubmit}>
          <Table sx={{ maxWidth: 900 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">value</StyledTableCell>
                <StyledTableCell align="center">date</StyledTableCell>
                <StyledTableCell align="center">user</StyledTableCell>
                <StyledTableCell align="center">comment</StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => setActive(false)} variant="contained" color="error">
                    CLOSE
                  </Button>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.value * Math.random()}>
                  <StyledTableCell align="center">{row.value}</StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.user}</StyledTableCell>
                  <StyledTableCell sx={{ maxWidth: 300 }} align="center">{row.comment}</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            
            <TableHead>
              <StyledTableRow>
              
                <StyledTableCell align="center">
                  <TextField
                    id="number"
                    name="number"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    required
                    label="Value"
                    type="number"
                    sx={{ width: 200, }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                    <p>DATE</p>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField 
                    id="name" 
                    name="name"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                    required
                    label="Name" 
                    variant="outlined"
                    sx={{ width: 200, }}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={event => setComment(event.target.value)}
                    required
                    label="Comment"
                    sx={{ width: 200, }}
                    multiline
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button type="submit" variant="contained" color="success">
                    ADD
                  </Button>
                </StyledTableCell>
                
              </StyledTableRow>
              
            </TableHead>
          
          </Table>
          </form>
        </TableContainer>
      </div>
    </div>
  );
}