import React from 'react';
import { Header} from './components';
import { Home, Cart} from './pages';
import { Route} from 'react-router-dom';

function App() {

  return (
    <div>
  <Header />
    <div className="wrapper">
      
      <div className="content">
        <Route exact path='/' component={Home} />  {/*используется render, если хотим прокинуть пропсы*/}
        <Route exact path='/Cart' component={Cart} />
      </div>
    </div>
    </div>
  );
}

export default App;

