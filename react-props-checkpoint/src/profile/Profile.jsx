import React from 'react';

const Profile = ({fullName,bio,profession,handleName,children}) => {

return (
	<div className="profile">
		<div className="info">
			<div className="name">FullName: {fullName}</div>
			<div className="bio">Bio: {bio}</div>
			<div className="profession">Profession: {profession}</div>
		</div>
		<div className="image"><img src={children} alt="anonymous" width='300' hight='300'/></div>
	</div>
	)
}

export default Profile;