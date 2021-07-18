import React from 'react';
import Rbuttons from './RGBbuttons/Rbuttons';
import Gbuttons from './RGBbuttons/Gbuttons';
import Bbuttons from './RGBbuttons/Bbuttons';
import Xbuttons from './XYZbuttons/Xbuttons';
import Ybuttons from './XYZbuttons/Ybuttons';
import Zbuttons from './XYZbuttons/Zbuttons';
import '../styles.css';

const Navigation = ({   rClick, setRClick, onChangeR,
                        gClick, setGClick, onChangeG,
                        bClick, setBClick, onChangeB,
                        xClick, setXClick, onChangeX,
                        yClick, setYClick, onChangeY,
                        zClick, setZClick, onChangeZ,
}) => {
    return (
        <div className='Navigaiton'>
            <Rbuttons rClick={rClick} setRClick={setRClick} onChangeR={onChangeR}/>
            <Gbuttons gClick={gClick} setGClick={setGClick} onChangeG={onChangeG}/>
            <Bbuttons bClick={bClick} setBClick={setBClick} onChangeB={onChangeB}/>
            <Xbuttons xClick={xClick} setXClick={setXClick} onChangeX={onChangeX}/>
            <Ybuttons yClick={yClick} setYClick={setYClick} onChangeY={onChangeY}/>
            <Zbuttons zClick={zClick} setZClick={setZClick} onChangeZ={onChangeZ}/>
        </div>
    )
}

export default Navigation



