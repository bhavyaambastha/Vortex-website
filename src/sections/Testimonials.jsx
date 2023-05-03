import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Testimonials" color="blue" lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="The Vortex team has proven to be highly professional, flexible, scalable and very competent technically. They often deliver results faster than even we are able to keep up with . . ."
            name="Trushit Vyas"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="The team delivered a stable app ahead of deadlines, communicating effectively with the internal team. Vortex treated the project as if it were their own . . ."
            name="Kishan H. Sheth"
            designation="Founder & CEO"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="What impressed me most was their understanding of the exact requirement and ultimately providing the right solutions for fulfilling those requirements . . ."
            name="Romit Gandhi"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}
