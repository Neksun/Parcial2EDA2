import React from 'react';
import '../Styles/ClearStyle.css';

const Clear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default Clear;