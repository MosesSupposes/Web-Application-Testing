import React from 'react'

export default function Display(props) {
    return (
        <div className="display">
            <span style={{marginRight: '2rem'}}>Strikes: {props.strikes}</span>
            <span style={{marginRight: '2rem'}}>Balls: {props.balls}</span>
            <span>Outs: {props.outs}</span>
        </div>
    )
}