import React, { useState } from 'react';
import Date from "./date";
import List from "./todo-list";



function App() {
  
  
  return (
    <div>
      <List />
      <div className="Calender"><h1 className="float">Calender</h1></div>
      <div className="calender-box">
        <div className="grid">
        {Array.from(Array(31), (_, i) => i + 1).map((num) => {
            return(
              <Date 
               
                number={num}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
