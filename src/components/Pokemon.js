import React from 'react'
import "./Pokemon.css"

const Pokemon = (props) => {
    return(
        <div className="pokemon">
            <img className="image" src={props.image} />
            <h2>{props.name}</h2>
            <h3>Cuteness: {props.cuteness}</h3>
        </div>
    )
}

export default Pokemon