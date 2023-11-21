import { createContext,  useState, useEffect } from 'react';
export const AppContext = createContext({});

export const AppProvider = (props:any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false)
    
    const verify = async () => {
        try {

            
        } catch(e) {
            console.error('error: ', e);

        }
    }

    useEffect(()=> {
        
    }, [])
    return(
        <AppContext.Provider value={{loading, setLoading, authenticated, setAuthenticated}}>
            {props.children}
        </AppContext.Provider>
    );
}

