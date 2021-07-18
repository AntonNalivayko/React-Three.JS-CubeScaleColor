import React from 'react';
import '../../styles.css';
import { MDBRange } from 'mdb-react-ui-kit';


const Zbuttons = ({ zClick, onChangeZ }) => {
    return (
        <div className='btnContainer'>
            <h5>Величина 'Z'</h5>
            <div className='btnBlock'>
                <p>{zClick}</p>
                <MDBRange
                    value={zClick}
                    min='0'
                    max='10'
                    step='1'
                    id='customRange3'
                    onChange={onChangeZ}
                />
            </div>
        </div>
    )
}

export default Zbuttons;