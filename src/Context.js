import React,{useState,useContext,useEffect} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState([])
    const [searchTerm, setSearchTerm] = useState('a')

    return(
        <AppContext.Provider 
        value={{
            loading,
            cocktail,
            searchTerm,
            setSearchTerm()
        }}
        >
            {children}
        </AppContext.Provider>
    ) 
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}