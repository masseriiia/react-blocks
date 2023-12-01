import Solution from './components/Solution/index.jsx';
import Conditions from "./components/Conditions/index.jsx";
import Promote from "./components/Promote/index.jsx";
import Progress from "./components/Progress/index.jsx";
import './scss/app.scss'

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
