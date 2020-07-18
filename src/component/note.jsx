import React, { useState } from 'react';

function Note(props){
    return(

        <div>
            <ul>
                <li> {props.content}<span><i class="fa fa-trash-o bin" /></span></li>
            </ul>
        </div>

    );
}

export default Note;