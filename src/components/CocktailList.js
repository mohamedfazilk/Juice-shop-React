import React from 'react';
import Loading from './Loading';
import Cocktail from './Cocktail';
import {useGlobalContext} from '../Context'

const CocktailList = () => {
  const {cocktail,loading} = useGlobalContext();
  console.log(cocktail);
  if (loading){
    return(
      <Loading/>
    )
  }

  if(cocktail.length<1){
    return <h2 className="section-title">No Juices matched your search criteria</h2>
  }
  return (
    <div>
     <h2>CocktailList</h2>
    </div>
  )
}

export default CocktailList