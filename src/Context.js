import React,{useState,useContext,useEffect} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState([])
    const [searchTerm, setSearchTerm] = useState('a')

    const fecthDrinks = async () =>{
        try{
            setLoading(true);
            const response = await fetch(`${url}${searchTerm}`)
            const data =  await response.json()
            console.log(data);
        }
        catch(error){
            console.log(error.data);
        }
    }

    useEffect (()=>{
        fecthDrinks();
    },[])

    return(
        <AppContext.Provider 
        value={{
            loading,
            cocktail,
            setSearchTerm
        }}
        >
            {children}
        </AppContext.Provider>
    ) 
}


export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }