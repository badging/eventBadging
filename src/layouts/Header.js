import '../assets/styles/global.css'
import logo from "../assets/logos/chaoss-logo.png"
const Header = () => {
    return (
        <>
            <div className="navigation flex-row ">
                <div className="logo">
                    <img src={logo} alt="chaoss-logo" />
                </div>
                    <ul className='flex-row '>
                        <li><a href='/' className='nav-link'> Home</a></li>
                        <li><a href='/about' className='nav-link'> About us</a></li>
                        <li><a href='/event' className='nav-link'> Event Badging</a></li>
                        <li><a href='#' className='nav-link'> Project Badging</a></li>
                    </ul>
                <button className="apply">Apply for a Badge</button>
            </div>
        </>
    )
};

export default Header;
