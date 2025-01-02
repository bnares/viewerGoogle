
export default async (request: Request)=>{
    const data = await request.json();
    const {file, token, fieldId} = data;
    if(fieldId === String || token === String && file === Blob){
        fetch(`https://www.googleapis.com/upload/drive/v3/files/${fieldId}`,{
            method:"PATH",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body:file
        })
    }
}