import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../css/info.css'
import { BsFillInfoSquareFill } from "react-icons/bs";
import UserContext from '../UserContext';
const Info = () => {
        const {todayFull} = useContext(UserContext);
        const [endDay, setEndDay] = useState("")
        const [noticeData, setNoticeData] = useState([]);
        const nav = useNavigate();
        const [none , setNone] = useState("")
        // 날짜 
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get('/apiInfo/info');
                const filterdata = response.data.filter(item => {
                  if(item['완료일']) {
                    const month = item['완료일'].split("/")[1];
                    const day = item['완료일'].split("/")[2];
                    const todayMonth = todayFull.split("/")[1];
                    const todayday = todayFull.split("/")[2];
                    return month === todayMonth && day >= todayday;
                  }
                  return false;
                });
                if (filterdata.length === 0) {
                  setNone("공지사항 없음");
                } else {
                  setNoticeData(filterdata);
                  setNone(""); // 공지사항이 있으면 none을 초기화
                }
              } catch (error) {
                console.error('Error fetching data:', error);
                setNone("공지사항 없음");
              }
            };
            // 초기 실행
            fetchData();
        
            const interval = setInterval(fetchData, 60 * 60 * 1000);
            // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval을 정리
            return () => clearInterval(interval);
    },[todayFull])
    
    useEffect(()=>{
      if(todayFull == endDay){
        console.log("일치합니다")
      }else if(todayFull != endDay){
        console.log("불일치")
      }
    },[todayFull, endDay])

    const detailHandler = () => {
      console.log("클릭됨")
    }
    

  return (
    <div className='info-container'> 
    <div className='null'>
      {noticeData.length==1? null: <p style={{marginTop:"80px"}}></p>}
    </div>
      <p>{noticeData.length == 0 ? "공지사항없음":""}</p>
       {noticeData.map((item, index) => (
          <div className='notice' key={index} onClick={detailHandler}>
            <BsFillInfoSquareFill style={{color:"#4974FF", fontSize:'30px',backgroundColor:'white',padding:'10px', borderRadius:'10px', margin:'10px'}} />
            <span style={{marginLeft:'15px', margin:'15px'}}>공지사항</span>
            <div>
            <p style={{marginTop:'30px'}}>{item.제목}</p>
           </div>
           
           </div>
    ))}
    <p className='top'>{noticeData.length == 1 ? "":null}</p>
    </div>
  )
}

export default Info