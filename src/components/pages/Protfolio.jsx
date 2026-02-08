import Container from "../Container";
import Flex from "../Flex";
import { FaGithub } from "react-icons/fa6";
import Image from "../Image";
import pOne from "/src/assets/pOne.png";
import pTwo from "/src/assets/pTwo.png";
import pThr from "/src/assets/pThr.png";
import pFor from "/src/assets/pFor.png";
import pFiv from "/src/assets/pFiv.png";
import pSix from "/src/assets/pSix.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";

const Protfolio = () => {
  return (
    <div className="bg-black pb-50 pt-35" id="project">
      <Container>
        <Flex className={"justify-between items-center mb-25"}>
          <h3 className="uppercase text-[60px] text-white font-Ows font-medium">
            Protfolio
          </h3>
          <a href="https://github.com/menabil" target="_blank">
            <Flex className="gap-x-2 text-white border-2 border-white px-4.5 py-3.5 text-base font-Pop font-medium leading-5 rounded-md hover:text-black hover:bg-white hover:border-white duration-300 ">
              <FaGithub className="text-2xl" />
              GitHub
            </Flex>
          </a>
        </Flex>
        <Flex className={"flex-wrap gap-7 justify-center"}>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pOne}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">Hancok</h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Gaming website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  html
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  css
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between">
                <a href="https://menabil.github.io/Hancok" target="_blank">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Hancok" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pTwo}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">Orebi</h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Full functional e-Commerce website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  REACT
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  TAILWIND
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between">
                <a href="https://class-52.vercel.app" target="_blank">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Orebi" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pThr}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">
                Creative
              </h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Digital marketing website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  Html
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  CSS
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between">
                <a href="https://menabil.github.io/Creative" target="_blank">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Creative" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pFor}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">Uomo</h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Clothing brand website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  jquery
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  css
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between">
                <a href="https://menabil.github.io/Uomo" target="_blank">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Uomo" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pFiv}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">Hunt</h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Personal portfolio website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  bootstrap
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  JS
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between" target="_blank">
                <a href="https://menabil.github.io/Hunt">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Hunt" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
          <div className="w-[31%] group border-2 rounded-2xl overflow-hidden duration-500 border-white/10 hover:shadow-kot hover:border-black/10">
            <Image
              imgSrc={pSix}
              className={
                "w-full h-60 group-hover:-translate-y-3  object-cover group-hover:scale-110 duration-500 inset-0 opacity-70 group-hover:opacity-100"
              }
            />
            <div className="my-5 px-5 text-black">
              <h3 className="text-4xl font-Ows text-white font-bold">
                Exclusive
              </h3>
              <p className="text-[#77777D] text-[18px] pt-3 font-Pop">
                Gadget's website
              </p>
              <Flex className="gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  HTML
                </span>
                <span className="uppercase text-sm font-bold text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                  bootstrap
                </span>
              </Flex>
              <Flex className="mb-5 mt-8 justify-between">
                <a href="https://menabil.github.io/Exclusive" target="_blank">
                  <Flex className="cursor-pointer gap-x-3.5 border-2 border-gray-300/70 rounded-xl py-3.5 duration-500 px-5 bg-[#070707] group-hover:bg-gray-300 group-hover:text-black w-35 text-gray-300 font-Pop font-semibold">
                    <p>Preview</p>
                    <FaArrowUpRightFromSquare />
                  </Flex>
                </a>
                <a href="https://github.com/menabil/Exclusive" target="_blank">
                  <FaGithub className="text-3xl text-gray-300 mr-4 cursor-pointer" />
                </a>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Protfolio;
