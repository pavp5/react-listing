import './App.css';
import Listing from './Listing';
import etsy from './etsy.json';

function App() {

  return (
      <Listing items={etsy} />    
  );
}

export default App;
