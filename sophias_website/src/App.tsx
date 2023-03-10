import { Hero, Navbar, Contact} from "./components";

import styles from "./style";

const App = () => {
  return (
    <div className='bg-gradient w-full h-[1000px] overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div>
        <Hero/>
        <Contact/>
      </div>
    </div>
  )
}

export default App