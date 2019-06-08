import React from 'react';

const Haku = (props) => {
    return (
        <p>
            Haku: <input value={props.newHaku} onChange={props.handleHakuInput} />
        </p>
    )
}

export default Haku
