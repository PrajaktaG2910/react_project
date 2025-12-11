import React, { useEffect, useState } from 'react'
import { Link, Links, useNavigate, useParams } from 'react-router-dom';
import { courses } from '../data';


function Course() {
  const navigate = useNavigate();
  //const[search,setsearch]=useState(" ")
  
  const[data,setdata]=useState(courses)
  const[foundCourse,setfound]=useState(null)
     
  const handlechange=(event)=>{
    const temp=[...courses]          
        console.log("in handle change");
        const value=event.target.value.toLowerCase().trim()
        console.log(value);
        
        
   const newdata = temp.filter((val)=>val.title.toLowerCase().includes(value))  
   console.log(newdata);
    
   setdata(newdata)
        
//const foundCourse=courses.find((data)=>data.title.toLowerCase()===value.toLowerCase());
 //setfound(foundCourse || null);

  }

   const handleCardClick = (id) => {
     console.log("course clicked:", id);
    
    navigate(`/courses/${id}`); // this will work because navigate is defined
  };


 
  
  


  

  return (
    <div className="courses-page">
      
      
      <header className="courses-header">
        <div className="header-placeholder" />
        <h1 className="courses-title">Courses</h1>
        <button className="profile-icon">
          <span>👤</span>
        </button>
      </header>

    
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for a course..."
          className="search-input"
          onChange={handlechange}
        />
      </div>

     
  
      <div className="course-list">
        

        {data.map((data) => (
          
          <div className="course-card" key={data.id}onClick={() => handleCardClick(data.id)}>
            <div
              className="course-icon"
              
              
              
              style={{ backgroundColor: data.color }}
              
            >
              {data.initials}
            </div>

            <div className="course-info">
              <h3 className="course-name">{data.title}</h3>
              <p className="course-desc">{data.description}</p>
            </div>

            <div className="course-progress">
              <div
                className="progress-circle"
                style={{ "--value": data.progress }}
              >
                <div className="progress-inner">
                  <span className="progress-text">{data.progress}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course