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

    function Remove(id){
       
    

        if(window.confirm("delete this item")){
            setArray(PreDel => {
           
                return PreDel.filter((list, index) => {
                   
                    return index !== id;
                   
                });
            });
        }else{
            return array;
        }
    }

    return(

        <div className="container">
            <div className="heading">
                <h1>Notes</h1>
            </div>
            <div>
                <div>
                    <input name="input" className="line" type="text" onChange={handleChange} value={item}></input>
                    <button onClick={handleClick} type="submit"> <span >Add</span></button>
                    
                </div>
                {array.map((list, index) =>{
                    return(
                        <Note 
                            content={list} 
                            onDelete={Remove}
                            key={index}
                            id={index}
                        />
                    );
                    })}
                
            </div>
      </div>

    );
}

export default List;