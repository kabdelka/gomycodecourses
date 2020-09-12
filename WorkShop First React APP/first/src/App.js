import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Blog from './Component/Blog';
import Pub from './Component/Pub';

const ARTICLES = [
  {
    title: "React",
    date: "today",
    text:
      "When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.",
  },
  {
    title: "JavaScript Resources",
    text:
      "The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.",
  },
  {
    title: "No New Features",
    date: "ntoday",
    text:
      "The React 17 release is unusual because it doesn’t add any new developer-facing features. Instead, this release is primarily focused on making it easier to upgrade React itself.We’re actively working on the new React features, but they’re not a part of this release. The React 17 release is a key part of our strategy to roll them out without leaving anyone behind.In particular, React 17 is a “stepping stone” release that makes it safer to embed a tree managed by one version of React inside a tree managed by a different version of React.",
  },
  {
    title: "React",
    date: "ntoday",
    text:
      "When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.",
  },
  {
    title: "React",
    date: "today",
    text:
      "When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.",
  },
  {
    title: "React",
    date: "today",
    text:
      "When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.",
  },
];

function App() {
	return (
		<div>


		<Navbar text="Blog App"/>
		<div className="container">
			<Pub title="Pub 01"/>
			<Blog articles={ARTICLES}/>
			<Pub title="Pub 02"/>
		</div>


		</div>
		);
}

export default App;
