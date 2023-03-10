import React, { useRef, useState } from 'react';
import styles from '../style';
import emailjs from '@emailjs/browser';
import { publicKey, serviceKey, templateKey,  } from '../constants/keys';


const Contact = () => {
    const ref = useRef<HTMLFormElement>(null!);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        emailjs.sendForm(serviceKey, templateKey, ref.current, publicKey)
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
        ref.current.reset();
    }, (error) => {
        console.log(error.text);
    });
    };

  return (
    <section id='contact' className={`flex flex-col ${styles.paddingY}`}>
        <div className={`flex flex-col ${styles.paddingX} `}>
            <div className={`flex-1 flex ${styles.flexCenter} w-[100%] justify-center`}>
                <form ref={ref} id="form" className={`form flex flex-col w-[600px]`} onSubmit={handleSubmit}>
                    <h1 className='font-main text-primary text-[18px] mb-4'>Contact me</h1>
                    <input type="text" placeholder='Name' name="name" className={`${styles.formElement}`}/>
                    <input type="text" placeholder='Email' name="email" className={`${styles.formElement}`}/>
                    <textarea name="message" placeholder='Write your message' id="message" rows={5} className={`${styles.formElement}`}></textarea>
                    <button type='submit' className='bg-palm text-primary p-3 rounded-lg'>Send</button>
                    <div className='mt-4 mb-4 flex-col'>
                        <p className={`${!success ? 'hidden' : styles.paragraph}`}>Thank you for your message!</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact