import NavBar from "./navbar";
import MainContent from "./main_content"
import b_watch from "./images/b_watch_2.svg";
import g_watch from "./images/g_watch_2.svg";
import r_watch from "./images/r_watch_2.svg";

// Main Section Component
export default function main_section() {
    return (
        <div className='main-div'>
            <NavBar/>
            <div className="main-div-content">
                <MainContent/>
                <div className="holder-4">
                    <img className="secondary-watches" src={b_watch} alt="Black Varient"/>
                    <img className="secondary-watches" src={g_watch} alt="Green Varient"/>
                    <img className="secondary-watches" src={r_watch} alt="Rose Gold Varient"/>
                </div>
            </div>
        </div>
    );
}
