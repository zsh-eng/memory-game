import React from "react"

const MemoryCard = (props) => {
	return <div onClick={props.onClick}>{props.text}</div>
}

export default MemoryCard
