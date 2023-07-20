import React from 'react';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const links = [
    {text: 'About', url:'/'},
    {text: 'Documentation', url: '/docs/'}
  ];
  return (
    <NavbarComponent title = "UMN-Kernel Object" links = {links}/>
  );
}






export default App;
