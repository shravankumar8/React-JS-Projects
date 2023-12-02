import axios from "axios";
// this is base URL
const BASE_URL = "https://api.themoviedb.org/3/";
// this is the token we use for authentication
const TMDB_token = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers={Authorization:"Bearer " + TMDB_token}
export const fetchdatafromapi=async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL+url,{headers,params})
        // console.log(data)
        return data;
    }
    catch(err){
        console.error(err);
        return err

    }

}

