import React, { useState } from 'react';
import {Date, Weekday} from "./date";
import List from "./todo-list";
import Month from "./month-year";
import Calender from "./calender-note";



function App() {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  function AddNote(){
    console.log("clicked");
  }
  
  return (
    <div>
      <List />
      <Month />
      <div className="calender-box">
        <div className="grid-date">
          {weekday.map((weekday) =>{
            return(
              <Weekday
                dates={weekday}
                />
            );
          })}
        </div>
        <div className="grid">
        {Array.from(Array(31), (_, i) => i + 1).map((num) => {
            return(
              <Date 
                number={num}
                ChangeNote={AddNote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
