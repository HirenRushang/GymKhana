import React, { useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import { excerciseOptions, fetchData } from "../../utlis/fetchData";
import { SearchExContext } from "../../context/SearchExcerciseContext";
import HorizentalScrollBar from "./HorizentalScrollBar";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const{ setExsercise, setBodyParts, bodyParts} = useContext(SearchExContext)

  useEffect(()=>{
     
    const fetchCategory =  async()=>{
        const response  = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions)
        const data =  await response.json()
        
       
        setBodyParts(["all", ...data])
        
    }
   
   
   fetchCategory()
     

  },[])

  const handleSearch = async()=>{
    if(search){
        const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions)
       

        const searchedExercises = excerciseData.filter(
            (item) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
          );

          setSearch("")
          setExsercise(searchedExercises)
          window.scrollTo(0,1400)
    }
  }

  return (
    <div className="searchbar-wrapper container-fluid">
      <div className="searchbar-section container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="searchbar-title">
              <p>Excercise You Should Know</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="userinput-box">
              <input
                type="text"
                placeholder="Search Excercise, Body-Part and Type"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                value={search}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12"></div>
        </div>
        <div className="row body-part-carousel">
        <div className="col-xxl-12">
            <HorizentalScrollBar data={bodyParts} />
        </div>
      </div>

     
      </div>
    </div>
  );
};

export default SearchBar;
