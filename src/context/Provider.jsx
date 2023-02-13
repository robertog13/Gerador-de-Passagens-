import React, { useState } from "react";
import PropTypes from 'prop-types';
import FilterContext from './index';

export default function Provider({ children }) {

  const [landing, setLanding] = useState();
  const [boarding, setBoarding] = useState();


  const contextValue = {
    
    
  }

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};