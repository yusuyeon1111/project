import React, { useContext, useEffect, useState } from 'react'
import axios, { toFormData } from 'axios'
import '../css/member.css'
import UserContext from '../UserContext';

const Member = () => {

  const {todayFull, setTodayFull} = useContext(UserContext);
  const [memberList, setMemberList] = useState([]);
  const [restList, setRestList] = useState([]);
  const [tardyList, setTardyList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(todayFull)
        const response = await axios.get('/apiList/List');
        console.log(todayFull);
        const filteredMemberList = response.data.filter(item => item['일자 '].replace(/\s/g,'') == todayFull);
        console.log(filteredMemberList)
        const tardyList = filteredMemberList.filter(item => {
          if (item['출근시간 ']) {
            const timeParts = item['출근시간 '].split(' ')[3].split(':')[0];
            return timeParts >= 9;
          }
          return false;
        });
        setTardyList(tardyList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // fetchData 함수 호출
  
  }, [todayFull]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sk",todayFull)
        const response = await axios.get('/apiRest/rest');
        console.log(response.data)
        const filterRestList = response.data.filter(item => item['근태일자'].replace(/\s/g,'') == todayFull );
        setRestList(filterRestList);
        console.log('rr',restList)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // fetchData 함수 호출
  
  }, [todayFull]);
  
  return (
    <div className='member-container'>
      <p>월차</p>
      <div className='rest'> 
      {restList.map((item, index)=> (
        <div className='memberList' key={index}>
                <p className='member'>{item['사원명']}</p>
             </div>
      ))}
      </div>

      <p>지각</p>
      <div className='rest2'>
      {tardyList.map((item, index) => (
          <div className='memberList' key={index}>
              <p className='member'>{item['사원명 ']}</p>
           </div>
    ))}
      </div>
     
    </div>
  )
}

export default Member