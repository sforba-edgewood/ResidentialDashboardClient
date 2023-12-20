import { useEffect, useState } from "react";

const DocumentUpload = (props: any) => {
    const {setFilesToUpload} = props;

    const [files, setFiles] = useState<Array<File>>([]);

    const _handleUpload = async (e:  React.ChangeEvent) => {
        e.preventDefault();
        const target = e?.target as HTMLInputElement;
        const file: File =  (target.files as FileList)[0];
        const new_files: File[] = [...files, file];
        setFiles(new_files);
    }

    useEffect(()=>{
        setFilesToUpload(files);
    }, [files]);

    const renderFiles = () => {
       
        if(!files || files?.length === 0) {
            return(
                <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                    <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                    <span className="text-small text-gray-500">No files selected</span>
                </li>
            );
        }

        return files && files.map((file: File)=> {
            const url =  URL.createObjectURL(file);
            const acceptedFileTypes = ['image/gif', 'image/jpeg', 'image/png', 'application/pdf'];
            const isImage = file && acceptedFileTypes.includes(file['type']);
            const isPDF = file['type'] === 'application/pdf';
            if(!isImage) return false;

            return (
                <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                    <article className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
                        {isPDF ?  (                        
                            <embed src={url} width={'100%'} height={'100%'} />
                        ): (
                            <img alt="upload preview" src={url} className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                        )}
                        
                        <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                            <h1 className="flex-1 group-hover:text-blue-800"></h1>
                            <div className="flex">
                            <span className="p-1 text-blue-800">
                                <i>
                                <svg className="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                </svg>
                                </i>
                            </span>
                            <p className="p-1 size text-xs text-gray-700"></p>
                            <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                </svg>
                            </button>
                            </div>
                        </section>
                    </article>
                </li>
            );
        })
    }
    return (
        <>
            <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" onChange={_handleUpload} type="file" className="hidden" />
                </label>
            </div>   
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
                <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900 w-full">
                    Files To Upload
                </h1>

                <ul id="gallery" className="flex flex-1 flex-wrap w-full">

                    {renderFiles()}
                </ul>
            </div>       
        </>       
    );
}

export default DocumentUpload