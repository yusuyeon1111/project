import React, { useContext, useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import '../css/custom.css'
import axios from 'axios';
import UserContext from '../UserContext';
const Calender = () => {
  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  const [mark, setMark] = useState([]);
  const nav = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [title,setTitle] = useState("");
  const [endDay, setEndDay] = useState("");
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('/apiInfo/info');
        const date = response.data.map((item)=>item.작성일)
        const title = response.data.map((item)=>item.제목)
        const end = response.data.map((item)=>item.완료일)
        setTitle(title)
        setMark(date)
        setEndDay(end)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60 * 60 * 1000);
    return () => clearInterval(interval);
  },[])
  
  return (
    <div className='calendar-container'>
      <IoArrowBack style={{fontSize:'50px'}} onClick={()=>nav("/")}/>
      <div className='calendar'>
        <Calendar
          locale='en' 
          onChange={(date)=> {
            setSelectedDate(moment(date).format("YYYY/MM/DD"));
            console.log("클릭",selectedDate)
          }} 
          value={value}
          formatDay={(locale, date)=>moment(date).format('D')}
          showNeighboringMonth = {false}
          calendarType='hebrew'
          tileDisabled={({date,view})=>!mark.find((x)=> x === moment(date).format("YYYY/MM/DD"))}
          tileContent={({date, view}) => {
            const formattedDate = moment(date).format("YYYY/MM/DD");
            const eventIndex = mark.findIndex(x => x === formattedDate);
            if (eventIndex !== -1) {
                return (
                    <div className="event-container">
                        <div className="event-title">{title[eventIndex]}</div>
                    </div>
                );
            } else {
                return null;
            }
        }}
          />
      </div>
    </div>
  )
}

export default Calender