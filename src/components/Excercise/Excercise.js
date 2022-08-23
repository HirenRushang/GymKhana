import React from 'react'
import "./Excercise.css"
import ExcerciseCard from './ExcerciseCard'

const Excercise = () => {
  return (
    <div className='excercise-wrapper container-fluid'>
        <div className='excercise-section container'>
            <div className='row'>
            <div className='col-xxl-12'>
                <p className='excercise-showing-result'>Showing Result</p>
            </div>
            </div>

            <div className='row'>
                <div className='col-xxl-12'>
                    <div>
                    <ExcerciseCard />
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Excercise