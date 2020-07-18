import React, { useState } from 'react';
import Note from "./note";


function List(){

    const[item, setItem] = useState("");
    const [array, setArray] = useState([]);

    function handleChange(event){
        const todo = event.target.value;
        setItem(todo);
        console.log(item);
    }

        function handleClick(event){
        setArray(preValue =>{
            return[
                ...preValue, item
            ];
        });
        console.log(array);
        setItem("");
    }

    

    return(

        <div className="container">
            <div className="heading">
                <h1> to-do list</h1>
            </div>
            <div>
                <div>
                    <input name="input" className="line" type="text" onChange={handleChange} value={item}></input>
                    <button onClick={handleClick} type="submit"> <span >Add</span></button>
                    
                </div>
                {array.map((list) =>{
                    return(
                        <Note 
                            content={list} 
                        />
                    );
                    })}
                
            </div>
      </div>

    );
}

export default List;