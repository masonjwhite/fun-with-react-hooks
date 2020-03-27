import React, { Component } from 'react';

// Create our context
export const ThemeContext = React.createContext();

// Create our provider component
export class ThemeProvider extends Component {
	theme = {
		primaryColor: '#BADA55',
		secondaryColor: '#555555',
		fontFamily: 'Calibri',
		fontSize: '15px'
	};

	render() {
		return (
			// Pass data using "value"
			<ThemeContext.Provider value={this.theme}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}