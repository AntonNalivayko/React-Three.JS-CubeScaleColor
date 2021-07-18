import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';


const Bbuttons = ({ bClick, onChangeB }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'B'</h5>
            <div className='btnBlock'>
                <p>{bClick}</p>
                <MDBRange
                    value={bClick}
                    min='0'
                    max='1'
                    step='0.1'
                    id='customRange3'
                    onChange={onChangeB}
                />
            </div>
        </div>
    )
}

export default Bbuttons;