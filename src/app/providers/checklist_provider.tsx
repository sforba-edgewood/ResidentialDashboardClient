
import { createContext,  useState,  PropsWithChildren } from 'react';
export const ChecklistContext = createContext({});

export const ChecklistProvider = ({ children }: PropsWithChildren<{}>) => {
    const [values, setValues] = useState({});
    const [submitDate, setSubmiteDate] = useState(new Date());


    const postChecklistToAPI = async () => {
        try {
            const response = await fetch("/api/checklist", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            console.log(response)
            
        } catch(e) {
            console.log(e);
        }
    }

    const postDraftToAPI = async () => {
        try {
            const response = await fetch("/api/draft", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            console.log(response)
            
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <ChecklistContext.Provider value={{values, setValues, submitDate, setSubmiteDate, postChecklistToAPI, postDraftToAPI}}>
            {children}
        </ChecklistContext.Provider>
    );
}

