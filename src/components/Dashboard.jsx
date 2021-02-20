import React, { useState } from 'react';
//import {useEffect} from 'react';
import Card from './Card';
const axios=require('axios').default;
export default function DashBoard(){
    const[news,setNews]=useState([]);
    const[flag,setFlag]=useState(true);
    if(flag==true){
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=c0375bbcc34648b7803c3bb8a880c20b&page=1')
        .then(res=>setNews(res.data.articles))
        .then(setFlag(false))
    }
    return(
        <div className="container-fluid col-md-3" >
            {
              news.map(item=>
                <Card title={item.title}
                imgurl={item.urlToImage}
                desc={item.description}
                newslink={item.url}/>
                )
            }
        </div>
    )

}