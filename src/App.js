import './scss/app.scss';
import Conditions from './components/Conditions';
import Solution from './components/Solution';
import Promote from './components/Promote';

function App() {
  return (
    <div className="container">
      <Solution />
      <Conditions />
      <Promote />
    </div>
  );
}

export default App;
