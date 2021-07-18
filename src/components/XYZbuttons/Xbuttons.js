import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';

const Xbuttons = ({ xClick, onChangeX }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'X'</h5>
            <div className='btnBlock'>
                <p>{xClick}</p>
                <MDBRange
                    value={xClick}
                    min='0'
                    max='10'
                    step='1'
                    id='customRange3'
                    onChange={onChangeX}
                />
            </div>
        </div>
    )
}

export default Xbuttons;