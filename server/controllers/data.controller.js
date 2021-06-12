import https from 'https';
import fetch from 'node-fetch';


const loadData = async(req,res)=>{

    let data = await getDataFromApi();

    if(data === undefined)
       return res.status('400').json({error: 'Unbale to load data'});
    
   // console.log(data);
   let hasMore = true;
    let pageNo = req.body.pageNo;
    let dataPerPage = req.body.dataPerPage;
    let totalData = pageNo * dataPerPage;
    let products;
    if(data.length <= totalData){
         products=data.slice(0,data.length);
         hasMore=false;
    }
    else
     products = data.slice(0,totalData);
    return res.status('200').json({hasMore,products});

}

const getDataFromApi = async()=>{

      let res = await fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6');

      if(res.ok) {
            let data = await res.json();

            return data.products;
      }

}

export default {loadData};