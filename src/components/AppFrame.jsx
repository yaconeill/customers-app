import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body }) => {
    return (
        <div className="app-frame">
            <AppHeader title={header} />
            <div>{ body }</div>
            <div><p>Aplicación simple de ejemplo</p></div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired,
};

export default AppFrame;