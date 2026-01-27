import Container from "../Container";
import Image from "../Image";
import Marquee from "react-fast-marquee";
import One from "/src/assets/marOne.png";
import Two from "/src/assets/marTwo.png";
import Thr from "/src/assets/marThr.png";
import For from "/src/assets/marFor.png";
import Fiv from "/src/assets/marFiv.png";
import Flex from "../Flex";

const Marquri = () => {
  return (
    <div className="bg-black text-white py-25">
      <Container>
        <p className="text-center text-white font-medium font-Ows text-base tracking-[5px] uppercase mb-12">
          Company I Worked With
        </p>
        <Marquee
          pauseOnHover={false}
          gradient={true}
          gradientColor="black"
          speed={30}
          gradientWidth={"200px"}
        >
          <Flex className="gap-x-20 px-10">
            <Image imgSrc={One} />
            <Image imgSrc={Two} />
            <Image imgSrc={Thr} />
            <Image imgSrc={For} />
            <Image imgSrc={Fiv} />
            <Image imgSrc={One} />
            <Image imgSrc={Two} />
            <Image imgSrc={Thr} />
            <Image imgSrc={For} />
            <Image imgSrc={Fiv} />
          </Flex>
        </Marquee>
      </Container>
    </div>
  );
};

export default Marquri;
