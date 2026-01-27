import Container from "../Container";
import Flex from "../Flex";
import SlotCounter from "react-slot-counter";

const About = () => {
  return (
    <div className="bg-black">
      <Container className={"py-25"}>
        <Flex className={"justify-between items-start"}>
          <p className="text-[#F4F3ED] text-[22px] font-Pop font-medium">
            About Me
          </p>
          <div className="">
            <p className="w-242 text-[#E6EAEE] font-Pop text-3xl leading-10.5 mb-15">
              I am Nabil Muntasir, a seasoned fontend developer with over 1
              years of experience in crafting intuitive and engaging digital
              experiences. My journey began with a background in graphic design,
              where I discovered my passion for understanding user behavior and
              translating it into seamless interactions.
            </p>
            <Flex className={"justify-between"}>
              <div className=" text-center">
                <h5 className="font-Pop font-bold text-[#F4F3ED] text-[50px]">
                  <SlotCounter
                    startValue={0}
                    value={1}
                    duration={2}
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -100px 0px",
                    }}
                  />
                  <span>+</span>
                </h5>
                <p className="text-[#F4F3ED] text-base font-Pop">
                  Years Of Experience
                </p>
              </div>
              <div className=" text-center">
                <h5 className="font-Pop font-bold text-[#F4F3ED] text-[50px]">
                  <SlotCounter
                    startValue={0}
                    value={200}
                    duration={2}
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -100px 0px",
                    }}
                  />
                  <span>+</span>
                </h5>
                <p className="text-[#F4F3ED] text-base font-Pop">
                  Completed Projects
                </p>
              </div>
              <div className=" text-center">
                <h5 className="font-Pop font-bold text-[#F4F3ED] text-[50px]">
                  <SlotCounter
                    startValue={0}
                    value={90}
                    duration={2}
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -100px 0px",
                    }}
                  />
                  <span>%+</span>
                </h5>
                <p className="text-[#F4F3ED] text-base font-Pop">
                  Client Satisfactions
                </p>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
