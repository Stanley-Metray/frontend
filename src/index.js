import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

let hours = new Date().getHours()+10;
console.log(hours)
let greetings, textStyle;

if(hours>=0 && hours<12)
{
  greetings = 'Good Morning';
  textStyle = 'text-success';
}
else if(hours>=12 && hours<17)
{
  greetings = 'Good Afternoon';
  textStyle = 'text-warning';
}
  else if(hours>=17 && hours<20)
{
  greetings = 'Good Evening';
  textStyle = 'text-danger';
}
else
{
  greetings = 'Good night';
  textStyle = 'text-primary';
}

root.render(<>
  <div className="flex p-5">
    <h1 className='text-primary'>Hello, <span className={textStyle}>{greetings}</span></h1>
  </div>
</>);