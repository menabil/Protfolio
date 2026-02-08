import Container from "../Container";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Flex from "../Flex";
import { PiHeadphonesBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import Button from "../Button";
import { LuMail } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ahg6d5p",
        "template_79x3qyw",
        form.current,
        "rC2OuUPjCYkBUejd-",
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully! Thanks for contact me.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div className="bg-[#070707] py-25" id="contact">
      <Container>
        <h3 className="text-white font-Ows font-medium text-[60px] uppercase py-15">
          Contact Me
        </h3>
        <Flex className={"gap-x-7.5"}>
          <div className="pt-10 pr-7.5 pb-4 pl-10 bg-white rounded-xl w-[412px]">
            <div className="">
              <HiOutlineLocationMarker className="text-3xl" />
              <h5 className="uppercase text-[#070707] font-Ows text-xl mt-5 mb-1.5">
                our office:
              </h5>
              <p className="text-[#77777D] font-Pop text-base mb-9">
                Mohakhali,Dhaka Bangladesh
              </p>
            </div>
            <div className="">
              <PiHeadphonesBold className="text-3xl" />
              <h5 className="uppercase text-[#070707] font-Ows text-xl mt-5 mb-1.5">
                contact number:
              </h5>
              <p className="text-[#77777D] font-Pop text-base mb-9">
                +1791655368
              </p>
            </div>
            <div className=" mb-9">
              <MdMailOutline className="text-3xl" />
              <h5 className="uppercase text-[#070707] font-Ows text-xl mt-5 mb-1.5">
                Email us:
              </h5>
              <p className="text-[#77777D] font-Pop text-base">
                nabil99cc@gmail.com
              </p>
            </div>
            <div className="mb-3">
              <h5 className="uppercase text-[#070707] font-Ows text-xl mt-4 mb-5">
                Socials
              </h5>
              <Flex className={"gap-x-4"}>
                <a href="https://www.facebook.com/menabil.dev" target="_blank">
                  <div className="p-3.5 border-black/10 border-2 text-xl text-black hover:bg-black duration-300 hover:text-white">
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href="https://discord.com/users/935185062796877824"
                  target="_blank"
                >
                  <div className="p-3.5 border-black/10 border-2 text-xl text-black  hover:bg-black duration-300 hover:text-white">
                    <FaDiscord />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/menabil" target="_blank">
                  <div className="p-3.5 border-black/10 border-2 text-xl text-black  hover:bg-black duration-300 hover:text-white">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/menabil" target="_blank">
                  <div className="p-3.5 border-black/10 border-2 text-xl text-black  hover:bg-black duration-300 hover:text-white">
                    <FiGithub />
                  </div>
                </a>
              </Flex>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="pt-12.5 pr-4 pb-5 pl-6 bg-white rounded-xl w-[854px]">
              <Flex className={"mb-8"}>
                <div className="mx-3.5">
                  <label className="text-black text-base font-Pop leading-7.5 uppercase mb-5">
                    Full Name
                  </label>
                  <Flex className="border-black border rounded-[10px] py-4 px-6.5 w-[376px] justify-between">
                    <input
                      type="text"
                      className=" outline-none w-70"
                      name="user_name"
                    />
                    <FaRegUser className="text-base" />
                  </Flex>
                </div>
                <div className="mx-3.5">
                  <label className="text-black text-base font-Pop leading-7.5 uppercase mb-5">
                    Email Address
                  </label>
                  <Flex className="border-black border rounded-[10px] py-4 px-6.5 w-[376px] justify-between">
                    <input
                      type="text"
                      className=" outline-none w-70"
                      name="user_email"
                    />
                    <TbMail className="text-xl" />
                  </Flex>
                </div>
              </Flex>
              <div className="mx-4 mb-8">
                <label className="text-black text-base font-Pop leading-7.5 uppercase mb-5">
                  Subject
                </label>
                <Flex className="border-black border rounded-[10px] py-4 px-6.5 w-[782px] justify-between">
                  <input type="text" className=" outline-none w-170" />
                  <FaRegUser className="text-base" />
                </Flex>
              </div>
              <div className="mx-4 mb-8">
                <label className="text-black text-base font-Pop leading-7.5 uppercase mb-5">
                  Your Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className=" outline-none w-170 border-black border rounded-[10px] py-4 px-6.5 w-[782px] h-[130px]"
                />
              </div>

              <Button
                type="submit"
                btnText={
                  <>
                    Send Me Message
                    <LuMail className="text-xl" />
                  </>
                }
                className={
                  "w-61 ml-4 mb-5  flex items-center gap-x-2 cursor-pointer"
                }
              />
            </div>
          </form>
        </Flex>
      </Container>
    </div>
  );
};

export default Contact;
