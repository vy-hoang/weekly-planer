import React from "react";
function Month(){
    const d = new Date();
    const date = d.getDate();
    const year = d.getFullYear();
    const month = d.toLocaleString('default', {month: 'long'});
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    return(
        <div className="Calender"><h1 className="float">
        {days[d.getDay()]}, {month} {date}, {year}
        </h1></div>
    );
}

export default Month;