
import { createContext,  useState, useEffect } from 'react';
import {weekly_fields} from '../../../schema/weekly_checklist.json';
import {daily_fields} from '../../../schema/daily_checklist.json';
import {monthly_fields} from '../../../schema/monthly_checklist.json';

export const SchemaContext = createContext({});

export const SchemaProvider = (props: any) => {
    const [formSchema, setFormSchema] = useState({});

    const fetchSchemaData = async () => {
        try {
            const response = await fetch("/api/schema");
            const jsonResponse = await response?.json();
            
            return jsonResponse;
        } catch(e) {

            throw new Error("failed")
        }
    }

    useEffect(()=>{ 
        const schema = fetchSchemaData();
        schema.then((data)=>{
     
            const {schema, error} = data || {};
            if(error) {
                console.log('hello');
                const schemaObj = {
                    'weekly': {'fields':weekly_fields},
                    'daily': {'fields':daily_fields},
                    'monthly': {'fields':monthly_fields}
                }
                setFormSchema(schemaObj);
            } else {
                const schemaObj: any = {}
                schema?.forEach((schemaItem:any)=> {
                    const schemaObjKey = schemaItem?.type?.toLowerCase();
                    schemaObj[schemaObjKey] = schemaItem;
                })
                setFormSchema(schemaObj);
            }

        });
    }, []);

    return (
        <SchemaContext.Provider value={{formSchema}}>
            {props.children}
        </SchemaContext.Provider>
    );
}