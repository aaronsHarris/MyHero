import React, {Component } from "react";

export const Dice = (props) => {
  return (
    <div className="text-lg">
      <i className={`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
