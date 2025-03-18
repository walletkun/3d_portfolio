"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  // Making the animation for more interactiveness
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    //console.log(clientX, clientY, x , y);
  };

  // This allows us to track the window size so for our animation to interact much more smoothly
  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
    console.log(innerWidth, innerHeight);
  };

  // Deconstructing them so we can see what is the current window's height and width
  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 80, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 80, damping: 15 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: 1,
            }}
          >
            <Image
              src={"/snowboarding.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span className="absolute text-3xl font-semibold text-white" initial={{
              scale: 0,
            }}
            animate={{
              opacity: buttonHover ? 0 : 1,
              scale: buttonHover ? 2 : 0,
              y: buttonHover ? -40 : 0
            }}
            transition={ { opacity: { delay: 0.4 } }}>
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            My Name is Fei Lin &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            {" "}
            I love to build projects 🏂
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-blue-400">
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="rounded-lg hover:bg-blue-200 hover:text-white transition-colors "
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
