import apple_icon from "./images/apple_icon.svg";
import search_icon from "./images/search.svg";
import bag_icon from "./images/shopping_bag.svg";

// Nav Bar component
export default function nav_bar() {
    let width = window.innerWidth;
    return (
        <nav className="desktop-nav-bar">
            <div className="left-side-nav">

                <div className="main-logo-div pr-28">
                    <img className="main-logo" src = {apple_icon} alt="Apple"/>
                </div>

                <div className="desktop-link-holder">
                    {/* Desktop menu */}
                    <a
                        href="#"
                        id="link-1"
                        className="desktop-nav-links absolute md:block"
                        aria-current="page"
                        >Mac
                    </a>
                    <a
                        href="#"
                        id="link-2"
                        className="desktop-nav-links absolute"
                        >iPhone
                    </a>
                    <a
                        href="#"
                        id="link-3"
                        className="desktop-nav-links absolute"
                        >iPad
                    </a>
                    <a
                        href="#"
                        id="link-4"
                        className="desktop-nav-links-2 absolute"
                        >iWatch
                    </a>
                    <a
                        href="#"
                        id="link-5"
                        className="desktop-nav-links absolute"
                        >Support
                    </a>
                </div>

            </div>

            {/* Right Side options */}
            <div className="right-side-nav">
                
                {/* <div id="search-bar" className="hidden text-left pl-5 pt-2 pr-7 sm:pr-10 md:pr-0 md:w-64 xl:w-72 h-10 bg-white/30 rounded-tl-full rounded-bl-full text-white font-poppins font-normal">
                    Search here
                </div> */}

                <button
                    type="button"
                    id="search_icon_btn"
                    className="right-icons"
                >
                    <img id="search-icon" className="" src={search_icon} alt="search"/>
                </button>
                
                <div className="ml-3 pl-6 relative border-l-3 border-white/75">
                    <button
                        type="button"
                        className="right-icons"
                        id="bag-icon"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        <img src={bag_icon} className="" alt="bag"/>
                    </button>
                </div>

            </div>
        </nav>
    );
}
