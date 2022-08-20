import React from 'react';
import { useGlobalContext } from '../Context';

const SearchForm = () => {
  const {searchTerm} = useGlobalContext();
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm