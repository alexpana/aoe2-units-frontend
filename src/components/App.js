import React from 'react';
import '../style/style.css';
import Input from './Input.js';
import UnitRow from './UnitRow.js';

const units = require('../units.json');

function App() {
  return (
    <div id="content">
      <div id="center">
        <Input />

        <div class="table-wrapper">
          <div class="table">
            <UnitRow unit={units[0]}/>
            <UnitRow unit={units[10]}/>
            <UnitRow unit={units[1]}/>
            <UnitRow unit={units[3]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
