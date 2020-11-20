import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (
    <header>
        <h1 className="text-center pb-3 pt-4"> {titulo} </h1>
    </header>
);

Header.propTypes = {
    titulo : PropTypes.string.isRequired,
}
 
export default Header;