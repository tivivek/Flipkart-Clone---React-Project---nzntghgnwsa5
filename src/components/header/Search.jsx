import React from 'react'
import { InputBase, List, ListItem, Box, styled } from '@mui/material';

// importing icon from mui
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;


// function starts
const Search = () => {
  return (
      <SearchContainer>
          <InputSearchBase
              placeholder="Search for products, brands and more"
            //   inputProps={{ 'aria-label': 'search' }}
            //   onChange={(e) => getText(e.target.value)}
          />
          <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          {/* {
              text &&
              <ListWrapper hidden={open}>
                  {
                      products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                          <ListItem>
                              <Link
                                  to={`/product/${product.id}`}
                                  style={{ textDecoration: 'none', color: 'inherit' }}
                                  onClick={() => setOpen(true)}
                              >
                                  {product.title.longTitle}
                              </Link>
                          </ListItem>
                      ))
                  }
              </ListWrapper>
          } */}
      </SearchContainer>
  )
}

export default Search