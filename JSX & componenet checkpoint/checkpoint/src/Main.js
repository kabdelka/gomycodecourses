import React from 'react';
import ProfilePhoto from './profile/ProfilePhoto.js'
import FullName from './profile/FullName'
import Adress from './profile/Adress';
import './App.css';

const Main = () => {
	return (
		<div className="main">
		<ProfilePhoto/>
		<FullName/>
		<Adress/>
		</div>
		)
}







export default Main



// 2. Create Main.js file in src folder and use it as a root component for your React app 

// 3. Create profile folder (path: src/profile) 

// 4. Under profile folder Create (ProfilPhoto.js / FullName.js / Address.js ) in profile folder 

// 5. ProfilPhoto.js: a functional component that returns a Photo of your profile. 

// 6. FullName.js: a functional component that returns your full name. 

// 7. Address.js: a functional component that returns your address. 

// 8. Importe profile components into Main.js and use them. 