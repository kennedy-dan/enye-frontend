import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPaginate from "react-paginate";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../actions";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Header from "./ui/Header";
import Search from "./search";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Profile({data}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [input, setInput] = useState("");
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  let sliceData = [];
  const profileLength =
    profile.details.records && profile.details.records.profiles;

  const slice =
    profile.details.records &&
    profile.details.records.profiles.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  // sliceData.push(slice)
   useEffect(() => {
       dispatch(profileAction())
   }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  useEffect(() => {
    dispatch(profileAction());
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

 

  const updateInput =  (profileLength) => {
    profileLength.filter((country) => 
      country.FirstName.toLowerCase().indexOf(input)
    );
    // console.log(filtered);
    console.log(input);
    JSON.stringify( setInput(input));
    // setInput(filtered);
    // setCountryList(filtered);
  };

  const tableData = (updateInput) => {
    return (
      <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DomainName</TableCell>
              <TableCell>PhoneNumber</TableCell>
              <TableCell>Mac Address</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>CreditCardNumber</TableCell>
              <TableCell>CreditCardType</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Payment Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slice &&
              slice.map((profile) => (
                <TableRow tabIndex={-5}>
                  <TableCell>{profile.FirstName}</TableCell>
                  <TableCell>{profile.LastName}</TableCell>
                  <TableCell>{profile.Email}</TableCell>
                  <TableCell>{profile.DomainName}</TableCell>
                  <TableCell style={{ width: "90em" }}>
                    {profile.PhoneNumber}
                  </TableCell>
                  <TableCell>{profile.MacAddress}</TableCell>
                  <TableCell>{profile.URL}</TableCell>
                  <TableCell>{profile.UserName}</TableCell>
                  <TableCell>{profile.Gender}</TableCell>
                  <TableCell>{profile.Latitude}</TableCell>
                  <TableCell>{profile.Longitude}</TableCell>
                  <TableCell>{profile.CreditCardNumber}</TableCell>
                  <TableCell>{profile.CreditCardType}</TableCell>
                  <TableCell>{profile.LastLogin}</TableCell>
                  <TableCell>{profile.PaymentMethod}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={profileLength && profileLength.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </>
    )
  }
  return (
    <Paper className={classes.root}>
      <input value={input} onChange={(e) => setInput(e.target.value)} /> 
      {/* <Search input={input}  onChange={updateInput} /> */}
      {/* <Header input={input} onChange={updateInput} /> */}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={input}
          onChange={updateInput}
        />
      </div>
     {tableData()}
      {/* )} */}
    </Paper>
  );
}

{
  /* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })} */
}

// import { Button } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { profileAction } from "../actions";

// const Profile = (props) => {
//     const dispatch = useDispatch()

//     const click = () => {
//         dispatch(profileAction())
//         console.log(profileAction)
//     }

//     const profile = useSelector(state => state.profile)
//     console.log(profile)
//     // console.log(profile)
//     //  dispatch(profile)
//     // console.log(pro)
//   return(
//     <div>
//         <Button onClick={click}>Click</Button>
//     </div>
//    )
//   }

// export default Profile
