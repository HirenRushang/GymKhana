import React from "react";
import "./Detail.css"

import BodyPartImage from "../../assests/icon/body-part.png";
import TargetImage from "../../assests/icon/target.png";
import EquipmentImage from "../../assests/icon/equipment.png";

const Detail = ({ excerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = excerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="container-fluid excercisedetail-wrapper">
      <div className="container excercisedetail-section">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="excercise-img">
              <img src={gifUrl} alt={name} loading="lazy" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="excercise-info">
            <div className="title">
              <p>{name}</p>
            </div>
            <div className="excercise-about">
              <p>
                Exercises keep you strong.{" "}
                <span style={{ textTransform: "capitalize" }}>{name}</span> bup
                is one of the best <br /> exercises to target your {target}. It
                will help you improve your <br /> mood and gain energy.
              </p>
            </div>
            <div className="excercise-icon">
            {extraDetail.map((item, index)=> (
                <div className="detailwith-icon" key={index}>
                <div><img src={item.icon} alt=""/></div>
                <div>{item.name}</div>
                </div>
            ))}
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
