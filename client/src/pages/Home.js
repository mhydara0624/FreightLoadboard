// import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import React, { useState, useEffect } from 'react'
import { GetLoads } from '../services/LoadServices'
import { withRouter } from 'react-router-dom'

function Home(props) {
  // const [board, setBoard] = useState([])

  // const getAllLoads = async () => {
  //   const data = await GetLoads()
  //   setBoard(data)
  // }

  // useEffect(() => {
  //   getAllLoads()
  // }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Origin</TableCell>
            <TableCell align="right">Destination</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.board.map((load) => (
            <TableRow
              key={load.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {load.company}
              </TableCell>
              <TableCell align="right">{load.pickup}</TableCell>
              <TableCell align="right">{load.drop}</TableCell>
              <TableCell align="right">{load.distance}</TableCell>
              <TableCell align="right">{load.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withRouter(Home)
