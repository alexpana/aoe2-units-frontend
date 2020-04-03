import React from 'react';

function UnitRow(props) {

    return (
        <div className="row">
            <div className="unit-content">
                <div className="column column-1">
                    <div className="header">
                        <div className="name">{props['unit']['name']}</div>
                        <div className="cost">
                            <div className={"cost-item red " + (props.unit.food === 0 ? 'disabled' : '')}>{props.unit.food}</div>
                            <div className={"cost-item green " + (props.unit.wood === 0 ? 'disabled' : '')}>{props.unit.wood}</div>
                            <div className={"cost-item yellow " + (props.unit.gold === 0 ? 'disabled' : '')}>{props.unit.gold}</div>
                        </div>
                    </div>
                    <div className="unit-description">{ props.unit.description }</div>
                </div>
                <div className="column column-2">
                    <div className={"civilization " +  (props.unit.unique_civilization ? "unique" : "") }>{ props.unit.unique_civilization || 'all' }</div>
                    <div className="attack"><span className="dark">12</span><span className="light"> + 3</span></div>
                    <div className="defense"><span className="dark">3</span><span className="light"> + 4 / </span><span
                        className="dark">1</span><span className="light"> + 0</span></div>
                </div>
                <div className="column column-3">
                    <div className="strength">
                        <div><i className="arrow up green"/></div>
                        <div className="list-container unit-strength">
                            {props.unit.strong_against.map((value, index) => {
                                return [<span className='dark'>{value}</span>, <span className='separator light'> / </span>]
                            })}
                        </div>
                    </div>
                    <div className="weakness">
                        <div><i className="arrow down red"/></div>
                        <div className="list-container unit-strength">
                            {props.unit.weak_against.map((value, index) => {
                                return [<span className='dark'>{value}</span>, <span className='separator light'> / </span>]
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="unit-status">{props.unit.type1} | {props.unit.type2 || '-'} | {props.unit.building} | {props.unit.age} | {props.unit.upgrades_to ? "Upgrades to " + props.unit.upgrades_to : 'No Upgrade'}
            </div>
        </div>
    );
}
export default UnitRow;
