import { createContext, useState } from "react";

export const SearchContext= createContext();

export function seearchProvider ({child}){
    const [searchT, setSearchT] = useState("")

    return (
        <SearchContext.Provider value={{searchT, setSearchT}}>
            {child}
        </SearchContext.Provider>
    )
}