import React, {useState} from 'react';
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
            <div id="center">
                <div className={"title"}><span className="dark">AoE 2 </span><span className="light"> Units</span>
                </div>
                <Input callback={doFilter}/>

                <div className="table-wrapper">
                    <div className="table">
                        {units.map((value, index) => {
                            if (unit_matches(value)) {
                                return <UnitRow unit={value}/>
                            } else {
                                return null;
                            }
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
