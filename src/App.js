import React, {useState,useEffect} from 'react'

import { ThemeProvider } from "@material-ui/styles";

import Datatable from './Datatable'

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  grow: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  root: {
    width: '100%',
    maxWidth: 200,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  
}));

function App() {
  const [data , setData] = useState([])
  const [q , setQ] = useState('')
  const [gender, setGender] = useState('')
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  

 

  useEffect(() => {
     fetch("https://api.enye.tech/v1/challenge/records")
     .then((response) => response.json())
     .then((json) => setData(json))
    //  console.log(data.)
  }, [])


  function search(rows) {
    return data.records && rows.filter(
      row => 
      row.FirstName.toLowerCase().indexOf(q) > -1 &&
      row.Gender.toLowerCase().indexOf(gender) !== -1 

    )
    
  }



  
 
  return (
    <ThemeProvider>
      <div className={classes.grow}>
            <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Profiles
          </Typography>
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
              inputProps={{ 'aria-label': 'search' }}
              value={q} onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <List
      component="nav"
      aria-labelledby="nested-list-subheader"
     
      className={classes.root}
    >
     
      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="Filter By Gender" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <div className={classes.search}>
            <InputBase value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
          </ListItem>
        </List>
      </Collapse>
    </List>
        
        </Toolbar>
      </AppBar>
      </div>
     
      

      <Datatable data={search(data.records && data.records.profiles)} />
    </ThemeProvider>
  );
}

export default App;
