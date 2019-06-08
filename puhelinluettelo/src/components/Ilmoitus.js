import React from 'react';

const Ilmoitus = ({ viesti, tyyppi }) => {
    if (viesti === null) {
        return null
    }
    return (
        <div id="overlay">
            <div className={tyyppi}>
                {viesti}
            </div>
        </div>
    )
}

export default Ilmoitus