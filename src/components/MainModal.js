import React from 'react';

import Counter from './Counter'
import PatientList from './PatientList';

import './MainModal.css'

const MainModal = ({patients}) => {
  return (
    <div className="MainModal">
      <div className="MainModal_title">
        <div className='MainModal_title_left'>
          <img src={require('../images/logo.png')} alt='waiting_room_logo'/>
          <h2>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal_title_right'>
          <button>Leave</button>
        </div>
      </div>
      <div className='MainModal_container'>
      <Counter />
      <PatientList patients={patients}/>
      </div>
    </div>
  );
}

export default MainModal;
