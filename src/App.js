// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import React, { Component } from "react";
import AutoCompletedText from "./AutoCompletedText";
import Buylist from "./Buylist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Любими продукти</h1>
          <AutoCompletedText />
          <div>
            <Buylist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
