import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About Vortex" color="blue" />
          <p>
          We work with you to help you scale up your business to elevate and unlock the full potential of technology. Trust us when we say this, we have been dominating the tech territory for over 3+ years now and have witnessed our trajectory get better from the day we started.
          </p>
          <p>
          Our aim has always been to bring joy and satisfaction to our client's faces as that's how we know we did a great job.
          </p>
          <Button content="Why Vortex?" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Innovative Ideas"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planning"
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Communication"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="24 * 7 Support"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
