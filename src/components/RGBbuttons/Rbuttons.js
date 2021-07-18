import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';

const Rbuttons = ({ rClick, onChangeR }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'R'</h5>
            <div className='btnBlock'>
                <p>{rClick}</p>
                <MDBRange
                    value={rClick}
                    min='0'
                    max='1'
                    step='0.1'
                    id='customRange3'
                    onChange={onChangeR}
                />
            </div>
        </div>
    )
}

export default Rbuttons;

