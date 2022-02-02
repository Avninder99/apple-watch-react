import { useState } from 'react';
import './App.css';
import LeftBar from './left_bar';
import MainSection from './main_section';
import SideMenu from './side_menu';


function App() {
    let [openSideMenu, setOpenSideMenu] = useState(false);
    const menuHandler = () => {
        // alert("icon clicked");
        console.log("changed");
        setOpenSideMenu( !openSideMenu );
    }
    let width = window.innerWidth;
    return (
        <div className="App">

            {/* left bar is a seperate component */}
            <LeftBar menuChanger={menuHandler}/>

            {
                openSideMenu && (width <= 768)
                    ?
                        <SideMenu/>
                    :
                        ""
            }
            

            {/* main section is a seperate component */}
            <MainSection/>
            



        </div>
    );
}

export default App;
