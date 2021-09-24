import React, {Component } from "react";

export const Dice = (props) => {
  return (
    <div className="font">
      <i className={`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
