import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import axios from 'axios'
import img from '../logo.PNG'
const Header = () => {

    const [icon, setIcon] = useState();
    const [temp, setTemp] = useState();
    const [cloud, setCloud] = useState();
    const [feelTemp, setFeelTemp] = useState();

    // 날씨 api
    const cityName = "Naju";
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=kr&units=metric`;
    
    useEffect(()=>{
        const weather = () => {
            axios.get(url)
            .then((res)=>{
            console.log(res)
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
            setCloud(res.data.weather[0].description)
            setTemp(parseInt(res.data.main.temp+2))
            setFeelTemp(parseInt(res.data.main.feels_like+2))
            console.log(res.data)
        }).catch((err)=>console.log(err))
        }
        weather();

        const interval = setInterval(weather, 3600000);
        
            // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval을 정리
            return () => clearInterval(interval);
    },[])

  return (
    <div className='header'>
        <div>
            <img src={img} className='logo'/>
            <div className='welcome'>Have A Good Day!</div>
        </div>
        <div className='weather-container'>
            <div className='icon'>
                <img src={icon} width='70px'/>
                <h2>{cloud}</h2>
            </div>
            <div className='weather'>
                <p>현재온도 :</p>
                <p> {temp}°C</p>
                <p>체감온도 :</p>
                <p> {feelTemp}°C</p>
            </div>
        </div>
    </div>
  )
}

export default Header