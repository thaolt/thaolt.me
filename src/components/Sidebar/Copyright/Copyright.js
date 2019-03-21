import React from 'react';
import styles from './Copyright.module.scss';

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
    Content licensed under 
    &nbsp; <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Attribution-ShareAlike 4.0 International License" style={{display: 'inline', verticalAlign: 'middle'}} src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a>
  </div>
);

export default Copyright;
