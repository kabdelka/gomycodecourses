import React from 'react'
import {Route, Switch} from 'react-router-dom';


const LogicRouter = ({routeTab}) => {
	return (

		<Switch>
		{routeTab.map((elem,index)=>{
			return (
				<Route path={elem.path} key={index}>
				{elem.comp()}
				</Route>
				)
		})}

		</Switch>
		
		)
}


export default LogicRouter;

