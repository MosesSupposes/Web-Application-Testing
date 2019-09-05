import React from 'react'

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <button onClick={props.strike}>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button onClick={props.reset}>Hit</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}