import stack from "../assets/Images/stackLite.png"
import pencil from "../assets/Images/pencil.png"
import multipleDevices from "../assets/Images/multiple-devices.png"
const Main = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[100vh]   bg-[#ededed] text-center gap-20">
        <div className=" flex flex-col justify-center mt-20 md:mt-18 gap-4">
          <div className="font-[700] text-[8px] md:text-[12px] text-gray-500">
            PRESENT YOUR SERVICE
          </div>
          <div className="font-bold text-[40px] md:text-[68px] leading-tight">
            <div>Make landing page</div>
            <div>fast and easily.</div>
          </div>
          <div className="font-[700] text-[12px] md:text-[15px] text-gray-500">
            Create custom landing pages with Shades that convert <br /> more
            visitors than any website-no coding required
          </div>
          <div className="md:flex-row flex-col justify-center items-center ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className=" w-[220px] h-10 pl-2"
            />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 ml-4">
              Subscribe
            </button>
          </div>
          <div className="font-[600] text-[12px] text-gray-500">
            
            Trused by over 50,000+ customers
          </div>
        </div>
        <div className=" w-full flex md:flex-row flex-col justify-evenly items-center md:gap-0 gap-3 text-left ">
          <div className="flex gap-3">
            <div><img src={pencil} alt="" /></div>
            <div className="flex flex-col gap-3">
              <div className="text-[20px] font-[700]">Easy to Use</div>
              <div className="font-[600] text-[12px] text-gray-500">Editing and customizing Essential <br /> Lading is easy and fast</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div><img src={stack} alt="" /></div>
            <div className="flex flex-col gap-3">
              <div className="text-[20px] font-[700]">100% Responsive</div>
              <div className="font-[600] text-[12px] text-gray-500">Editing and customizing Essential <br /> Lading is easy and fast</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div><img src={multipleDevices} alt="" /></div>
            <div className="flex flex-col gap-3">
              <div className="text-[20px] font-[700]">50+New Pages</div>
              <div className="font-[600] text-[12px] text-gray-500">Editing and customizing Essential <br /> Lading is easy and fast</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
