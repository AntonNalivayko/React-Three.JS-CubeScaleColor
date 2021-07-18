import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';

const Ybuttons = ({ yClick, onChangeY }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'Y'</h5>
            <div className='btnBlock'>
                <p>{yClick}</p>
                <MDBRange
                    value={yClick}
                    min='0'
                    max='10'
                    step='1'
                    id='customRange3'
                    onChange={onChangeY}
                />
            </div>
        </div>
    )
}

export default Ybuttons;