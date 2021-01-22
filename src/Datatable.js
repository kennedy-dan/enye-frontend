import React, { useState } from "react";

import Pagination from "./components/pagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    margin: "1em",
  },

  avatar: {
    backgroundColor: "#f6fafb",
    color: 'blue'
  },
}));

export default function Datatable({ data }) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const columns = data && data[0] && Object.keys(data[0]);
  const [gender, setGender] = useState([]);
  console.log(columns);
  const slice =
    data && data.slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage);

  const check = data && data.map((name) => name.FirstName);
  console.log(check);
  const first = check && check.toString().charAt();
  console.log(first);
  const paginate = (pageNumber) => setPage(pageNumber);

  let secretMessage =
    check &&
    check.map(function (animal) {
      for (animal = 0; animal <= check && check.length - 1; animal++) {
        return check && check[animal].charAt(animal);
      }
    });

  console.log(secretMessage);

  const secretMessages = check && check.map((animal) => animal[0]);
  console.log(secretMessages);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const display = (male) => {
    const filt = male.toString().toLowerCase();
    const filtered = data.filter(
      (user) => (user.Gender === "Male".toLowerCase().indexOf(filt)) !== -1
    );

    setGender(filtered);
  };

  return (
    <Grid container direction="column" justify="center">
    <Grid item container direction="row" justify="center">
      {slice &&
        slice.map((row) => (
          <React.Fragment>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {row.FirstName}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={row.FirstName}
                subheader={row.Email}
              />

              <CardContent >
                <Grid container direction='row' >
                  <div >
                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}>
                  Gender: {row.Gender}
                </Typography>
                <hr />
                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}>
                  PhoneNumber: {row.PhoneNumber}
                </Typography>
                <hr />

                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}>
                  Domain Name: {row.DomainName}
                </Typography>
                <hr />

                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}>
                  Credit Card No: {row.CreditCardNumber}
                </Typography>
                <hr />

                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}> 
                  Credit Card Type : {row.CreditCardType}
                </Typography>
                <hr />

                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'1em'}}>
                  Payment Method : {row.PaymentMethod}
                </Typography>
                <hr />

                </div>
                </Grid>
              </CardContent>
              <Typography variant="body2" style={{ marginLeft: "1.2em" }}>
                Last Seen : {row.LastLogin}
              </Typography>
            </Card>
          </React.Fragment>
        ))}
        </Grid>
<Grid item container direction='row' justify='center'>
      <Pagination
        // component="div"
        rowsPerPage={rowsPerPage}
        count={data && data.length}
        paginate={paginate}
      />
      </Grid>
    </Grid>
  );
}

{
  /* <Paper>

<Table cellPadding={0} cellSpacing={0}>
  <TableHead>
    <TableRow>
      {data &&
        data[0] &&
        columns.map((heading) => <TableCell>{heading}</TableCell>)}
    </TableRow>
  </TableHead>
  <TableBody>
    {slice &&
      slice.map((row) => (
        <TableRow>
          {columns.map((column) => (
            <TableCell>{row[column]}</TableCell>
          ))}
        </TableRow>
      ))}
  </TableBody>
</Table>
<TablePagination
  rowsPerPageOptions={[20, 25, 100]}
  component="div"
  count={data && data.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onChangePage={handleChangePage}
/>
</Paper> */
}
