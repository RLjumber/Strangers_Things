// import { useEffect } from 'react';
import  Posts  from './Posts';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <div className="main">
        <Posts />
      </div>
    </div>
  );
}

export default App;
