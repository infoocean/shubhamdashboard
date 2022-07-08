import React from 'react';
import './App.css';
import Footertemplate from './Templates/Footertemplate';
import Headertemplate from './Templates/Headertemplate';

function App() {
  return (
    <div className='App wrapper hold-transition sidebar-mini layout-fixed'>
        <Headertemplate/>
        <Footertemplate/>
    </div>
  );
}
export default App;
