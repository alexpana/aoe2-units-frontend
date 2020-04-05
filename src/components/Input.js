import React from 'react';

function Input(props) {

    var handleChange = function(e) {
        var text = e.target.value;
        if (typeof(props.callback) !== "undefined") {
            props.callback(text);
        }
    };

    return (
        <div id="input">
            <label>
                <input className={'text-2xl'} onKeyDown={handleChange} onKeyUp={handleChange}  placeholder="search"/>
            </label>
        </div>

    );
}

export default Input;
