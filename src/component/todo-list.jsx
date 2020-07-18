import React, { useState } from 'react';

function List(){

    function handleChange(){}

    return(

        <div className="container">
            <div className="heading">
                <h1> to-do list</h1>
            </div>
            <div>
                <form>
                    <input  className="line" type="text" onChange={handleChange} ></input>
                    <button> <span>Add</span></button>
                </form>
            </div>
      </div>

    );
}

export default List;