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
import React, { useState, useEffect } from 'react';

function App() {
  const [nachricht, setNachricht] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/nachricht')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setNachricht(json.nachricht);
      });
  }, []);

  return (
    <div>
      <h1>{nachricht}</h1>
    </div>
  );
}

export default App;