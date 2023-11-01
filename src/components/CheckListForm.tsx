import CheckListField from "./CheckListField";
import {fields} from '../../schema/daily_checklist.json';
import { Grid, Col } from "@tremor/react";
const CheckListForm = () => {

    const renderFields = () => {
        return fields && fields.map((field)=> {
            return (
                <fieldset>
                    <CheckListField {...field}/>
                </fieldset>

            )
        })
    }
    return(
        <form className="container mx-auto">
            <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2">
                {renderFields()}
            </Grid>

        </form>
    );
}

export default CheckListForm;