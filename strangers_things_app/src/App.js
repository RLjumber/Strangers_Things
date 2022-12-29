// import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import  Posts  from './Posts';
import Header from './Header';
import SignUp from './SignUp';

function App() {

  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <div className="main">
      <Route exact path={'/Posts'}>
        <Posts />
      </Route>
      </div>
      <Route exact path={'/register'}>
          <SignUp />
      </Route>
    </div>
  );
}

export default App;
