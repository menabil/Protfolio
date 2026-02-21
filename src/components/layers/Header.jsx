import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { HashLink } from "react-router-hash-link";

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
              <HashLink smooth to="#home">
                <li>HOME</li>
<<<<<<< HEAD
              </Link>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <Link to={"/service"}>
=======
              </HashLink>
              <HashLink smooth to="#about">
                <li>ABOUT</li>
              </HashLink>
              <HashLink smooth to="#service">
>>>>>>> 7e741d46a975821c8a7d45ea1ab9e4fc6819a40d
                <li>SERVICES</li>
              </HashLink>
              <HashLink smooth to="#project">
                <li>PROJECTS</li>
              </HashLink>
              <HashLink smooth to="#blog">
                <li>BLOG</li>
              </HashLink>
              <HashLink smooth to="#contact">
                <li>CONTACT</li>
              </HashLink>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
