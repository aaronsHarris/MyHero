import React, {Component } from "react";
import 'src/components/Skills/dice.css'

export const Dice = (props) => {
  return (
    <div>
      <i className={`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
