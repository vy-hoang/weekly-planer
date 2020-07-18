import React, { useState } from 'react';

function Note(props){
    return(

        <div>
            <ul>
                <li>{props.content}</li>
            </ul>
        </div>

    );
}

export default Note;