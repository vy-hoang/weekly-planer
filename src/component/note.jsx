import React, { useState } from 'react';

function Note(props){
    const [line, setLine] = useState(false);
    const [over, setOver] = useState(false);
   
    function Cross(){
        setLine(preValue =>{
            return !preValue;
        });
    }
    function Over(){
        setOver(true);
    }
    function Out(){
        setOver(false);
    }
    function Delete(){

        props.onDelete(props.id);
    }
    return(

        <div>
            
               
                <ul className="padding">
                     <li  style={{textDecoration: line ? "line-through": "none"}}> 
                        <span onClick={Cross}>{props.content} </span>
                        <span><i class="fa fa-trash-o bin" onMouseOver={Over} onMouseOut={Out}
                        style={{color: over ? "red": "black"}}
                        onClick={Delete}
                    /></span>
                    </li>
                    
                </ul>
               
                    
              
            
        </div>

    );
}

export default Note;