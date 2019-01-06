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
	}

	render() {
		return (
			<div>
				<input onChange={(e) => console.log(e.target.value)} type="text"/>
				<ul>
					{this.items.map((item) => <li>{item}</li>)}
				</ul>
			</div>
		);
	}
}