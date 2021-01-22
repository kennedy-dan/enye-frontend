import { List, ListItem, Paper } from '@material-ui/core';
import React from 'react';

const Pagination = ({ rowsPerPage, count, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(count / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <List className='pagination' style={{display: 'flex'}}>
        {pageNumbers.map(number => (
          <Paper style={{marginLeft:'9px'}}>
          <ListItem key={number} className='page-item' style={{width:'2px'}}>
            <a style={{textDecoration:'none'}} onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </ListItem>
          </Paper>
        ))}
      </List>
    
  );
};

export default Pagination;