import React from 'react';
import Link from 'next/link';

const MediaPart = () => {
  return (
    <div className='media-section'>
    
    <div className='icon'>
    <Link href=''><i class="fa-solid fa-phone"></i></Link>
    </div>
    <div className='icon'>
    <Link href=''><i class="fa-brands fa-linkedin"></i></Link>
    </div>
    <div className='icon'>
    <Link href=''><i class="fa-solid fa-envelope"></i></Link>
    </div>
    
    </div>
  )
}

export default MediaPart
