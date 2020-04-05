import React, { useState } from 'react';
import '../style/style.css';
import Input from './Input.js';
import UnitRow from './UnitRow.js';

const units = require('../units.json');

function App() {
    const [filter, setFilter] = useState('');

    var doFilter = function (text) {
        setFilter(text.toLowerCase());

    };

    const unit_matches = function (unit) {
        if (filter.length === 0) {
            return true;
        }
        return unit['key'].toLowerCase().indexOf(filter) >= 0
            || (typeof (unit['description']) !== 'undefined' && unit['description'].toLowerCase().indexOf(filter) >= 0)
            || (unit['unique_civilization'] != null && unit['unique_civilization'].toLowerCase().indexOf(filter) >= 0)
            || (unit['building'].toLowerCase().indexOf(filter) >= 0);
    };

    return (
        <div id="content">
            <div id="center" className={'container mx-auto w-full p-4 md:w-9/12'}>
                <div className={"container text-center text-4xl flex-row font-sans"}><span className="text-gray-light font-bold">AoE 2 </span><span className="text-gray-dark font-medium"> Units</span>
                </div>
                <Input callback={doFilter} />

                <div className="rounded-md mx-auto bg-gray-800 container mt-4 table mb-16">
                    {units.map((value, index) => {
                        return <UnitRow unit={value} visible={unit_matches(value)} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
