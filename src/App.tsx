import { createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom' 

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const testContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <testContext.Provider value={'Teste'}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </testContext.Provider>
    
    </BrowserRouter> 

  );
}

export default App;
