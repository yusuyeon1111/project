import React, { useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import '../css/custom.css'
import axios from 'axios';
const Calender = () => {

  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  const [mark, setMark] = useState([]);
  const nav = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('/apiInfo/info');
        const date = response.data.map((item)=>item.작성일)
        setMark(date)
        console.log(mark)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60 * 60 * 1000);
     // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval을 정리
    return () => clearInterval(interval);
  },[])
  
  return (
    <div className='calendar-container'>
      <IoArrowBack style={{fontSize:'50px'}} onClick={()=>nav("/")}/>
      <div className='calendar'>
        <Calendar
          locale='en' 
          onChange={onChange} 
          value={value}
          formatDay={(locale, date)=>moment(date).format('D')}
          showNeighboringMonth = {false}
          tileDisabled={({date,view})=>!mark.find((x)=> x === moment(date).format("YYYY/MM/DD"))}
          tileContent={({date,view}) => {
            let html = [];
            if(mark.find((x)=> x === moment(date).format("YYYY/MM/DD"))){
                 html.push(<div className="dot"></div>);
            }
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            )
          }}
          />
      </div>
      <Info/>
    </div>
  )
}

export default Calender