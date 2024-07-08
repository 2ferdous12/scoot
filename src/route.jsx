import Navbar from "./componenet/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./componenet/footer";


const route = () => {
    return (
        <div className="   max-w-[1440px] mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default route;