import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2' tiltMaxAngleX={50} tiltMaxAngleY={50} style={{ height: '150px', width: '150px' }}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain}></img>
                </div>
			</Tilt>
		</div>
	);
};

export default Logo;
