
import { createContext,  useState, useEffect } from 'react';
export const ChecklistContext = createContext({});

export const ChecklistProvider = (props: any) => {
    const {formType} = props || {};
    
    const [formSchema, setFormSchema] = useState([]);
    const [values, setValues] = useState({});
    const [submitDate, setSubmiteDate] = useState(new Date());

    const fetchSchemaData = async () => {
        try {
            const response = await fetch("/api/schema");
            const jsonResponse = await response?.json();
            
            return jsonResponse;
        } catch(e) {
            console.log(e);
        }
    }

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

    useEffect(()=>{ 
        fetchSchemaData().then((data)=>{ 
            const {schema} = data || {};
            const filtered_schema = schema.filter((data: any) => data?.type === formType) && schema.filter((data: any) => data?.type === formType)[0];
            const {fields} = filtered_schema || {};

            setFormSchema(fields);
        });
    }, []);

    return (
        <ChecklistContext.Provider value={{formSchema, values, setValues, submitDate, setSubmiteDate, postChecklistToAPI, postDraftToAPI}}>
            {props.children}
        </ChecklistContext.Provider>
    );
}

