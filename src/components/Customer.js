import React from "react";
import { TableRow, TableCell, Avatar, Button } from "@mui/material";

function Customer({ index, image, name, birthday, gender, job, onDelete, id }) {
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell><Avatar src={image} alt={name} /></TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => onDelete(id)} 
        >
          삭제
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default Customer;
