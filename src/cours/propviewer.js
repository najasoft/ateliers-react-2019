import React from 'react';
const PropViewer =(props)=>{
    return <div><h1>
        {props.match.path}
    </h1>
    <h1>    {props.match.url}
        {console.log(props.match)}

    </h1>
    <h1>       {console.log(props.history)} 
       </h1>
       <h1>{ props.location.key}</h1>
       <h1>{ console.log(props.location)}</h1>
    <h1>{props.match.isExact}</h1>
    </div> 
}
export default PropViewer;