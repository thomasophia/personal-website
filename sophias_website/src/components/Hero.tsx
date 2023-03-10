import styles from '../style';
import { bubble1 } from '../assets';


const Hero = () =>  (
    <section id="about me" className={`flex flex-col ${styles.paddingY}`}>
        <div className={`flex-1 flex ${styles.flexCenter} relative mb-5`}>
        <img src={bubble1} alt="bubble" className='w-[50%] h-[50%] max-w-[300px] max-h-[300px] relative' />
        </div>
        <h1 className={`${styles.heading2} flex justify-center h-[300px]`}>
            Coming soon...
        </h1>
    </section>
  )


export default Hero