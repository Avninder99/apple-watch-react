import { useState } from 'react';
import './App.css';
import Left_bar from './left_bar';
import Main_section from './main_section';
import Side_menu from './side_menu';


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
            <Left_bar menuChanger={menuHandler}/>

            {
                openSideMenu && (width <= 768)
                    ?
                        <Side_menu/>
                    :
                        ""
            }
            

            {/* main section is a seperate component */}
            <Main_section/>
            



        </div>
    );
}

export default App;
