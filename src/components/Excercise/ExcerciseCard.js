import React, { useContext, useEffect, useState } from "react";
import { SearchExContext } from "../../context/SearchExcerciseContext";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { excerciseOptions } from "../../utlis/fetchData";
import "./Excercise.css"

const ExcerciseCard = () => {
  const { excercise, setExsercise, bodypart } = useContext(SearchExContext);

  const [CurrentPage, setCurrentPage] = useState(1);
  const excercisePerPage = 9;

  const indexLastExcercise = CurrentPage * excercisePerPage;
  const indexFirstExcercise = indexLastExcercise - excercisePerPage;

  const excerciseSlice = excercise.slice(
    indexFirstExcercise,
    indexLastExcercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
  };



  useEffect(()=>{
     const fetchdata = async()=>{

      let excerciseDataBodyPart = []

      if(bodypart === "all"){
        const response  = await fetch('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions)
        excerciseDataBodyPart =  await response.json()
        
      }else{
        const response  = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, excerciseOptions)
        excerciseDataBodyPart  =  await response.json()
      
        
      }

      setExsercise(excerciseDataBodyPart)

     }

     fetchdata()
  },[bodypart])

  return (
    <>
      <div className="card-wrapper">
        {excerciseSlice.map((excercise, index) => {
          return (
            <div key={index} className="excercise-card">
              <div>
                <Link  to={`/excercise/${excercise.id}` }>
                  <img src={excercise.gifUrl} alt="" loading="lazy" />
                </Link>
              </div>
              <div className="btn">
                <button className="body-part">{excercise.bodyPart}</button>
                <button className="body-target">{excercise.target}</button>
              </div>
              <div className="excercise-name">
                <p>{excercise.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination-box">
        {excercise.length > 9 && (
          <Pagination
            size="large"
            onChange={paginate}
            count={Math.ceil(excercise.length / excercisePerPage)}
            page={CurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default ExcerciseCard;
