import main_watch from "./images/main_watch.svg";
import color_indicator from "./images/color_indicator.svg"

// Main Content Component
export default function main_content() {
    return (
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
    );
}
