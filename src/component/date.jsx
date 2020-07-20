import React from 'react';
function Date(props){
    function Trigger(){
        props.ChangeNote();
    }
          return (
                <div onClick={Trigger} className="grid-item num" >{props.number}</div>
          )
        
}
function Weekday(props){
    return(
        <div className="grid-item extra" >{props.dates}</div>
    )
}

export {Date, Weekday};