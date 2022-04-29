import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom' 

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const testContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('Teste');
  
  return (
    <BrowserRouter>
      <testContext.Provider value={{ value, setValue }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </testContext.Provider>
    
    </BrowserRouter> 

  );
}

export default App;
