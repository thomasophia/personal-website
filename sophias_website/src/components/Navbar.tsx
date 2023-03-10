import { useState } from 'react'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <div className="font-main text-primary text-[20px]">sophia thoma</div>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>{navLinks.map((navLink, index) => (
            <li key={navLink.id} className={`font-main text-primary text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
        ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <div className={`${toggle ? 'hidden' : 'text-white'}`} onClick={() => setToggle((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
            </div>
            <div className={`${!toggle ? 'hidden' : 'text-white'}`} onClick={() => setToggle((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 palm-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar z-[1]`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((navLink, index) => (
                <li 
                  key={navLink.id}
                  className={`font-main cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                  <a href={`#${navLink.id}`}>
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar