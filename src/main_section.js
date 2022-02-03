import NavBar from "./navbar";
import main_watch from "./images/main_watch.svg";
import color_indicator from "./images/color_indicator.svg"
import b_watch from "./images/b_watch_2.svg";
import g_watch from "./images/g_watch_2.svg";
import r_watch from "./images/r_watch_2.svg";

// Main Section Component
export default function main_section() {
    return (
        <div className='main-div'>

            <NavBar/>

            <div className="main-div-content">
                <div className="div-holder">
                    <div className="holder-1">
                    <div>
                        <h1 className="head-1">The Perfect Moment</h1>
                        <h2 className="head-2">Between Past and Future.</h2>
                        <button className="buy-btn">
                            Buy Now
                        </button>

                    </div>
                    </div>

                    <div className="holder-2">
                        <div className="holder-3">
                            <img className="main-watch" src={main_watch} alt="Apple Watch"/>
                            <img className="color-indicator" src={color_indicator} alt="Indicator"/>
                        </div>
                    </div>
                </div>

                <div className="holder-4">
                    <img className="secondary-watches" src={b_watch} alt="Black Varient"/>
                    <img className="secondary-watches" src={g_watch} alt="Green Varient"/>
                    <img className="secondary-watches" src={r_watch} alt="Rose Gold Varient"/>
                </div>






            </div>






        </div>
    );
}
