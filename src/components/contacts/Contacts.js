import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch } from "../../utils/functions";

const Contacts = () => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {// Bilgiler gelmediği durumda Loading yazısı görünsün 
            isLoading ? (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell colSpan={5} align="center">
                Loading
              </TableCell>
            </TableRow>
            ) : // Bilgiler olmadığı, boş olduğu durumda veri bulunamadı mesajı 
            contactList?.length===0 ?(
              <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell colSpan={5} align="center">
                NO RESULT FOUND
              </TableCell>
            </TableRow>
            ) : (
              contactList?.map((item,index)=>(
            <TableRow>
              <TableCell textAlign="left">{item.username.toUpperCase}</TableCell>
              <TableCell textAlign="left">{item.phoneNumber}</TableCell>
              <TableCell textAlign="left">{item.gender}</TableCell>
              <TableCell textAlign="left"></TableCell>
              <TableCell textAlign="left"></TableCell>
            </TableRow>

              ))
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
