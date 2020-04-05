import React from 'react';

function UnitRow(props) {

    const unique = props.unit.unique_civilization;

    return (
        <div className={"container flex-col lg:flex-row p-4 border-b-2 border-gray-900 last:border-b-0 " + (props.visible ? 'visible' : 'hidden')}>            <div className={'font-bold text-xl mb-2'}>{props['unit']['name']}</div>
            <div className={'font-normal text-sm text-gray-light mb-2'}>{props['unit']['description']}</div>
            <div className={'container'}>
                <div className="list-container unit-strength">
                    {props.unit.strong_against.map((value, index) => {
                        return [<span className='text-green-600'>{value}</span>, <span className='separator light'> / </span>]
                    })}
                </div>
                <div className="list-container unit-strength text-red-600">
                    {props.unit.weak_against.map((value, index) => {
                        return [<span className='text-red-600'>{value}</span>, <span className='separator light'> / </span>]
                    })}
                </div>
            </div>
            <div className="text-sm font-bold text-gray-light mt-1"><span className="text-indigo-400">{unique ? "Unique to " + props.unit.unique_civilization : ""}</span> {unique ? " | " : ""} {props.unit.type1}{props.unit.type2 ? ", " + props.unit.type2 : ''} | From {props.unit.building} | {props.unit.age} Age | {props.unit.upgrades_to ? "Upgrades to " + props.unit.upgrades_to : 'No Upgrade'}</div>
        </div>
    );
}
export default UnitRow;
