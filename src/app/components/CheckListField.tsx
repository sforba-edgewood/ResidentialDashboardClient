'use client';
import { Button, Card, Title, Text, Switch, } from "@tremor/react";
import { useState} from "react";

const CheckListField = (props: any) => {
    const {label, name, updateForm} = props || {};


    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

    const handleSwitchChange = (value: boolean) => {
      setIsSwitchOn(value);
      updateForm(name);
    };

    return(
        <Card className="max-w-4xl mx-auto my-1 h-auto">
            <label htmlFor="switch" className="text-sm text-gray-500">
                {label}
            </label>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Switch color={isSwitchOn ? 'green': 'red'} name={name} checked={isSwitchOn} onChange={handleSwitchChange} required />
        </Card>
    );
}

export default CheckListField;