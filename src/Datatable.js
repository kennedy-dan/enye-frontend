import React, { useState } from "react";
import Pagination from "./components/pagination";
import { Grid, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    margin: "1em",
  },

  avatar: {
    backgroundColor: "#f6fafb",
    color: "blue",
  },
}));

export default function Datatable({ data }) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const columns = data && data[0] && Object.keys(data[0]);
  console.log(columns);
  const slice =
    data && data.slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage);

  const paginate = (pageNumber) => setPage(pageNumber);

  const classes = useStyles();

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
                      {row.FirstName }
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={row.FirstName + " " + row.LastName}
                  subheader={row.Email}
                />

                <CardContent>
                  <Grid container direction="row">
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
                        Gender: {row.Gender}
                      </Typography>
                      <hr />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
                        PhoneNumber: {row.PhoneNumber}
                      </Typography>
                      <hr />

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
                        Domain Name: {row.DomainName}
                      </Typography>
                      <hr />

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
                        Credit Card No: {row.CreditCardNumber}
                      </Typography>
                      <hr />

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
                        Credit Card Type : {row.CreditCardType}
                      </Typography>
                      <hr />

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: "1em" }}
                      >
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
      <Grid item container direction="row" justify="center">
        <Pagination
          rowsPerPage={rowsPerPage}
          count={data && data.length}
          paginate={paginate}
        />
      </Grid>
    </Grid>
  );
}

{
}
