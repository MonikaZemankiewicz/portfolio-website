"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Vina_Sans } from "next/font/google";

const vina_sans = Vina_Sans({
  weight: "400",
  subsets: ["latin"],
});

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <div className={vina_sans.className}>
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600">
            {children}
          </span>
        </div>
        <div className={vina_sans.className}>
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600">
            {children}
          </span>
        </div>
        <div className={vina_sans.className}>
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600">
            {children}
          </span>
        </div>
        <div className={vina_sans.className}>
          <span className="bg-gradient-to-r from-secondary-500 to-primary-600">
            {children}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollingHeader() {
  return (
    <div className="flex items-center justify-center pt-10">
      <section className="scrolling_header w-full mb-12 sm:mb-0 sm:w-52 sm:h-52">
        <ParallaxText baseVelocity={-5}>Contact me</ParallaxText>
        <ParallaxText baseVelocity={5}>Contact me</ParallaxText>
      </section>
    </div>
  );
}
