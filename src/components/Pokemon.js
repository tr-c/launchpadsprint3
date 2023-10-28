import React from 'react'
// import "../Components"

const Pokemon = (props) => {
    return(
        <div className="pokemon">
            <div className="pokemon-image">
                image
            </div>
            <h2>{props.name}</h2>
            <h3>Cuteness: {props.cuteness}</h3>
        </div>
    )
}

export default Pokemon