

const about = () => {
    return (
        <div>
         <div>
            <div className="h-[200px]">
                <img src="/public/images/Group 22.png" alt="" />
            </div>
         </div>

         <div className="mt-20 flex p-5  flex-col md:flex-row lg:flex-row items-center  justify-between">
        <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Mobility for <br /> the digital era 
            </h1>
            <p className="w-[350px] md:w-[250px] lg:w-[420px] mt-5 text-xl text-gray-500">Getting around should 
                be simple (and even fun!) for everyone. We
                 embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
        </div>

        <div>
            <img src="/public/images/Bitmap (3).png" alt="" />
        </div>
    </div>
    
    
    <div className="mt-20 flex p-5 items-center  flex-col md:flex-row lg:flex-row  justify-between">
         <div className="w-[500px] h-[500px]  rounded-ful">
            <img className="w-full h-full  rounded-ful" src="/public/images/Bitmap (4).png" alt="" />
        </div> 
       
        <div className="space-y-8">

            <h1 className="text-4xl md:text-6xl lg:text-6xl text-[#495567] font-bold">Coming to a  <br />
            city near you</h1>
            <p className="w-[350px] md:w-[250px] lg:w-[420px] mt-5 text-xl text-gray-500">Scoot is available in 4 major cities 
                so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your
                 hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
        </div>

    </div>


        </div>
    );
};

export default about;