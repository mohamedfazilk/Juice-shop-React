import React from 'react';
import { useGlobalContext } from '../Context';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm