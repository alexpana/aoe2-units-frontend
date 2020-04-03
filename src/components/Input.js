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
                <input onKeyDown={handleChange} onKeyUp={handleChange}/>
            </label>
        </div>

    );
}

export default Input;
