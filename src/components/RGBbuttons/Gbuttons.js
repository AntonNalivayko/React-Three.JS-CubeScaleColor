import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';


const Gbuttons = ({ gClick, onChangeG }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'G'</h5>
            <div className='btnBlock'>
                <p>{gClick}</p>
                <MDBRange
                    value={gClick}
                    min='0'
                    max='1'
                    step='0.1'
                    id='customRange3'
                    onChange={onChangeG}
                />
            </div>
        </div>
    )
}

export default Gbuttons;