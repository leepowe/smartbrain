import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
	apiKey: '4efce0f807a243bca3379fe94b20970c',
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });

		app.models
			.predict('face-detection', this.state.input)
			.then((response) => {
				console.log('hi', response);
				if (response) {
					fetch('http://localhost:3000/image', {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id,
						}),
					})
						.then((response) => response.json())
						.then((count) => {
							this.setState(Object.assign(this.state.user, { entries: count }));
						});
				}
				this.displayFaceBox(this.calculateFaceLocation(response));
			})
			.catch((err) => console.log(err));
	};

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	render() {
		return (
			<div className='App'>
				<ParticlesBg type='cobweb' num={30} bg={true} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				<FaceRecognition />
			</div>
		);
	}
}

export default App;
