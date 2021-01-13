import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Navbar} from './components/NavBar'
import {Home} from './components/home/Home'
import {Posts} from './components/posts/Posts'
import {Create} from './components/create/Create'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact><Home/></Route>
        <Route path="/posts"><Posts/></Route>
        <Route path="/create"><Create/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
