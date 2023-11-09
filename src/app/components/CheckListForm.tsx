import CheckListField from "./CheckListField";
// import {fields} from '../../../schema/daily_checklist.json';
import { Grid, Col } from "@tremor/react";
import { Button } from "@tremor/react";
import NotesField from "./NotesField";
import { useContext } from "react";
import { ChecklistContext } from "../providers/checklist_provider";

const CheckListForm = props => {
    const {formType} = props || {};
    const context = useContext(ChecklistContext);
    const {setValues, formSchema} = context || {};
    const schema = formSchema?.filter((data) => data?.type === formType) && formSchema?.filter((data) => data?.type === formType)[0];
    const {fields} = schema || {};

    const updateForm = (name: String) => {
        let updatedFields = fields;
        updatedFields && updatedFields.forEach((field) => {
            if(field?.name === name) {
                if(field['value']  === false) {
                    field['value'] = false;
                } else {
                    field['value'] = true;
                }
            }
        });
        setValues(updatedFields)
    }   

    const renderFields = () => {
        return fields && fields.map((field)=> {
            return (
                <fieldset>
                    <CheckListField {...field} updateForm={updateForm}/>
                </fieldset>

            )
        })
    }
    return (
        <form className="container mx-auto">
            <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2">
                {renderFields()}
            </Grid>
            <NotesField />
            <div className="flex flex-row justify-center py-4">
                <Button size="xl" className="mx-2">Save to Drafts</Button>
                <Button size="xl"className="mx-2">Submit</Button>
            </div>
        </form>
    );
}

export default CheckListForm;