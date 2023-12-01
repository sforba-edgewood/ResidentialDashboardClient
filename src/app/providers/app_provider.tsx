import { createContext,  useState, useEffect, PropsWithChildren } from 'react';
export const AppContext = createContext({});

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    
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
            {children}
        </AppContext.Provider>
    );
}

