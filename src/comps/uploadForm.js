import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        //if there is a file selected by the user to be uploaded and is of allowed type of file
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
                </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        
        </form>
    )
}
export default UploadForm;