import { createContext,  useState, useEffect } from 'react';
export const AppContext = createContext({});

export const AppProvider = props => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false)

    return(
        <AppContext.Provider value={{loading, setLoading, authenticated, setAuthenticated}}>
            {props.children}
        </AppContext.Provider>
    );
}

