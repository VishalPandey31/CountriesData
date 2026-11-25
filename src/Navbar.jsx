import './index.css'
import { useState,useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext'


function Navbar() {

    // const [dark, setdark] = useState( localStorage.getItem('theme') === 'dark');
    const {dark,setdark}=useContext(ThemeContext)
    function changeTheme() {
        if (dark) {

            document.documentElement.setAttribute("data-theme", "light");

            localStorage.setItem("theme", "light");

            setdark(false);

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            setdark(true);
        }
    }
    // Initial theme bhi apply karna hai taki reload hone par vahi theme rahe
    // document.documentElement.setAttribute(
    //     "data-theme",
    //     dark ? "dark" : "light"
    // );
     
    return (
        <>
            <div className='Nav_Container'>
                <h2>Where is the world?</h2>
                <p onClick={changeTheme} className='darkMode'>
                    {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </p>
            </div>
                <Outlet />
        </>
    )
}

export default Navbar;