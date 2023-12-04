import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sedImg from '../../../public/imgs/sedico.webp'

const MyProjects = () => {

  const projectsData = [
    {
      src:sedImg,
      href:'',
      title:'rrrrrrrrrrr',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
    },
    {
      src:sedImg,
      href:'',
      title:'rrrrrrrrrrr',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
    },

  ]


  return (
    <div className='my-project-section'>
    <h2>My Projects</h2>
    <div className='container'>
    <div className='myproject-content'>

    <div className='myprojects with'>
    <h4>With a backend web developer</h4>
    <div className="box" >
  <Image src={sedImg} className="card-img-top" alt="" />
  <div className="box-content">
    <h5 className="title">Card title</h5>
    <p className="box-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="#" className="btn">Go somewhere</Link>
  </div>
</div>
    
    </div>
    <div className='myprojects others'>
        <h4>While i was learning (some of them)</h4>
   
        
        <div className='boxes'>
        {
          projectsData.map((item,i) => {
            const {src,href,title,text} = item ;
            return (
         
              
              <div className="box"  key={i} >
              <Image src={src} className="card-img-top" alt="" />
              <div className="box-content">
                <h5 className="title">{title}</h5>
                <p className="box-text">{text}</p>
                <Link href={href} className="btn">Go somewhere</Link>
              </div>
            </div>
      
            )
          })
        }
 
        </div>



    </div>

    </div>
    </div>
    </div>
  )
}

export default MyProjects
