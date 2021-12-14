import React,{useState} from 'react';
import './Weather.css';
import axios from 'axios';
function Weather() {
  const [temp,setTemp] = useState('');
  const [desc,setDesc] = useState('');
  const [city,setCity] = useState('algeria');
  const [country,setCountry] = useState('');

  const getData = (city,country)=>{

    axios({
      method :'GET',
      url :`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92449f23ccc46be861cd113396c23bdc`
    }).then(
      (response)=>{
        console.log(response.data); setTemp(response.data.main.temp -273.15)
        setDesc(response.data.weather[0].main)
        setCountry(response.data.sys.country)
      })
    .catch((error)=>{console.log(error)})
  }



  return (
    <div className="App" style={{margin:'auto'}}>
      <div className='resault'>
       <div className='container'>
 
       <h1>{country} </h1>

        
        <h2>{Math.round(temp *100) /100 + '°C'.toLowerCase()} </h2>
        
       <h3> {desc}</h3>
    
       </div>


      </div>
      <br/>
        <h3 className='title' style={{textAlign:'center'}}>search countries or cities weather</h3>
      <input onFocus={(e)=>{e.target.value =''}} blaceholder='enter weather' className='inp' value={city} onChange={(e)=>setCity(e.target.value)} />
      <button className="btn" onClick={()=>{getData(city,country)}}>search weather</button>
    </div>
  );
}

export default Weather;
