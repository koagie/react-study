// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./style.css";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>
        COUNT UP!!!
      </button>

    </div>
  )

}

