

const locations = () => {
    return (
        <div className="p-2">
            <div>
                <div className="h-[200px] w-full">
                <img className="h-full w-full" src="/images/Group 22 (1).png" alt="" />
                </div>
            </div>
            <div className="mt-20 mb-10">
                <div className="h-[543px] w-full">
                <img className="h-full w-full" src="/images/Group 7 (1).png" alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-3 justify-between ">
                <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Your city <br /> not listed?</h1>
                <p className="text-xl text-gray-500 w-[365px] md:w-[445px] lg:w-[445px]">If you’d like to see Scoot in your hometown, be
                     sure to let us know. We track requests and plan
                     launches based on demand. Feel free to message us by clicking the link or 
                     messaging us on social.</p>
             <div className=" w-[150px]  mt-5  rounded-md cursor-pointer ">
             <button className=" text-[#FFFFFF] text-xl  p-4 font-semibold hover:text-[#FCB72B] 
              hover:bg-white bg-[#FCB72B] border-2 hover:border-[#FCB72B]">Message Us</button>
            </div>
            
            </div>
        </div>
    );
};

export default locations;