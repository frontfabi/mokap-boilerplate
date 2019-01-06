import React, { Component } from 'react';
import Logo from './../React-icon.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
	-webkit-animation: spin 4s infinite linear;
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

class App extends Component {
	render() {
		return (
			<div>
				<h1>Mokap React BoilerPlate</h1>
				<StyledLogo src={Logo} />
			</div>
		);
	}
}

export default App;
