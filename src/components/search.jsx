import { fade, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import React, {useState, useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

/**
 * @author
 * @function Search
 **/

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [countryListDefault, setCountryListDefault] = useState();
  const [input, setInput] = useState("");

  const profile = useSelector((state) => state.profile);
  const [countryList, setCountryList] = useState();


  // const updateInput = () => {
  //   const filtered = profileLength.filter((country) =>
  //     country.FirstName.toLowerCase().indexOf(input)
  //   );
  //   console.log(filtered);
  //   console.log(input);
  //   JSON.stringify(setInput(input));
  //   // setInput(filtered);
  //   // setCountryList(filtered);
  // };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>{/* <SearchIcon /> */}</div>
      <input
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={props.input}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
