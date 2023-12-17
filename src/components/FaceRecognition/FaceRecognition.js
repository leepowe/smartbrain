import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center pa3 ma'>
			<div className='absolute mt2'>
				<img id='input-image'src={imageUrl} alt='' width='500px' height='auto' />
			</div>
		</div>
	);
};

export default FaceRecognition;
