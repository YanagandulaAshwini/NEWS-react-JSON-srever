import React from 'react'
export default function Card(props){

const onReadLater=()=>{
    const db={description:props.desc,newsurl:props.newslink}
    fetch('http://localhost:3001/db',{
        method:'POST',
        body:JSON.stringify(db),
        headers:{"Content-Type":"application/json; charet=UTF-8"}
    })
    .then((res)=>res.json())
}
 return(
       <div className="container-fluid">
           <div className="card-deck" >
           <div className="row">
               <div className="col-md-3">
                   <div class="card" style={{"width":"18rem"}}>
                <img src={props.imgurl} class="card-img-top" alt="image"/>
                <div class="card-body">
                     <h5 class="card-title">{props.title}</h5>
                     <button className="btn btn-primary btn-success" onClick={onReadLater}>Read Later</button>
                </div>                
          </div>
       </div>
       </div>
       </div>
       </div>

   )
}