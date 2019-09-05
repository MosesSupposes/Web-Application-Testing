import React from 'react'

export default function Display(props) {
    return (
        <div className="display">
            <span style={{marginRight: '2rem'}}>Strikes: {props.strikes}</span>
            <span>Balls: {props.balls}</span>
        </div>
    )
}