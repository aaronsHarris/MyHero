import React, {Component } from "react";
import 'src/components/Skills/dice.cs'

export const Dice = (props) => {
  return (
    <div>
      <i className={`fas fa-dice-one-${props.face}`} />
    </div>
  )
}
