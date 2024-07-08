

const home = () => {
    return (
<div>
<div className="h-[500px] md:h-[600px] lg:h-[600px]  relative">
            <img className="w-full h-full" src="/images/Bitmap (1).jpeg" alt="" />
            <div className="absolute top-[10%] md:top-[10%] lg:top-[15%] 
            left-[10%] md:left-[20%] lg:left-[10%]">
                <p className="text-4xl md:text-6xl lg:text-6xl text-white font-bold">Scooter sharing <br /> made simple</p>
            </div>

            <div className="absolute left-[0%] md:left-[20%] lg:left-[0%]
             top-[30%] md:top-[35%] lg:top-[40%] flex gap-5 ">
                <img className="hidden md:hidden lg:block" src="/images/Path 2.svg" alt="" />
                <p className=" p-2 w-[371px] md:w-[405px] lg:w-[405px] text-white font-semibold ">Scoot takes the hassle out of urban mobility. Our 
                    bikes are placed in convenient locations in each of our
                     cities. Use our app to locate the nearest bike,
                     unlock it with a tap, and you’re away!</p>
           <div className="hidden md:hidden lg:block">
           <div className="flex ">
                    <img className="w-[500px] " src="/images/Path 4.svg" alt="" />
                   <div className="-mt-8 -ml-8">
                   <img className="" src="/images/Path 3.png" alt="" />
                   </div>
                </div>
           </div>
                <img className="hidden md:hidden lg:block" src="/images/Group 26 (2).png" alt="" />
            </div>
            <div className="absolute top-[63%]  md:top-[55%] lg:top-[67%] left-[22%] w-[150px]    rounded-md cursor-pointer ">
             <button className=" text-[#FFFFFF] hover:text-[#FCB72B] text-xl font-semibold 
              hover:bg-white bg-[#FCB72B] border-2 hover:border-[#FCB72B] p-3 ">Get Scootin</button>
            </div>
        </div>

    <div className="mt-20  ">
      <img src="/images/Path 2 (1).png" alt="" />
      <div className="flex gap-[50px] md:gap-[170px] lg:gap-[200px] ml-[1px] md:ml-[100px] lg:ml-[300px] -translate-y-10">
         <div className="bg-[#FCB72B] rounded-full w-[100px] flex justify-center items-center h-[100px]">
            <img src="/images/001-scooter.png" alt="" />
         </div>
         <div className="bg-[#FCB72B] rounded-full w-[100px] flex justify-center items-center h-[100px]">
            <img src="/images/001-scooter.png" alt="" />
         </div>
         <div className="bg-[#FCB72B] rounded-full w-[100px] flex justify-center items-center h-[100px]">
            <img src="/images/001-scooter.png" alt="" />
         </div>
     
      </div>
    </div>

    <div className="mt-10 ml-[1px] md:ml-[10px] lg:ml-[100px] 
    flex flex-col md:flex-row lg:flex-row gap-10 pl-5">
        <div >
            <p className="text-2xl font-semibold">Locate with app</p>
            <p className="w-[350px] md:w-[250px] lg:w-[350px] mt-3 text-xl text-gray-500">Use the app to find the nearest scooter to you. We are continuously 
                placing scooters in the areas with most demand
                , so one should never be too far away. </p>
        </div>
        <div >
            <p className="text-2xl font-semibold">Pick your scooter</p>
            <p className="w-[350px] md:w-[250px] lg:w-[350px] mt-3 text-xl text-gray-500">Use the app to find the nearest scooter to you. We are continuously 
                placing scooters in the areas with most demand
                , so one should never be too far away. </p>
        </div>
        <div >
            <p className="text-2xl font-semibold">Enjoy the ride</p>
            <p className="w-[350px] md:w-[250px] lg:w-[350px] mt-3 text-xl text-gray-500">Use the app to find the nearest scooter to you. We are continuously 
                placing scooters in the areas with most demand
                , so one should never be too far away. </p>
        </div>

    </div>

    <div className="mt-20 flex p-5  flex-col md:flex-row lg:flex-row  justify-between">
        <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Easy to use <br />
            riding telemetry</h1>
            <p className="w-[350px] md:w-[250px] lg:w-[420px] mt-5 text-xl text-gray-500">The Scoot app is available with riding telemetry. 
                This means it can show you your average speed, how long 
                youve been using the scooter, your traveling distance,
                 and many more things all in an easy to use app.</p>
           <div className=" w-[150px]  mt-5  rounded-md cursor-pointer ">
             <button className=" text-[#FFFFFF] text-xl  p-4 font-semibold hover:text-[#FCB72B] 
              hover:bg-white bg-[#FCB72B] border-2 hover:border-[#FCB72B]">Learn More</button>
            </div>
        </div>

        <div>
            <img src="/images/Group 33.png" alt="" />
        </div>
    </div>


    <div className="mt-20 flex p-5  flex-col md:flex-row lg:flex-row  justify-between">
         <div>
            <img src="/images/Bitmap Copy.png" alt="" />
        </div> 
       
        <div className="space-y-8">

            <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Coming to a  <br />
            city near you</h1>
            <p className="w-[350px] md:w-[250px] lg:w-[420px] mt-5 text-xl text-gray-500">Scoot is available in 4 major cities 
                so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your
                 hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
           <div className=" w-[150px]  p-4 mt-5  rounded-md cursor-pointer ">
             <button className=" text-[#FFFFFF] p-4  hover:text-[#FCB72B] 
              hover:bg-white bg-[#FCB72B] border-2 hover:border-[#FCB72B] text-xl font-semibold ">Learn More</button>
            </div>
        </div>

    </div>

    <div className="mt-20 flex p-5  flex-col md:flex-row lg:flex-row  justify-between">
        <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Zero hassle <br /> payments <br />
            </h1>
            <p className="w-[350px] md:w-[250px] lg:w-[420px] mt-5 text-xl text-gray-500">Our payment is as easy as one two three.
                 We accept most credit cards and debit cards. You can also link your PayPal account inside the app. 
                Need to pay later? No worries! You can defer payment for up to a month.</p>
           <div className=" w-[150px]   mt-5  rounded-md cursor-pointer ">
             <button className=" text-[#FFFFFF] text-xl p-4 font-semibold hover:text-[#FCB72B] 
              hover:bg-white bg-[#FCB72B] border-2 hover:border-[#FCB72B]">Learn More</button>
            </div>
        </div>

        <div>
            <img className="rounded-full" src="/images/Bitmap (2).png" alt="" />
        </div>
    </div>

</div>
    );
};

export default home;