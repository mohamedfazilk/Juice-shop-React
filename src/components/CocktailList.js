import React from 'react';
import Loading from './Loading';
import Cocktail from './Cocktail';
import {useGlobalContext} from '../Context'

const CocktailList = () => {
  const {cocktail,loading} = useGlobalContext();
  if (loading){
    return(
      <Loading/>
    )
  }
  return (
    <div>
     <h2>CocktailList</h2>
    </div>
  )
}

export default CocktailList