import { useState, useRef } from 'react';
import { UploadClient } from '@uploadcare/upload-client';
import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';
const UploadcareUpload = () => {
    const [fileData, setFileData] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileData(selectedFile);
    };

    const handleUpload = async () => {
        try {
            setUploading(true);
            if (fileData) {
                const client = new UploadClient({ publicKey: 'da4cefbbff1ec62018df' });
                const file = await client.uploadFile(fileData);
                console.log(file.uuid);
            }
            const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
                publicKey: 'da4cefbbff1ec62018df',
                secretKey: '3d337e66a72deab9e7c7',
            });

            const result = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });
            if (fileInputRef.current) {
                { result && (fileInputRef.current.value = '') }
            }
            console.log(result);

        } catch (error) {
            setError(error.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className=' text-center'>
            <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <button onClick={handleUpload} disabled={uploading || !fileData}>
                {uploading ? 'Uploading...' : 'Submit'}
            </button>
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default UploadcareUpload;
