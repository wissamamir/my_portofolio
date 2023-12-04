import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vo9u95e', 'template_1cujix6', form.current, 'JvSTo1ctSNpWfjuw9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="Contact" className="contact-section">
      
        <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="form-container">
      <div className='field'>      
      <input type="text" name="user_name" placeholder='Name' />
      </div>
      <div className='field'>
      <input type="email" name="user_email" placeholder='Email'/>
      </div>
      <div className='field'>
      <textarea name="message" style={{resize:'none'}}  rows="5" placeholder='Leave Your Message Here...' />
      </div>
      <div className='field'>
      <input type="submit" value="Send" />
      </div>
      </form>
    </section>
  )
}

export default Contact
