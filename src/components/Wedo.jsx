import bright from "../assets/bright.png";
import Code from "../assets/coding.png";
import Settings from "../assets/Settings.png";
import img1 from "../assets/grid-img-1.webp";
import img2 from "../assets/grid-img-2.webp";
import img3 from "../assets/grid-img-3.webp";

const Wedo = () => {
  return (
    <div
      id="what-we-do"
      className="bg-[#1E1A25] pb-72"
      style={{
        background: "linear-gradient(-8deg,#18191F 20%,  #1E1A25 0%)",
      }}
    >
      <div
        id="do-top"
        className="md:px-16 lg:px-24 flex flex-col items-center md:items-start"
      >
        <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl ">
          What we do
        </p>
        <div className="flex flex-col text-center md:text-left md:grid gap-6  md:grid-cols-5 mt-4">
          <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold  col-span-3">
            We create digital products that help you get ahead
          </p>
          <p className="md:text-[22px] text-[20px] text-[#C2C7DC] col-span-2">
            From fresh ideas to fully-realized designs, we cover every aspect of
            your digital presence.
          </p>
        </div>
      </div>

      {/**************************************************************************** */}

      <div
        id="do-bottom"
        className="flex flex-col  md:flex-row gap-14 py-16 lg:px-24 px-4 h-fit"
      >
        <div id="bottom-left" className="flex flex-col gap-8 ">
          <div className="flex ">
            <div className="flex flex-col md:flex-row items-center gap-8 py-6 px-14 md:ml-0 lg:ml-12 bg-[#22212A] rounded-[30px]">
              <img
                src={bright}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left ">
                <p className="text-xl font-bold">Web Design</p>
                <p className="text-lg text-clip">
                  We craft visually stunning, unforgettable experiences with
                  responsive design at the forefront.
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-col md:flex-row items-center  gap-8 py-6 px-14 md:mr-0 lg:mr-12  bg-[#22212A] rounded-[30px]">
              <img
                src={Code}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left ">
                <p className="text-xl font-bold">Web Development</p>
                <p className="text-lg text-clip">
                  We excell at converting eye-catching designs into
                  high-functioning, user-friendly web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex  flex-col md:flex-row items-center gap-8 py-6 px-14 md:ml-0 lg:ml-12 bg-[#22212A] rounded-[30px]">
              <img
                src={Settings}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left ">
                <p className="text-xl font-bold">Maintenance & Optimization</p>
                <p className="text-lg text-clip">
                  We ensure your site remains an effective, optimized tool for
                  your business needs, goals and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*********************************************************************** */}
        <div id="bottom-right" className="flex gap-3 md:gap-6 ">
          <div className="h-full flex-[0.5]">
            <img
              src={img1}
              alt=""
              className=" rounded-2xl h-full object-cover "
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-6 flex-[0.5]">
            <img
              src={img2}
              alt=""
              className="rounded-2xl h-full object-cover "
            />
            <img
              src={img3}
              alt=""
              className="rounded-2xl h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
