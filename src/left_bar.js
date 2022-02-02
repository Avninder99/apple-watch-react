import menu_icon from "./images/nav_menu.svg";

// This is left/bottom bar holding socials and menu icons

export default function left_bar(props) {
    
    return (
        <div className='left-bar' >
            <img className='nav-menu-icon' onClick={props.menuChanger} id="nav-icon" alt="menu icon" src={menu_icon}/>
            <div className='social-holder'>
                <i className='fb-icon fab fa-facebook-f'></i>
                <i className='tw-icon fab fa-twitter'></i>
                <i className='in-icon fab fa-linkedin-in'></i>
            </div>
        </div>
    );
}