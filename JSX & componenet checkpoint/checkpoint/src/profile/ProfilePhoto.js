import React from 'react';
import pImage from './profilephoto.jpg'

const ProfilePhoto = () => {
	return (
		<div className="profilephoto">
		<img src={pImage} alt="profile photo" height="500" widht="500"/>
		</div>
		)
}




export default ProfilePhoto;