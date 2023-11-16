
import { createContext,  useState, useEffect } from 'react';
export const SchemaContext = createContext({});

export const SchemaProvider = (props: any) => {
    const [formSchema, setFormSchema] = useState({});

    const fetchSchemaData = async () => {
        try {
            const response = await fetch("/api/schema");
            const jsonResponse = await response?.json();
            
            return jsonResponse;
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(()=>{ 
        fetchSchemaData().then((data)=>{
            const {schema} = data || {};
            const schemaObj = {}
            schema.forEach((schemaItem)=> {
                const schemaObjKey = schemaItem?.type?.toLowerCase();
                schemaObj[schemaObjKey] = schemaItem;
            })
            setFormSchema(schemaObj);
        });
    }, []);

    return (
        <SchemaContext.Provider value={{formSchema}}>
            {props.children}
        </SchemaContext.Provider>
    );
}