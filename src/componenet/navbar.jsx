import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div className=" ">
            <div className=" mx-auto items-center flex 
           justify-between pl-[50px] md:pl-[50px] lg:pl-[100px] pr-[50px] md:pr-[50px] lg:pr-[100px] shadow-lg
             max-w-[1440px] h-[90px]">
                <div className="block md:hidden flex space-x-40 items-center lg:hidden ">
    
                    <img className="h-[22px]" src="/images/Group (1).svg" alt="" />
                    <p className="text-3xl font-bold cursor-pointer">Scoot</p>
                </div>
                <div className="hidden md:block lg:block">
                    <div className="flex  items-center space-x-10">
                        <Link to="/" className="text-3xl font-bold cursor-pointer">Scoot</Link>
                        <Link to="/about" className="text-xl text-gray-500 font-semibold cursor-pointer">About</Link>
                        <Link to="/locations" className="text-xl text-gray-500 font-semibold cursor-pointer">Location</Link>
                        <Link to="/careers" className="text-xl text-gray-500 font-semibold cursor-pointer">Careers</Link>
                    </div>
                </div>

                <div className="w-[130px]
                 hover:border-2  border-[#FCB72B]
                 hidden md:block lg:block  rounded-md cursor-pointer ">
                    <button className=" hover:text-[#FCB72B] text-[#FFFFFF] p-3 hover:bg-white bg-[#FCB72B] text-xl font-semibold ">Get Scootin</button>
                </div>

            </div>
        </div>

    );
};

export default navbar;