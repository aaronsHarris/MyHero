import React, {Component } from "react";

export const Dice = (props) => {
  return (
    <div>
      <i className="font-"{`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
