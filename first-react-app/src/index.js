import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target:"_blank"},'Click here to visit google site'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)