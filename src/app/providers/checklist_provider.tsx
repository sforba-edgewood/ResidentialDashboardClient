
import { createContext,  useState,  PropsWithChildren } from 'react';
export const ChecklistContext = createContext({});

export const ChecklistProvider = ({ children }: PropsWithChildren<{}>) => {
    const [values, setValues] = useState({});
    const [filesToUpload, setFilesToUpload] = useState([]);
    const [submitDate, setSubmitDate] = useState<Date | null>(null);

    const convertImagetoBase64 = (file: File) => {
        return new Promise((resolve, reject)=>{
            let fileReader = new FileReader();

            fileReader.onloadend = () => {
                return resolve({data:fileReader.result, name:file.name, size: file.size, type: file.type});
            }
            fileReader.readAsDataURL(file);
        });


    }
    const postChecklistToAPI = async () => {

        const imagesArrayBuffer = await Promise.all(filesToUpload.map(f=>{return convertImagetoBase64 (f)}));

        const submission_package = {
            "submit_date": submitDate,
            "values": values,
            "documents": imagesArrayBuffer
        }

        try {
            const response = await fetch("/api/checklist", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submission_package)
            });
            console.log(response)
            
        } catch(e) {
            console.log(e);
        }
    }

    const postDraftToAPI = async () => {
        try {
            const response = await fetch("/api/draft", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            console.log(response)
            
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <ChecklistContext.Provider value={{values, setValues, submitDate, setSubmitDate, setFilesToUpload, postChecklistToAPI, postDraftToAPI}}>
            {children}
        </ChecklistContext.Provider>
    );
}

