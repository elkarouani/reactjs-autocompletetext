import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText2 extends React.Component {
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
			suggestions: []
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
	};

	async getWords(value) {
		let array = [];
		let promise = fetch("https://api.datamuse.com/words?sp=" + value + "*&max=3")
		.then(res => res.json())
		.then(data => {
			let firstWord = data[0].word;
			let secondWord = data[1].word;
			let thirdWord = data[2].word;
			
			array = new Array(firstWord, secondWord, thirdWord);

			return array;
		})
		.catch(err => console.log(err));

		let result = await promise;

		return array;
	}

	suggestionSelected(value) {
		this.setState(() => ({
			text: value,
			suggestions: []
		}));
	}

	renderSuggestions() {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}

		return (
			<datalist id="browsers">
				{suggestions.map((item, key) => <option id={key} value={item} />)}
			</datalist> 
		)
	}

	render() {
		const { text } = this.state;
		return (
			<div className="AutoCompleteText">
				<input type="search" list="browsers" autoComplete="off" onChange={this.onTextChanged} value={text} />
				{this.renderSuggestions()}
			</div>
		);
	}
}