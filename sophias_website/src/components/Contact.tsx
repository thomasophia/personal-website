import React from 'react'
import styles from '../style'

const Contact = () => {
  return (
    <section id='contact'>
        <div className={`flex flex-col ${styles.paddingX} `}>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative w-[100%] justify-center`}>
                <form className={`flex flex-col w-[600px] ${styles.paddingY} font-main`}>
                    <h1 className='font-main text-primary text-[18px] mb-4'>Contact me</h1>
                    <input type="text" placeholder='Name' className={`${styles.formElement}`}/>
                    <input type="text" placeholder='Email' className={`${styles.formElement}`}/>
                    <textarea name="message" placeholder='Write your message' id="message" rows={5} className={`${styles.formElement}`}></textarea>
                    <button className='bg-palm text-primary p-3 rounded-lg'>Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact