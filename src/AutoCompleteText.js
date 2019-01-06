import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super(props);
		this.items = [
			'David',
			'Damien',
			'Sara',
			'Jane',
		]

		this.state = {
			text: '',
			suggestions: [],
		};
	}

	onTextChanged = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, `i`);
			suggestions = this.items.sort().filter(item => regex.test(item));
		}
		
		this.setState(() => ({ suggestions, text: value }));
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
				{suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
			</ul>
		)
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<input onChange={this.onTextChanged} type={text} value={text}/>
				{this.renderSuggestions()}
			</div>
		);
	}
}