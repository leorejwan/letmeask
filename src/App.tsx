import { Button } from './components/Button'

function App() {
  return (
    <>
      <Button text="button 1" />
      <Button text="button 2" />
      <Button text="button 3" />
      <Button>this is a child</Button>
      <Button/>
    </>
  );
}

export default App;
