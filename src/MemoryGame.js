import React, { useState } from "react"
import MemoryCard from "./MemoryCard"
import _ from "lodash"

const cardsList = [
	{ imagePath: "", name: "fish" },
	{ imagePath: "", name: "goat" },
	{ imagePath: "", name: "alligator" },
	{ imagePath: "", name: "cow" },
	{ imagePath: "", name: "pig" },
	{ imagePath: "", name: "spider" },
	{ imagePath: "", name: "owl" },
	{ imagePath: "", name: "cheetah" },
]

const MemoryGame = () => {
	const [cards, setCards] = useState(cardsList)
	const [cardsChosen, setCardsChosen] = useState([])
	const [bestScore, setBestScore] = useState(0)

	const handleCardChoice = (card) => {
		if (cardsChosen.includes(card)) {
			setBestScore(cardsChosen.length)
			setCardsChosen([])
		} else {
			setCardsChosen([...cardsChosen, card])
		}
		setCards(_.shuffle(cards))
	}

	let cardsDiv = cards.map(({ name, imagePath }) => (
		<MemoryCard key={name} text={name} onClick={() => handleCardChoice(name)} />
	))

	return (
		<div>
			<div>Current Score: {cardsChosen.length}</div>
			<div>Best Score: {bestScore}</div>
			{cardsDiv}
		</div>
	)
}

export default MemoryGame
