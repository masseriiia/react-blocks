import Title from "./common/Title";

import './scss/app.scss'
import Blocks from "./components/Blocks";

function App() {
  return (
      <div className="solition-block">
          <div className="container">
              <span className="app-span">front-end development solutions</span>
              <Title>We provide different solutions through our expertise in front-end</Title>
               <Blocks/>
          </div>
      </div>
  );
}

export default App;
