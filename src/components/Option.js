import React, {useState} from 'react';


function Option(props){
    return(
        <div>
        
          {props.option && props.option.map(op=>{
              return <p key={op}>{op}</p>
          })}
        </div>
        
    )
}
export default Option;