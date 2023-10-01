import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='hoobank ' className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end items-center'>
                {navLinks.map((link, index) => <li key={link.id} className={`font-popins  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} font-normal cursor-pointer text-white text-[16px]`}>
                    <a href={'#' + link.id}>{link.title}</a>
                </li>)}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img className='w-[28px] h-[28px]' onClick={() => setToggle((prev) => !prev)} src={toggle ? close : menu} alt='menu' />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col  justify-end items-center'>
                        {navLinks.map((link, index) => <li key={link.id} className={`font-popins  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} font-normal cursor-pointer text-white text-[16px]`}>
                            <a href={'#' + link.id}>{link.title}</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar