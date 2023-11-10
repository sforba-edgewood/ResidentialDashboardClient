import CheckListField from "./CheckListField";
import { Grid, Col } from "@tremor/react";
import { Button } from "@tremor/react";
import NotesField from "./NotesField";
import { useContext } from "react";
import { ChecklistContext } from "../providers/checklist_provider";

const CheckListForm = () => {
    const context = useContext(ChecklistContext);
    const {setValues, formSchema, postDraftToAPI, postChecklistToAPI } = context || {};


    const updateForm = (name: String) => {
        let updatedFields = formSchema;
        updatedFields && updatedFields.forEach((field: any) => {
            if(field?.name === name) {
                if(field['value']  === false) {
                    field['value'] = false;
                } else {
                    field['value'] = true;
                }
            }
        });
        setValues(updatedFields);
    }   
    
    const handleDraftButtonClick = (e) => {
        e.preventDefault();
        postDraftToAPI();
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault();
        postChecklistToAPI();
    }

    const renderFields = () => {
        return formSchema && formSchema.map((field: any)=> {
            return (
                <fieldset key={field?.name}>
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
                <Button onClick={handleDraftButtonClick} size="xl" className="mx-2">Save to Drafts</Button>
                <Button onClick={handleSubmitButtonClick } size="xl"className="mx-2">Submit</Button>
            </div>
        </form>
    );
}

export default CheckListForm;