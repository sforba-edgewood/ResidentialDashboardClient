import { Textarea } from "@tremor/react";

const NotesField = () => {
    return(
        <div className="flex flex-col gap-2 max-w-4xl mx-auto my-1 h-auto">
        <label htmlFor="notes" className="text-sm text-slate-500">
          Notes
        </label>
        <Textarea
          id="notes"
          placeholder="Start typing here..."
        />
        </div>
    );
}

export default NotesField