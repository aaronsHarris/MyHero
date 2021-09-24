import React, {Component } from "react";

export const Dice = (props) => {
  return (
    <div>
      <i {`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
