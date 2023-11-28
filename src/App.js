import './scss/app.scss';
import Conditions from './components/Conditions';
import Solution from './components/Solution';
import Promote from './components/Promote';
import Progress from './components/Progress';

function App() {
  return (
    <div className="container">
      <Solution />
      <Conditions />
      <Promote />
      <Progress />
    </div>
  );
}

export default App;
