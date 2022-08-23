import React, { useContext } from 'react'
import Icon from "../../assests/icon/gym.png"
import "./SearchBar.css"
import { SearchExContext } from '../../context/SearchExcerciseContext'

const BodyPartsCategory = ({item}) => {


    const{setbodypart} = useContext(SearchExContext)

    const categoryHandler = ()=>{
        setbodypart(item)
         window.scrollTo(0,1400)
    } 

  return (
    <div className='bodypart-Card' onClick={categoryHandler} >
        <img src={Icon} alt="" className='body-part-icon'  />
        <p className='card-text'>{item}</p>
    </div >
  )
}

export default BodyPartsCategory