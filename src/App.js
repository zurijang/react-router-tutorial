import React from 'react';
import { Route } from "react-router";
import { Link } from 'react-router-dom';
import About from './component/About';
import HistorySample from './component/HistorySample';
import Home from './component/Home';
import Profile from './component/Profile';
import Profiles from './component/Profiles';


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
    </div>
  );
}

export default App;
