import { useState, useEffect } from 'react';
import { projStorage ,projFirestore,timestamp} from '../firebase/config';

const useStorage = (file) => {
    //progress of the upload
    const [progress, setProgress] = useState(0);

    //errors from the upload
    const [error, setError] = useState(null);

    //image url we get back from storage after image is uploaded
    const [url, setUrl] = useState(null);


    useEffect(() => {
        //references
        const storageRef = projStorage.ref(file.name);
        const collectionRef = projFirestore.collection('images');
        //uploads the file
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })

    }, [file]);
    return { progress, url, error };
}
export default useStorage;