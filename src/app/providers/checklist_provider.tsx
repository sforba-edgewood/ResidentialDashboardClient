
import { createContext,  useState, useEffect } from 'react';
export const ChecklistContext = createContext({});

export const ChecklistProvider = props => {
    const [formSchema, setFormSchema] = useState([]);
    const [values, setValues] = useState({});
    const [submitDate, setSubmiteDate] = useState(new Date());

    const fetchSchemaData = async () => {
        try {
            const response = await fetch("/api/schema");
            const jsonResponse = await response?.json();
            
            return jsonResponse;
        } catch(e) {
        }

    }
    useEffect(()=>{ 
        fetchSchemaData().then((data)=>{ 
            console.log(data);
            setFormSchema(data?.schema);
        });
    }, []);

    return(
        <ChecklistContext.Provider value={{formSchema, values, setValues, submitDate, setSubmiteDate}}>
            {props.children}
        </ChecklistContext.Provider>
    );
}

