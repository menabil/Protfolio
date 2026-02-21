import Container from "../Container";
import Flex from "../Flex";
import SlotCounter from "react-slot-counter";

const About = () => {
  return (
    <div className="bg-black" id="about">
      <Container className={"py-25"}>
        <Flex className={"justify-between items-start"}>
          <p className="text-[#F4F3ED] text-[22px] font-Pop font-medium">
            About Me
          </p>
          <div className="">
            <p className="w-242 text-[#E6EAEE] font-Pop text-3xl leading-10.5 mb-15">
              Hi, I'm Nabil Muntasir. As a passionate front-end developer with
              over a year of hands-on experience, I specialize in crafting
              intuitive digital experiences. My core focus lies in understanding
              user behavior and turning those insights into seamless web
              interactions.
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
