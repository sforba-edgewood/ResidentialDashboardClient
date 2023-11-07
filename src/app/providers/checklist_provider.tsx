
import { createContext,  useState } from 'react';
import schema from '../../../schema/index';
export const ChecklistContext = createContext({});

export const ChecklistProvider = props => {
    const [formSchema, setFormSchema] = useState({});
    const [values, setValues] = useState({});
    const [submitDate, setSubmiteDate] = useState(new Date());

    console.log(schema);
    return(
        <ChecklistContext.Provider value={{ values, setValues, submitDate, setSubmiteDate}}>
            {props.children}
        </ChecklistContext.Provider>
    );
}

