// import Container from "../Container";
// import Flex from "../Flex";
// import { LuArrowUpRight } from "react-icons/lu";

// const Services = () => {
//   return (
//     <div className="bg-[#F4F3ED] py-25">
//       <Container>
//         <h3 className="uppercase text-[60px] text-[#070707] font-Ows font-medium mb-17.5">
//           Services
//         </h3>
//         <Flex className={"gap-x-7.5 justify-center"}>
//           <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
//             <Flex className={" justify-between w-[775px]"}>
//               <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
//                 01
//               </div>
//               <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
//             </Flex>
//             <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
//               Front-End Development
//             </h4>
//             <p className="text-[#77777D] text-base font-Pop w-[700px] leading-[28px]">
//               Transforming ideas into reality. I build fast, interactive, and
//               scalable websites using modern technologies like React and
//               JavaScript.
//             </p>
//           </div>
//           <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
//             <Flex className={"justify-between w-[355px]"}>
//               <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
//                 02
//               </div>
//               <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
//             </Flex>
//             <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
//               PERFORMANCE OPTIMIZATION
//             </h4>
//             <p className="text-[#77777D] text-base font-Pop w-[330px] leading-[28px]">
//               Optimizing web pages for maximum speed and smooth functionality to
//               ensure the best possible user experience.
//             </p>
//           </div>
//         </Flex>
//         <Flex className={"gap-x-7.5 justify-center my-7.5"}>
//           <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
//             <Flex className={"justify-between w-[355px]"}>
//               <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
//                 03
//               </div>
//               <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
//             </Flex>
//             <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
//               UI/UX Implementation
//             </h4>
//             <p className="text-[#77777D] text-base font-Pop w-[315px] leading-[28px]">
//               Bridging the gap between design and functionality. I turn static
//               designs into fully interactive, accessible, and engaging user
//               interfaces.
//             </p>
//           </div>
//           <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
//             <Flex className={" justify-between w-[775px]"}>
//               <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
//                 04
//               </div>
//               <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
//             </Flex>
//             <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
//               Responsive Web Design
//             </h4>
//             <p className="text-[#77777D] text-base font-Pop w-[710px] leading-[28px]">
//               Ensuring a seamless user experience across all devices. I create
//               pixel-perfect, mobile-friendly interfaces using modern CSS
//               frameworks like Tailwind CSS.
//             </p>
//           </div>
//         </Flex>
//       </Container>
//     </div>
//   );
// };

// export default Services;

import Container from "../Container";
import { LuArrowUpRight } from "react-icons/lu";

const Services = () => {
  return (
    <div className="bg-[#F4F3ED] py-25">
      <Container>
        <h3 className="uppercase text-[60px] text-[#070707] font-Ows font-medium mb-17.5">
          Services
        </h3>

        {/* Row 1 with Grid */}
        <div className="grid grid-cols-[auto_auto] gap-x-7.5 justify-center">
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            {/* Inner Header with Grid */}
            <div className="grid grid-cols-[auto_auto] justify-between w-[775px]">
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                01
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </div>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              Front-End Development
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[700px] leading-[28px]">
              Transforming ideas into reality. I build fast, interactive, and
              scalable websites using modern technologies like React and
              JavaScript.
            </p>
          </div>

          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            {/* Inner Header with Grid */}
            <div className="grid grid-cols-[auto_auto] justify-between w-[355px]">
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                02
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </div>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              PERFORMANCE OPTIMIZATION
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[330px] leading-[28px]">
              Optimizing web pages for maximum speed and smooth functionality to
              ensure the best possible user experience.
            </p>
          </div>
        </div>

        {/* Row 2 with Grid */}
        <div className="grid grid-cols-[auto_auto] gap-x-7.5 justify-center my-7.5">
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            {/* Inner Header with Grid */}
            <div className="grid grid-cols-[auto_auto] justify-between w-[355px]">
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                03
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </div>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              UI/UX Implementation
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[315px] leading-[28px]">
              Bridging the gap between design and functionality. I turn static
              designs into fully interactive, accessible, and engaging user
              interfaces.
            </p>
          </div>

          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            {/* Inner Header with Grid */}
            <div className="grid grid-cols-[auto_auto] justify-between w-[775px]">
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                04
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </div>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              Responsive Web Design
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[710px] leading-[28px]">
              Ensuring a seamless user experience across all devices. I create
              pixel-perfect, mobile-friendly interfaces using modern CSS
              frameworks like Tailwind CSS.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
