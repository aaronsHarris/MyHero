import React, {Component } from "react";

export const Dice = (props) => {
  return (
    <div>
      <i className="font-xl{`fas fa-dice-one-${props.face}`}" />
    </div>
  )
}
