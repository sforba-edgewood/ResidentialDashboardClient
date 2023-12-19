'use client';
import { Button, Card, Title, Text, Switch, Textarea } from "@tremor/react";
import { useState} from "react";

const CheckListField = (props: any) => {
    const {label, name, updateForm} = props || {};


    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

    const handleSwitchChange = (value: boolean) => {
      setIsSwitchOn(value);
      updateForm(name, null);
    };

    const handleNotes = (e: React.SyntheticEvent)=> {
        e.preventDefault();
        const target = e.target;
        const notes = target?.value;
        updateForm(name, notes);

    }
    return(
        <Card className="max-w-4xl mx-auto my-1 h-auto">
            <label htmlFor={name} className="text-sm text-gray-500">
                {label}
            </label>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Switch color={isSwitchOn ? 'green': 'red'} name={name} checked={isSwitchOn} onChange={handleSwitchChange} required />
            <div className="flex flex-col gap-2 max-w-4xl mx-auto my-3 h-auto">
                <label htmlFor={`notes_for__${name}`} className="text-sm text-slate-500">
                    Notes
                </label>
                <Textarea
                    onChange={handleNotes}
                    id={`notes_for__${name}`}
                    placeholder="Start typing here..."
                />
            </div>
        </Card>
    );
}

export default CheckListField;