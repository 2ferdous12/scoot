import { Link } from "react-router-dom";


const footer = () => {
    return (
<div>
<div className="h-[300px] bg-[#495567] mt-20 p-10  ">
         <div className="flex flex-col md:flex-row lg:flex-row gap-3  justify-between items-center" >
            <div>
                <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#FFFFFF] font-bold">Sign up and <br /> Scoot off today</h1>
            </div>
            <div className="flex gap-10">
                <div className="h-[60px] flex gap-2 items-center p-1 w-[160px] bg-[#E5ECF4]">
                    <img src="/images/Combined Shape (2).png" alt="" />
                    <p className="text-[#] text-xl">AppStore</p>
                </div>
                <div className="h-[60px] flex gap-2 items-center p-1 w-[160px] bg-[#E5ECF4]">
                    <img src="/images/Shape (1).png" alt="" />
                    <p className="text-[#] text-xl">GooglePlay</p>
                </div>
            </div>
         </div>
        </div>
        <div className="h-[300px] md:h-[90px] lg:h-[90px] gap-5 flex flex-col md:flex-row lg:flex-row justify-between items-center p-10 bg-[#333A44]">
            <div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5  items-center space-x-10">
                        <Link to="/" className="text-3xl font-bold cursor-pointer">Scoot</Link>
                        <Link to="/about" className="text-xl text-gray-500 font-semibold cursor-pointer">About</Link>
                        <Link to="/locations" className="text-xl text-gray-500 font-semibold cursor-pointer">Location</Link>
                        <Link to="/careers" className="text-xl text-gray-500 font-semibold cursor-pointer">Careers</Link>
               </div>
            </div>
            <div className="">
            <img className="cursor-pointer" src="/images/Group 25 (1).png" alt="" />
            </div>

        </div>
</div>
    );
};

export default footer;