import { useState } from "react";
import apple_icon from "./images/apple_icon.svg";
import search_icon from "./images/search.svg";
import bag_icon from "./images/shopping_bag.svg";

// Nav Bar component
export default function Nav_bar() {
    let width_2 = window.innerWidth;
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const searchBarChangeHandler = () => {
        setSearchBarOpen(!searchBarOpen);
        console.log("changed");
    }
    console.log("ran");

    return (
        <nav className="desktop-nav-bar">
            <div className="left-side-nav">
                <div className="main-logo-div pr-28">
                    <img className="main-logo" src = {apple_icon} alt="Apple"/>
                </div>
                <div className="desktop-link-holder">
                    {/* Desktop menu */}
                    <a
                        href="https://virtual99.netlify.app/"
                        id="link-1"
                        className="desktop-nav-links absolute md:block"
                        aria-current="page"
                        >Mac
                    </a>
                    <a
                        href="https://virtual99.netlify.app/"
                        id="link-2"
                        className="desktop-nav-links absolute"
                        >iPhone
                    </a>
                    {
                        searchBarOpen && (width_2<1024)
                            ?
                                ""
                            :
                                <>
                                    <a
                                        href="https://virtual99.netlify.app/"
                                        id="link-3"
                                        className="desktop-nav-links absolute"
                                        >iPad
                                    </a>
                                    <a
                                        href="https://virtual99.netlify.app/"
                                        id="link-4"
                                        className="desktop-nav-links-2 absolute"
                                        >iWatch
                                    </a>

                                </>
                    }
                    {
                        searchBarOpen && (width_2<1280)
                            ?
                                "" 
                            :
                            <a
                                href="https://virtual99.netlify.app/"
                                id="link-5"
                                className="desktop-nav-links absolute"
                                >Support
                            </a>
                    }
                    
                </div>
            </div>

            {/* Right Side options */}
            <div className="right-side-nav">
                {
                    searchBarOpen
                        ?
                            <div id="search-bar" className="">
                                Search here
                            </div>
                        :
                            ""
                }

                <button
                    type="button"
                    id="search-icon-btn"
                    className={searchBarOpen ? "right-icons search-active" : "right-icons"}
                    onClick={searchBarChangeHandler}
                >
                    <img id="search-icon" className="" src={search_icon} alt="search"/>
                </button>
                
                <div>
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
