import React from 'react';
import qr_code_img from '../../assets/images/image-qr-code.png'
import './QrCode.scss';

const QrCode = () => {
  return (
    <div className='qr-code-wrapper'>
        <img 
            src={qr_code_img} 
            alt='qr-code-img'
            className='qr-code-img'/>
        <div className='header'> Improve your front-end skills by building projects</div>
        <div className='body'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
    </div>
  )
}

export default QrCode;