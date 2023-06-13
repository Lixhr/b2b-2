import React, { useEffect } from 'react';
import './invitClick.css';
import { useLocation } from 'react-router-dom';

const InvitClick = () => {
  const location = useLocation();

  useEffect(() => {
    const animElement = document.getElementById('anim');
    if (location.pathname === '/paiement/success' || location.pathname === '/') {
      animElement.className = 'invit_click';
      setTimeout(() => {
        animElement.className = '';
      }, 5000);

    } else {
      animElement.className = '';
    }
  }, [location]);

  return (
    <div className='center'>
      <div id='anim'></div>
    </div>
  );
};

export default InvitClick;