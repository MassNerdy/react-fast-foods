import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DriveThruTerminal from './DriveThruTerminal';

ReactDOM.render(<DriveThruTerminal />, document.getElementById('root'));
registerServiceWorker();
