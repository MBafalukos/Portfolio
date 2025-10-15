import { TfiLinkedin } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { Spinner } from "@/components/ui/spinner";

import { SlOptions } from "react-icons/sl";
import { Button } from "./ui/button";

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import CV from "../assets/CV-en.pdf";
import { Card, CardHeader, CardFooter } from "./ui/card";
import { FaWordpress } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import { FiMail } from "react-icons/fi";

import { useMediaQuery } from "@custom-react-hooks/use-media-query";

import { FaDatabase } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  const sectionRef = useRef(null);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          backgroundSize: "100% auto",
        },
        {
          backgroundSize: "250% auto",

          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // element enters viewport
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);
  return (
    /* All Content */

    <div className=" flex flex-col  overflow-x-hidden bg-black items-center  ">
      {/*  Header */}
      <div>
        <p className=" fixed top-0 left-0  font-bold  text-xl lg:text-2xl xl:text-3xl p-5 xl:p-10 z-0 ">
          <a
            href="mailto:m.bafalukos@gmail.com"
            className="flex items-center gap-x-2 font-Oswald text-white text-base lg:text-2xl"
          >
            Let's Talk
            <IoChatboxEllipsesOutline color="white" />
          </a>
        </p>
      </div>

      {/* Main Content */}
      <div
        ref={sectionRef}
        className=" rounded-lg relative flex flex-col items-center h-screen w-screen bg-no-repeat bg-center font-semibold font-Montserrat bg-[url('./assets/background6.jpg')] z-0 "
      >
        {/* About */}

        <div className=" lg:mx-28 text-4xl absolute mt-32 flex flex-col xl:flex-row ">
          <div className="flex flex-col xl:flex-row  w-full items-center xl:items-baseline justify-center">
            {/* <Avatar className="w-40 h-40   ">
              <AvatarImage src={mike} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <div className="flex flex-col w-full lg:p-10 pt-10 ">
              <div className=" text-center xl:text-start  ">
                <p className="md:text-7xl text-5xl lg:text-8xl xl:text-9xl font-bold font-Notable w-full text-[#EE7319]    ">
                  Hi.I'm Mike
                </p>
                <p className=" md:text-7xl text-5xl lg:text-8xl font-Notable xl:text-9xl font-bold w-full text-white drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] ">
                  A Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Marquee*/}
        <div className="flex absolute bottom-5 mx-10 py-10 max-w-screen">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex  justify-evenly items-center   flex-shrink-0 container marquee-mask"
          >
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <FaHtml5
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">HTML</div>
              </div>
            </div>
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <FaDatabase
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">SQL</div>
              </div>
            </div>
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <div className="  transition-all duration-300  ">
                  <FaWordpress
                    style={{ color: "orange" }}
                    className="w-10 h-10 lg:w-16 lg:h-16 "
                  />
                </div>
                <div className=" text-center text-white ">Wordpress</div>
              </div>
            </div>
            <div className="font-medium">
              <div className="flex  gap-x-2 items-center justify-center">
                <FaAws
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">Cloud</div>
              </div>
            </div>
            <div className="font-medium">
              <div className="flex  gap-x-2 items-center justify-center">
                <FaPython
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">Python</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex  justify-evenly items-center   flex-shrink-0 container "
          >
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <FaHtml5
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">HTML</div>
              </div>
            </div>
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <FaDatabase
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">SQL</div>
              </div>
            </div>
            <div className="font-medium ">
              <div className="flex gap-x-2 items-center justify-center">
                <div className="  transition-all duration-300  ">
                  <FaWordpress
                    style={{ color: "orange" }}
                    className="w-10 h-10 lg:w-16 lg:h-16 "
                  />
                </div>
                <div className=" text-center text-white ">Wordpress</div>
              </div>
            </div>
            <div className="font-medium">
              <div className="flex  gap-x-2 items-center justify-center">
                <FaAws
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">Cloud</div>
              </div>
            </div>
            <div className="font-medium">
              <div className="flex  gap-x-2 items-center justify-center">
                <FaPython
                  style={{ color: "orange" }}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
                <div className=" text-center text-white ">Python</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Projects */}
      <div className="flex bg-black relative flex-col items-center  w-screen h-full font-semibold font-Montserrat ">
        <p className="flex font-Notable text-5xl text-white my-5 ">Projects</p>
        <div className="grid grid-cols-1  w-full place-items-center   gap-6 items-center justify-center">
          <Card
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
            className="w-full overflow-hidden h-[230px] md:h-[520px] md:max-w-md relative max-w-sm bg-[url('./assets/Nasia1.jpg')] bg-cover  bg-center"
          >
            <div>
              {isDesktop ? (
                <Dialog open={open2} onOpenChange={setOpen2}>
                  <DialogTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] text-red-400 bg-black">
                    <DialogHeader className="text-white">
                      <DialogTitle className="text-2xl">
                        Digital Biography{" "}
                      </DialogTitle>
                      <DialogDescription>
                        Nasia Adam is a graduate of higher professional dance
                        school as a ballet & contemporary dance teacher. In her
                        professional career she has performed alongside renowned
                        Greek artist such as Elena Paparizou, Anna Vissi, Eleni
                        Foureira, Nikos Oikonomopoulos, Josephine and many
                        others. In addition to her performance career she is
                        also a choreographer and has assisted several respected
                        choreographers .
                      </DialogDescription>
                      <DialogTitle>Features</DialogTitle>
                      <DialogDescription>
                        Responsive , Smooth Scroll , SEO Optimized{" "}
                      </DialogDescription>
                      <DialogTitle>Technologies</DialogTitle>
                      <DialogDescription>Wordpress</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer open={open2} onOpenChange={setOpen2}>
                  <DrawerTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="bg-black border-none">
                    <DrawerHeader className="text-left text-white ">
                      <DrawerTitle className="text-2xl">
                        Digital Biography{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Nasia Adam is a graduate of higher professional dance
                        school as a ballet & contemporary dance teacher. In her
                        professional career she has performed alongside renowned
                        Greek artist such as Elena Paparizou, Anna Vissi, Eleni
                        Foureira, Nikos Oikonomopoulos, Josephine and many
                        others. In addition to her performance career she is
                        also a choreographer and has assisted several respected
                        choreographers .
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Features{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Responsive , Smooth Scroll , SEO Optimized{" "}
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Technologies{" "}
                      </DrawerTitle>
                      <DrawerDescription>Wordpress</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button
                          variant="destructive"
                          className="text-white bg-red-600"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            <CardHeader className="text-gray-900">
              <CardFooter className="absolute bottom-0 left-0 flex flex-col items-start ">
                <div
                  data-aos="zoom-out-up"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className="text-white flex items-center text-2xl"
                >
                  <CiGlobe />
                  <a href="https://nasia-adam.com">
                    <p className="font-light text-3xl">Nasia-adam.com</p>
                  </a>
                </div>
              </CardFooter>
            </CardHeader>
          </Card>

          <Card
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
            className="w-full md:h-[520px] h-[230px] md:max-w-md  overflow-hidden max-w-sm bg-[url('./assets/image00001.png')]  bg-contain  bg-center bg-no-repeat"
          >
            <div>
              {isDesktop ? (
                <Dialog open={open3} onOpenChange={setOpen3}>
                  <DialogTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] text-red-400 bg-black">
                    <DialogHeader className="text-white">
                      <DialogTitle className="text-2xl">
                        Event Website{" "}
                      </DialogTitle>
                      <DialogDescription>
                        Do The Work Heels Intensive is designed for dancers
                        ready to push their limits, refine their technique, and
                        elevate their artistry.
                      </DialogDescription>
                      <DialogTitle>Features</DialogTitle>
                      <DialogDescription>
                        Responsive , Contact Form , SEO Optimized{" "}
                      </DialogDescription>
                      <DialogTitle>Technologies</DialogTitle>
                      <DialogDescription>Wordpress</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer open={open3} onOpenChange={setOpen3}>
                  <DrawerTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="bg-black border-none">
                    <DrawerHeader className="text-left text-white ">
                      <DrawerTitle className="text-2xl">
                        Event Website{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Do The Work Heels Intensive is designed for dancers
                        ready to push their limits, refine their technique, and
                        elevate their artistry.
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Features{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Responsive , Contact Form , SEO Optimized{" "}
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Technologies{" "}
                      </DrawerTitle>
                      <DrawerDescription>Wordpress</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button
                          variant="destructive"
                          className="text-white bg-red-600"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            <CardHeader className="text-gray-900"></CardHeader>
            <CardFooter className="absolute bottom-0 left-0 flex flex-col items-start ">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="400"
                data-aos-once="true"
                className="text-white flex items-center text-2xl"
              >
                <CiGlobe />
                <a href="https://dotheworkintensive.com">
                  <p className="font-light text-2xl">dotheworkintensive.com</p>
                </a>
              </div>
            </CardFooter>
          </Card>

          <Card
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
            className="w-full overflow-hidden h-[230px] md:h-[520px]  relative max-w-sm md:max-w-md bg-[url('./assets/building3.jpg')] bg-cover  bg-center"
          >
            <div>
              {isDesktop ? (
                <Dialog open={open1} onOpenChange={setOpen1}>
                  <DialogTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] text-red-400 bg-black">
                    <DialogHeader className="text-white">
                      <DialogTitle className="text-2xl">Website </DialogTitle>
                      <DialogDescription>
                        The company STRATA A.T.E. is part of the group of
                        companies and operates in the field of real estate
                        development and management.
                      </DialogDescription>
                      <DialogTitle>Features</DialogTitle>
                      <DialogDescription>
                        Responsive , SEO Optimized{" "}
                      </DialogDescription>
                      <DialogTitle>Technologies</DialogTitle>
                      <DialogDescription>Wordpress</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer open={open1} onOpenChange={setOpen1}>
                  <DrawerTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="bg-black border-none">
                    <DrawerHeader className="text-left text-white ">
                      <DrawerTitle className="text-2xl">Website </DrawerTitle>
                      <DrawerDescription>
                        The company STRATA A.T.E. is part of the group of
                        companies and operates in the field of real estate
                        development and management.
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Features{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Responsive , SEO Optimized{" "}
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Technologies{" "}
                      </DrawerTitle>
                      <DrawerDescription>Wordpress</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button
                          variant="destructive"
                          className="text-white bg-red-600"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>

            <CardHeader className="text-gray-900">
              <CardFooter className="absolute bottom-0 left-0 flex flex-col items-start ">
                <div
                  data-aos="zoom-out-up"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className="text-white flex items-center text-2xl"
                >
                  <CiGlobe />
                  <a href="https://inter-tech.gr">
                    <p className="font-light text-3xl">Inter-tech.gr</p>
                  </a>
                </div>
              </CardFooter>
            </CardHeader>
          </Card>

          <Card
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-once="true"
            className="w-full overflow-hidden h-[230px] md:h-[520px]  md:max-w-md relative max-w-sm bg-[url('./assets/ongoing.jpg')] bg-cover  bg-center"
          >
            <div>
              {isDesktop ? (
                <Dialog open={open4} onOpenChange={setOpen4}>
                  <DialogTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] text-red-400 bg-black">
                    <DialogHeader className="text-white">
                      <DialogTitle className="text-2xl">Website</DialogTitle>
                      <DialogDescription>Demo Project</DialogDescription>
                      <DialogTitle>Features</DialogTitle>
                      <DialogDescription>
                        Responsive , Pixel Perfect , Contact Form , Animated{" "}
                      </DialogDescription>
                      <DialogTitle>Technologies</DialogTitle>
                      <DialogDescription>
                        React , Vite , Tailwind CSS , AOS
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer open={open4} onOpenChange={setOpen4}>
                  <DrawerTrigger>
                    <div className="text-white text-xl  absolute top-0 right-0 font-Montserrat  p-1">
                      <SlOptions />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="bg-black border-none">
                    <DrawerHeader className="text-left text-white ">
                      <DrawerTitle className="text-2xl">Website </DrawerTitle>
                      <DrawerDescription>Demo Project</DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Features{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        Responsive , Pixel Perfect , Contact Form , Animated{" "}
                      </DrawerDescription>
                      <DrawerTitle className=" text-white text-2xl">
                        Technologies{" "}
                      </DrawerTitle>
                      <DrawerDescription>
                        React , Vite , Tailwind CSS , AOS
                      </DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button
                          variant="destructive"
                          className="text-white bg-red-600"
                        >
                          Close
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            <div className="text-white flex items-center text-md absolute top-0 left-0 font-Montserrat font-light p-1 ">
              <Spinner className="size-5 text-white  " />
              Upcoming
            </div>

            <CardFooter className="absolute bottom-0 left-0 flex flex-col items-start ">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="400"
                data-aos-once="true"
                className="text-white flex items-center text-2xl"
              >
                <CiGlobe />
                <a href="https://mbafalukos.github.io/RetailVivo/">
                  <p className="font-light text-3xl">Live Preview</p>
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="flex items-center flex-col mt-16 lg:mt-28">
          {/* Contact */}

          <div className=" text-white flex-col xl:flex-row flex items-center xl:justify-between  ">
            <div>
              <div className=" flex  gap-x-10 ">
                <a href="https://linkedin.com/in/michalis-bafalukos-468338176">
                  <TfiLinkedin
                    color="#EE7319"
                    className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_2px_rgba(255,0,150,0.8)]"
                  />
                </a>
                <a href="https://github.com/MBafalukos">
                  <FaGithub
                    color="#EE7319"
                    className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_2px_rgba(255,0,150,0.8)]"
                  />
                </a>
                <a href={CV}>
                  <FiDownload
                    color="#EE7319"
                    className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_1px_rgba(255,0,150,0.8)]"
                  />
                </a>
                <a href="mailto:m.bafalukos@gmail.com">
                  <FiMail
                    color="#EE7319"
                    className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_2px_rgba(255,0,150,0.8)]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer*/}
          <div className="text-center  py-5 ">
            <p className="text-gray-500/80 text-base">
              {new Date().getFullYear()}© All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
