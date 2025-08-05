import {Link, useLocation} from "react-router-dom";
import HLogo from "/H-logo.svg";

function Navbar() {
    return (
      <>
        <div className="sticky w-full h-[9vh] flex z-40 bg-slate shadow-md shadow-slate">
            <Link to="/" className=" h-[6vh] w-[6vw] flex my-auto pl-[1vw]">
                <img src={HLogo} className=""></img>
            </Link>

        </div>
      </>
    )
} 
export default Navbar;