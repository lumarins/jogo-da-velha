import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
          <link rel="stylesheet" href="./App.css" />
      </head>

      <body>
          <div className="ticTacToe">
              <div className="column">
                  <span className="square" data-col="0" data-row="0"></span>
                  <span className="square" data-col="0" data-row="1"></span>
                  <span className="square" data-col="0" data-row="2"></span>
              </div>
              <div className="column">
                  <span className="square" data-col="1" data-row="0"></span>
                  <span className="square" data-col="1" data-row="1"></span>
                  <span className="square" data-col="1" data-row="2"></span>
              </div>
              <div className="column">
                  <span className="square" data-col="2" data-row="0"></span>
                  <span className="square" data-col="2" data-row="1"></span>
                  <span className="square" data-col="2" data-row="2"></span>
              </div>
          </div>
          <script src="./game.js"></script>
      </body>
    </html>
  );
}

export default App;
