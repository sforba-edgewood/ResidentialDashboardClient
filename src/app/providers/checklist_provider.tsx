
import { createContext,  useState,  useContext, PropsWithChildren } from 'react';
import { AuthContext } from './auth_provider';
export const ChecklistContext = createContext({});

export const ChecklistProvider = ({ children }: PropsWithChildren<{}>) => {
    const auth_data = useContext(AuthContext);

    const {currentUser} =  auth_data || {};

    const [property, setProperty] = useState<string>('');
    const [checklistType, setChecklistType] = useState<string>('');
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
        const {userEmail} = currentUser || {};

        const submission_package = {
            "checklistType": checklistType.toLocaleUpperCase(),
            "propertyCode": property,
            "userEmail": userEmail,
            "submitDate": submitDate,
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
            
        } catch(e) {
            console.error(e);
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
           
            
        } catch(e) {
            console.error(e);
        }
    }

    const provider_values = {
        property, 
        setProperty, 
        values, 
        setValues, 
        submitDate, 
        setSubmitDate, 
        setFilesToUpload, 
        postChecklistToAPI, 
        postDraftToAPI, 
        setChecklistType
    };

    return (
        <ChecklistContext.Provider value={provider_values}>
            {children}
        </ChecklistContext.Provider>
    );
}

