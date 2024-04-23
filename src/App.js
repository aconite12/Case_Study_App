import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo/brand logo/logo.png';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href='/'>
              <img src={logo} alt="Brand Logo" width="40" height="40" className="d-inline-block align-top" /> SwiftBuy
            </a>
          </div>
        </nav>
      </header>
        <Routes>
          <Route 
          exact path="/" 
          element={
          <div>
            {/* for homepage /}
          </div>
          } />
          <Route

            path="/ProductPage"
            element={

              <div>
                {/ for product page /}
              </div>
            }
          />
          <Route
            path="/ViewCart" // Corrected path to match ViewCart component
            element={
              <div>
              {/ for viewing cart */}
              </div>
          } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
