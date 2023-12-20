import CheckListField from "./CheckListField";
import { usePathname } from 'next/navigation';
import { Grid, Col } from "@tremor/react";
import { Button } from "@tremor/react";
import ChecklistDate from "./CheckListDate";
import { useContext } from "react";
import { ChecklistContext } from "../../providers/checklist_provider";
import { SchemaContext } from "@/app/providers/schema_provider";
import DocumentUpload from "./DocumentUpload";

const CheckListForm = () => {
    const pathname = usePathname();
    const formType: string | undefined = pathname?.split('/') && pathname?.split('/')[2];
    const checklist_context = useContext(ChecklistContext) as ChecklistContextFields;
    const schema_context = useContext(SchemaContext) as SchemaContextFields;

    const {formSchema}= schema_context;

    const {setValues, setSubmitDate, submitDate, setFilesToUpload,  postDraftToAPI, postChecklistToAPI }:any = checklist_context || {};
    
    const updateForm = (name: String, notes: String | null) => {
        if(!formType || !formSchema) return false;

        let updatedFields = formSchema && formSchema[formType] && formSchema[formType]?.fields;
        updatedFields && updatedFields?.forEach((field: any) => {
            if(field?.name === name) {
                if(notes) {
                    field['notes'] = notes;
                } else {
                    if(field['value']  === false) {
                        field['value'] = false;
                    } else {
                        field['value'] = true;
                    }
                }

            }
        });
        setValues(updatedFields);
    }   
    
    const handleDraftButtonClick =(e:  React.MouseEvent): void => {
        e.preventDefault();
        if(submitDate) {
            postDraftToAPI();
        }

    }

    const handleSubmitButtonClick = (e: React.MouseEvent): void  => {
        e.preventDefault();
        if(submitDate) {
            postChecklistToAPI();
        }


    }

    const renderFields = () => {
        if(!formType || !formSchema) return false;

        return formSchema && formSchema[formType] && formSchema[formType]?.fields?.map((field: FormSchemaField)=> {
            return (
                <fieldset key={field?.name}>
                    <CheckListField {...field} updateForm={updateForm}/>
                </fieldset>

            )
        })
    }
    return (
        <form className="container mx-auto">
            <ChecklistDate setSubmitDate={setSubmitDate}/>
            <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2">
                {renderFields()}
                <DocumentUpload  setFilesToUpload={setFilesToUpload}/>
            </Grid>

            <div className="flex flex-row justify-center py-4">
                <Button onClick={handleDraftButtonClick} size="xl" className="mx-2">Save to Drafts</Button>
                <Button onClick={handleSubmitButtonClick } size="xl"className="mx-2">Submit</Button>
            </div>
        </form>
    );
}

export default CheckListForm;