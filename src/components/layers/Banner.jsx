import { Link } from "react-router";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Bone from "/src/assets/bannerOne.png";
import BTwo from "/src/assets/bannerTwo.png";

const Banner = () => {
  return (
    <div className="bg-[#F4F3ED]">
      <Container className={"pt-30 pb-42"}>
        <h1 className="font-Ows text-[170px] text-[#070707] leading-61.5 font-semibold text-center">
          NABIL MUNTASIR
        </h1>
        <Flex className={"mt-7.5 justify-between"}>
          <div className="">
            <Image imgSrc={Bone} />
            <p className="font-Pop text-[#070707] font-medium text-xl py-5">
              10+ reviews <span className="text-[#969696]">(4.96 of 5)</span>
            </p>
            <p className="text-[#070707] font-Pop font-medium text-base w-75 leading-7">
              Words from my esteemed clients.
            </p>
          </div>
          <div className="absolute top-70 left-1/2 -translate-x-1/2">
            <Image
              imgSrc={BTwo}
              className={"rotate-10 hover:rotate-0 duration-500"}
            />
          </div>
          <div className="">
            <p className="font-Pop text-base text-[#070707] w-75 leading-7 mb-4">
              Hi, I'm Nabil, a passionate Fontend Developer dedicated to
              creating user- friendly Websites.
            </p>
            <Link to={"contact"}>
              <Button btnText={"Get In touch"} className={"w-42"} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
