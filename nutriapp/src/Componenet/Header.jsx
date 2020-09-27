import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const Header = ({fetchData}) => {
	return (<div className="header">
		<Search className='search'
      placeholder="chicken, beef, porc ..."
      onSearch={value => fetchData(value)}
      style={{ width: "60%" , height:50 }}
    />
	</div>)
}


export default Header;