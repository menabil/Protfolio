import Container from "../Container";
import Flex from "../Flex";

const Footer = () => {
  return (
    <div className="bg-[#F4F3ED]">
      <Container className={"pt-25 pb-18 text-center text-[#070707]"}>
        <p className="text-xl font-Pop">Have a project in mind?</p>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
        >
          <h3 className="text-[180px] font-Pop font-bold cursor-pointer">
            LETS WORK
          </h3>
        </a>
      </Container>
      <Container>
        <Flex
          className={"justify-between text-[#070707] text-sm font-Pop pb-5"}
        >
          <p>Template by Creative Personal®</p>
          <p>© Copyright 2026</p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
