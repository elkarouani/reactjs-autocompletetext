import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super(props);
		// this.items = [
		// 	'David',
		// 	'Damien',
		// 	'Sara',
		// 	'Jane',
		// ]

		this.state = {
			text: '',
			suggestions: [],
		};
	}

	onTextChanged = async (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0) {
			// const regex = new RegExp(`^${value}`, `i`);
			// suggestions = this.items.sort().filter(item => regex.test(item));
			suggestions = await this.getWords(value);
		}

		this.setState(() => ({ suggestions, text: value }));
	}

	async getWords(value) {
		let array = [];
		let promise = fetch("https://api.datamuse.com/words?sp=" + value + "*&max=3")
		.then(res => res.json())
		.then(data => {
			let firstWord = (data[0].word !== undefined) ? data[0].word : '';
			let secondWord = (data[1].word !== undefined) ? data[1].word : '';
			let thirdWord = (data[2].word !== undefined) ? data[2].word : '';
			let fourthWord = (data[2].word !== undefined) ? data[2].word : '';
			let fifthWord = (data[2].word !== undefined) ? data[2].word : '';
			
			array = new Array(firstWord, secondWord, thirdWord, fourthWord, fifthWord);

			return array;
		})
		.catch(err => console.log(err));

		let result = await promise;

		return array;
	}

	suggestionSelected(value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}));
	}

	renderSuggestions() {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}

		return (
			<ul>
				{suggestions.map((item, key) => <li key={key} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
			</ul>
		)
	}

	render() {
		const { text } = this.state;
		return (
			<div className="AutoCompleteText">
				<input onChange={this.onTextChanged} type={text} value={text}/>
				{this.renderSuggestions()}
			</div>
		);
	}
}