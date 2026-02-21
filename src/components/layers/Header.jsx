import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <div className="bg-[#F4F3ED] py-6 fixed w-full border-b border-[#dbdad7] z-100">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Link to={"/"}>
              <Image imgSrc={Logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-7.5 text-[#070707] font-Pop text-base font-medium">
              <Link to={"/"}>
                <li>HOME</li>
              </Link>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <Link to={"/service"}>
                <li>SERVICES</li>
              </Link>
              <Link to={"/protfolio"}>
                <li>PROJECTS</li>
              </Link>
              <Link to={"/testinomi"}>
                <li>BLOG</li>
              </Link>
              <Link to={"/contact"}>
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
