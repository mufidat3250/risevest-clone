import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../../atom/Button";
import { useInView } from "react-intersection-observer";
import { gsap, Power3 } from "gsap";
import {
  downloadVariant,
  joinVariant,
  dollarInvestmentVariant,
  buttonVariant,
  AppPhoneVariant,
} from "../../variant";
gsap.registerPlugin();

const JoinInvestors = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="hidden sm:block  py-20  z-10 overflow-hidden  ">
        <div
          className="py-20 bg-[#e6f5f6] px-16 rounded-xl relative overflow-hidden"
          ref={ref}
        >
          <div className="jointInvestor">
            <motion.p
              className="mb-[1rem] title text-primary"
              variants={downloadVariant}
              initial="hidden"
              whileInView="visible"
            >
              Download The Rise App
            </motion.p>
            <motion.h2
              className="font  text-base font-semibold sm:text-4xl max-w-[500px] mb-[1.5rem] join "
              variants={joinVariant}
              whileInView="visible"
              initial="hidden"
            >
              Join our 200,000+ users investing and setting long term goals!
            </motion.h2>
            <p className="mb-[1rem] dollar">
              Dollar investments that help you grow
            </p>
            <div className="flex gap-4">
              <div className="w-[160px] button">
                <Button
                  title="Download on the"
                  subtitle="Play Store"
                  prefixIcon={<img src="/Vectors/apple-fill.svg" />}
                  customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                  href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                />
              </div>
              <div className="w-[auto] button">
                <Button
                  title="Download on the "
                  subtitle="Apple Store"
                  prefixIcon={<img src="/Vectors/google-play-fill.svg" />}
                  customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                  href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                />
              </div>
            </div>
          </div>
          <div className=" img w-[30%] h-full top-[40px] absolute right-0 bottom-[60px]">
            <motion.img
              src="/Images/riseAppPhone.png"
              alt=""
              className="object-contain  jesse top-0  overflow-hidden"
              variants={AppPhoneVariant}
              initial="hidden"
              whileInView="visible"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#e6f5f6] w-full my-20 relative h-[32rem] overflow-hidden rounded-[16px]  sm:hidden">
        <div className="pt-[20px] px-4">
          <motion.p
            ref={ref}
            className="text-center text-primary mb-4"
            variants={downloadVariant}
            whileInView="visible"
            initial="hidden"
          >
            Download the Rise App
          </motion.p>
          <motion.h2
            className=" font-bold text-2xl  text-center leading-10"
            ref={ref}
            variants={joinVariant}
            whileInView="visible"
            initial="hidden"
          >
            Join our 200,000+users investing and setting long term goals!
          </motion.h2>
          <motion.p
            variants={dollarInvestmentVariant}
            className=" text-lg text-center my-8"
            whileInView="visible"
            initial="hidden"
          >
            Dollar investments that help you grow
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center gap-5"
          variants={buttonVariant}
          whileInView="visible"
          initial="hidden"
        >
          <motion.div
            className=""
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
          >
            <Button
              title="Download on the "
              subtitle="Apple Store"
              prefixIcon={<img src="/Vectors/google-play-fill.svg" />}
              customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
              href="https://play.google.com/store/apps/details?id=com.rise.mobile"
            />
          </motion.div>
          <div className="">
            <Button
              title="Download on the"
              subtitle="Play Store"
              prefixIcon={<img src="/Vectors/apple-fill.svg" />}
              customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
              href="https://play.google.com/store/apps/details?id=com.rise.mobile"
            />
          </div>
        </motion.div>
        <div className=" flex justify-center items-center mt-10">
          <motion.img
            src="/Images/riseAppPhone.png"
            alt=""
            className="object-contain w-[60%]"
            variants={AppPhoneVariant}
            initial="hidden"
            whileInView="visible"
          />
        </div>
      </div>
    </>
  );
};

export default JoinInvestors;
