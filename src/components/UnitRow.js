import React from 'react';

function UnitRow(props) {

    const strong_list = [];

    props.unit.strong_against.map((value, index) => {

    });

    return (
        <div class="row">
            <div class="unit-content">
                <div class="column column-1">
                    <div class="header">
                        <div class="name">{props['unit']['name']}</div>
                        <div class="cost">
                            <div class={"cost-item red " + (props.unit.food == 0 ? 'disabled' : '')}>{props.unit.food}</div>
                            <div class={"cost-item green " + (props.unit.wood == 0 ? 'disabled' : '')}>{props.unit.wood}</div>
                            <div class={"cost-item yellow" + (props.unit.gold == 0 ? 'disabled' : '')}>{props.unit.gold}</div>
                        </div>
                    </div>
                    <div class="unit-description">Fast with extensive line of sight.And another line</div>
                </div>
                <div class="column column-2">
                    <div class="civilization">all</div>
                    <div class="attack"><span class="dark">12</span><span class="light"> + 3</span></div>
                    <div class="defense"><span class="dark">3</span><span class="light"> + 4 / </span><span
                        class="dark">1</span><span class="light"> + 0</span></div>
                </div>
                <div class="column column-3">
                    <div class="strength">
                        <div><i class="arrow up green"></i></div>
                        <div class="list-container unit-strength">
                            {props.unit.strong_against.map((value, index) => {
                                return [<span class='dark'>{value}</span>, <span class='separator light'> / </span>]
                            })}
                        </div>
                    </div>
                    <div class="weakness">
                        <div><i class="arrow down red"></i></div>
                        <div class="list-container unit-strength">
                            {props.unit.weak_against.map((value, index) => {
                                return [<span class='dark'>{value}</span>, <span class='separator light'> / </span>]
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div class="unit-status">{props.unit.type1} | {props.unit.type2 || '-'} | {props.unit.building} | {props.unit.age} | {props.unit.upgrades_to ? "Upgrades to " + props.unit.upgrades_to : 'No Upgrade'}
            </div>
        </div>
    );
}
export default UnitRow;
