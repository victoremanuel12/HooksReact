import './App.css';
import SmarteCounter from './counter/SmarteCounter';
import Counter from "./counter/Counter"
import IfoodCounter from '../IfoodCounter/IfoodCounter';
function App() {
  return (
    <div className="App">
      <SmarteCounter/>
      <Counter/>
      <IfoodCounter/>
    </div>
  );
}

export default App;
