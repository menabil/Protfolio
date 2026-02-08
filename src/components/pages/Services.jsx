import Container from "../Container";
import Flex from "../Flex";
import { LuArrowUpRight } from "react-icons/lu";

const Services = () => {
  return (
    <div className="bg-[#F4F3ED] py-25" id="service">
      <Container>
        <h3 className="uppercase text-[60px] text-[#070707] font-Ows font-medium mb-17.5">
          Services
        </h3>
        <Flex className={"gap-x-7.5 justify-center"}>
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            <Flex className={" justify-between w-[775px]"}>
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                01
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </Flex>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              Brand Identity Design
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[700px] leading-[28px]">
              Blend of strategic thinking and creative flair to craft a digital
              identity that resonates and captivates. kits you need to create a
              true website within minutes.
            </p>
          </div>
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            <Flex className={"justify-between w-[355px]"}>
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                02
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </Flex>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              Visual Design
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[305px] leading-[28px]">
              Blend of artistic intuition with strategic insight to craft a
              visual identity.
            </p>
          </div>
        </Flex>
        <Flex className={"gap-x-7.5 justify-center my-7.5"}>
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            <Flex className={"justify-between w-[355px]"}>
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                03
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </Flex>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              UX Research
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[315px] leading-[28px]">
              Blend of functionality with aesthetics to create delightful
              experience.
            </p>
          </div>
          <div className="py-15.5 pl-10 pr-9 bg-[#F7F7F7] rounded-[20px] group">
            <Flex className={" justify-between w-[775px]"}>
              <div className="text-[#77777D] border-2 border-[#77777D] px-2.5 py-1 text-sm font-Pop font-medium leading-5 rounded-md group-hover:text-white group-hover:bg-black group-hover:border-black duration-300 ">
                04
              </div>
              <LuArrowUpRight className="text-[#070707] text-3xl group-hover:rotate-45 duration-500" />
            </Flex>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-[33px] uppercase mt-20 mb-5">
              Art Direction
            </h4>
            <p className="text-[#77777D] text-base font-Pop w-[710px] leading-[28px]">
              Blend of strategic thinking and artistic finesse to craft a visual
              identity that goes beyond aesthetics.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Services;
