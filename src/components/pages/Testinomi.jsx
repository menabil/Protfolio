import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import TOne from "/src/assets/tOne.png";
import TTwo from "/src/assets/tTwo.png";
import TThr from "/src/assets/tThr.png";
import TFor from "/src/assets/tFor.png";
import TFiv from "/src/assets/tFiv.png";

const Testinomi = () => {
  return (
    <div className="bg-[#F4F3ED]" id="blog">
      <Container>
        <h3 className="text-[#070707] font-Ows font-medium text-[60px] uppercase py-20">
          Testinomials
        </h3>
        <Flex className={"gap-7.5 flex-wrap justify-center pb-[130px]"}>
          <div className="p-5 rounded-2xl bg-white">
            <Image imgSrc={TOne} />
            <p className="font-Pop text-[#77777D] w-xl my-6.25">
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </p>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-10.5 uppercase">
              Ashfak Mahmud
            </h4>
            <p className="font-Pop text-[#77777D] text-sm leading-5.5">
              CEO & Founder Google
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white">
            <Image imgSrc={TTwo} />
            <p className="font-Pop text-[#77777D] w-150 my-6.25">
              Asian planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </p>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-10.5 uppercase">
              JH JABER
            </h4>
            <p className="font-Pop text-[#77777D] text-sm leading-5.5">
              CEO & Founder X
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white">
            <Image imgSrc={TThr} />
            <p className="font-Pop text-[#77777D] w-92.5 my-6.25">
              Hello planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </p>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-10.5 uppercase">
              Shoumen Biswas
            </h4>
            <p className="font-Pop text-[#77777D] text-sm leading-5.5">
              Managing Director - Paydesk
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white">
            <Image imgSrc={TFor} />
            <p className="font-Pop text-[#77777D] w-92.5 my-6.25">
              Financial planners help people to knowledge in about how to invest
              and in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </p>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-10.5 uppercase">
              Majharul Islam
            </h4>
            <p className="font-Pop text-[#77777D] text-sm leading-5.5">
              CEO & Founder Amar Pion
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white">
            <Image imgSrc={TFiv} />
            <p className="font-Pop text-[#77777D] w-92.5 my-6.25">
              Yelp planners help people to knowledge in about how to invest and
              in save their moneye the most efficient way eve plan ners help
              people tioniio know ledige in about how.
            </p>
            <h4 className="text-[#070707] font-Ows font-medium text-3xl leading-10.5 uppercase">
              Mesbaul Haque
            </h4>
            <p className="font-Pop text-[#77777D] text-sm leading-5.5">
              Founder Oxyzen
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Testinomi;
