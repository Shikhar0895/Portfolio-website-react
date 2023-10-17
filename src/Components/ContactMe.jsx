import { HiMail } from "react-icons/hi";
import { styles } from "../styles";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "../hoc/Reveal";
import { SectionHeadingmd, SectionHeadingsm } from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/Activesectioncontext";
import useInViewHook from "../utils/InViewHook";
import { motion } from "framer-motion";

//
export default function ContactMe() {
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  // });

  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Contact");
  //   }
  // }, [inView]);
  const ref = useInViewHook("Contact", 0.7);

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nnmddfh",
        "template_2a2yk45",
        {
          from_name: form.name,
          to_name: "Shikhar",
          from_email: form.email,
          to_email: "shikhar0895@gmail.com",
          message: form.message,
        },
        "3mhknYIcmMQWISj3c"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          alert(
            "Thank You For your message. I'll get back to you as soon as possible."
          );
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something Went Wrong");
        }
      );
  };

  return (
    <motion.section
      ref={ref}
      className={` bg-black w-full`}
      data-section-id="Contact"
      id="Contact"
      initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="pb-[48px] sm:pb-0" id="ComponentWrapper">
        <SectionHeadingsm>Contact Me</SectionHeadingsm>
        <SectionHeadingmd>Contact Me</SectionHeadingmd>
        <div className="w-full flex justify-center mt-7">
          <p className="text-white text-base text-center">
            Please contact me directly at{" "}
            <a className="underline" href="mailto:example@gmail.com">
              Shikhar0895@gmail.com
            </a>{" "}
            or through this form.
          </p>
        </div>
        <div className="w-[60%] min-w-[244px] max-w-[430px] mx-auto rounded-md ">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mt-12 sm:my-10 flex flex-col gap-8">
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">Your Name</span> */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your good name"
                  className="py-4 px-6 placeholder:text-base text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">Your email</span> */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className=" py-4 px-6 placeholder:text-base text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                {/* <span className="text-white font-medium mb-4">
                  Your Message
                </span> */}
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="py-4 px-6 placeholder:text-base text-black rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-aqua py-3 px-8 rounded-md outline-none w-fit text-black font-bold shadow-md  hover:scale-110 focus:scale-110 active:scale-105 transition"
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
