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
// /////////////////////////////////////////////////////////////////////
// // export default App;
// // src/App.js
// import React from 'react';
// import CategoryUpload from './components/CategoryUpload';
// import FishUpload from './components/FishUpload';

// function App() {
//     return (
//         <div>
//             <h1>Fish Store</h1>
//             <CategoryUpload />
//             <FishUpload />
//         </div>
//     );
// }

// export default App;


// ///////////////////////////3
// src/App.js

import React, { useState } from 'react';
import CategoryUpload from './components/CategoryUpload';
import FishUpload from './components/FishUpload';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('category');

  const renderContent = () => {
    switch (activeView) {
      case 'category':
        return <CategoryUpload />;
      case 'fish':
        return <FishUpload />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>FishStore Admin</h2>
        <ul className="menu">
          <li
            className={activeView === 'category' ? 'active' : ''}
            onClick={() => setActiveView('category')}
          >
            Upload Category
          </li>
          <li
            className={activeView === 'fish' ? 'active' : ''}
            onClick={() => setActiveView('fish')}
          >
            Upload Fish
          </li>
        </ul>
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
