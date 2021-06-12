const loadData = async(body)=>{
    try
    {
        let response=await fetch('/api/loadData',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        });

        return await response.json();
        
    }
    catch(err)
    {
        console.log(err);
    }
}

export {loadData};