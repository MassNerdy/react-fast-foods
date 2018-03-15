import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import MenuItem from './MenuItem'
import DriveThruTerminal from './DriveThruTerminal'
// import Order from './Order'
// import OrderStatusBoard from './OrderStatusBoard';

ReactDOM.render(<DriveThruTerminal />, document.getElementById('root'));
registerServiceWorker();
