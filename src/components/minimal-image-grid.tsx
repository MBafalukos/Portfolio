import { TfiLinkedin } from "react-icons/tfi";
import CV from "../assets/CV-en.pdf";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { MdLocationSearching } from "react-icons/md";
import { TbSql } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { useEffect } from "react";
import headericon from "../assets/components.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsDot } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    /* All Content */

    <div className=" flex  overflow-y-scroll overflow-x-hidden bg-black items-center ">
      {/*  Header */}

      <div className="fixed  top-0 z-50 w-full lg:hidden overflow-x-hidden justify-center flex   ">
        <div className=" items-center flex  backdrop-blur-xl rounded-b-2xl     ">
          <a
            href="#About"
            className="md:mx-10 mx-6 my-5 text-xl transition-all hover:scale-105 text-zinc-300  "
          >
            <div className="flex items-center">
              <img src={headericon} className="hidden lg:block" />
              <p className="lg:pl-20">About</p>
            </div>
          </a>
          <a
            href="#Projects"
            className="md:mx-10 mx-6 my-5 text-xl  transition-all hover:scale-105 text-zinc-300 "
          >
            <p>Projects</p>
          </a>
          <a
            href="#Contact"
            className="md:mx-10 mx-6 my-5 text-xl  transition-all hover:scale-105 text-zinc-300  "
          >
            <div className="flex items-center">
              <p className="lg:pr-20 ">Contact</p>
              <img src={headericon} className="hidden lg:block" />
            </div>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col  items-center justify-center w-full ">
        <div className="flex justify-center h-screen ">
          <div id="About" className="font-semibold font-Montserrat w-full   ">
            {/* About */}
            <div className=" my-24">
              <div className=" lg:mx-28 text-4xl  flex flex-col xl:flex-row">
                <div className="flex flex-col xl:flex-row  w-full items-center xl:items-baseline justify-center">
                  <Avatar className="w-40 h-40  shadow-[0_0_15px_#facc15] ">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col w-full lg:p-10 pt-10 ">
                    <div className=" text-center xl:text-start  ">
                      <p className="md:text-7xl text-5xl lg:text-8xl xl:text-9xl font-bold w-full  text-[#EE7319] drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] ">
                        Hi.I'm Mike
                      </p>
                      <p className=" md:text-7xl text-5xl lg:text-8xl xl:text-9xl font-bold w-full text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] ">
                        A Designer
                      </p>
                    </div>

                    <div className=" flex items-center gap-x-2 text-xl justify-center  xl:justify-start py-2 my-2 w-full font-semibold text-white">
                      <p className="font-bold">Athens, Greece</p>
                      <MdLocationSearching />
                    </div>
                    <div className="mt-4 text-white flex-col xl:flex-row flex items-center xl:justify-between">
                      <div>
                        <div className=" flex  gap-x-10 ">
                          <a href="https://linkedin.com/in/michalis-bafalukos-468338176">
                            <TfiLinkedin
                              color="#fef08a"
                              className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)]"
                            />
                          </a>
                          <a href="https://github.com/MBafalukos">
                            <FaGithub
                              color="#fef08a"
                              className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)]"
                            />
                          </a>
                          <a href="https://github.com/MBafalukos">
                            <FiDownload
                              color="#fef08a"
                              className="w-10 h-10 lg:w-16 lg:h-16 my-4 hover:scale-105 transition-all text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)]"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What I do */}
            <div className="">
              <div className=" xl:mb-40 md:mx-28 text-4xl ">
                <div className="border-b w-full justify-center flex border-zinc-700">
                  <p className=" text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] font-bold md:text-3xl text-4xl lg:text-6xl xl:text-7xl">
                    What I do
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex mx-10 py-10 max-w-screen">
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
                        <div className=" text-center text-white ">
                          Wordpress
                        </div>
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
                        <div className=" text-center text-white ">
                          Wordpress
                        </div>
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

              {/* Info Grid */}
              {/* <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-y-10 xl:pb-40 xl:px-10 xl:gap-x-5 py-5  ">
                <div>
                  <div className="font-medium ">
                    <div className="flex flex-col flex-wrap p-2 lg:px-10 md:mx-5  xl:rounded-md rounded-t-md hover:shadow-md transition-all duration-300 ">
                      <div className=" text-center py-1 ">
                        <div className=" justify-center text-center gap-x-2 flex flex-row xl:flex-col  py-1 ">
                          <h3 className="text-xl xl:text-3xl text-white ">
                            Frontend
                          </h3>
                          <h3 className="text-xl xl:text-3xl text-white ">
                            Development
                          </h3>
                        </div>
                        <div className="flex xl:hidden transition-all duration-300 font-medium">
                          <div className="flex w-full  ">
                            <p className="text-base mx-auto text-white ">
                              <span className="bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent">
                                Responsive
                              </span>{" "}
                              <span className="bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent">
                                ,fast
                              </span>{" "}
                              interfaces with a focus on clean, scalable code.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">
                    <div className=" flex flex-col flex-wrap p-2 lg:px-10 md:mx-5    xl:rounded-md hover:shadow-md transition-all duration-300  ">
                      <div className=" justify-center text-center gap-x-2 flex flex-row xl:flex-col  py-1 ">
                        <h3 className="text-xl xl:text-3xl text-white ">
                          UI/UX
                        </h3>
                        <h3 className="text-xl xl:text-3xl text-white ">
                          Design
                        </h3>
                      </div>
                      <div className="flex xl:hidden  place-items-end  transition-all duration-300 font-medium">
                        <div className="flex rounded-md w-full backdrop-blur-xl">
                          <p className="text-base  text-center mx-auto text-white ">
                            <span className="bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent">
                              Clean , Minimalistic
                            </span>{" "}
                            Layouts{" "}
                            <span className="text-white">
                              personalized for maximum user engagement
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">
                    <div className=" flex flex-col flex-wrap p-2 md:mx-5 lg:px-10 sm:rounded-b-md rounded-b-lg xl:rounded-md hover:shadow-md transition-all duration-300  ">
                      <div className=" text-center py-1 ">
                        <div className=" justify-center text-center gap-x-2 flex flex-row xl:flex-col  py-1 ">
                          <h3 className="text-xl xl:text-3xl text-white ">
                            Interaction
                          </h3>
                          <h3 className="text-xl xl:text-3xl text-white ">
                            Animation
                          </h3>
                        </div>
                        <div className="flex xl:hidden  transition-all duration-300 font-medium">
                          <div className="flex w-full  ">
                            <p className="text-base mx-auto text-white  backdrop-blur-xl ">
                              <span className="bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent">
                                Engaging
                              </span>{" "}
                              <span className="bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent">
                                , interactive
                              </span>{" "}
                              animations that enhance the user experience and
                              guide user flow.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative hidden xl:flex mx-auto transition-all duration-300 font-medium ">
                    <p className="text-base text-zinc-200 w-full  text-center ">
                      Responsive, fast interfaces with a focus on clean,
                      scalable code
                    </p>
                  </div>
                </div>
                <div>
                  <div className="hidden xl:flex mx-auto transition-all duration-300 font-medium ">
                    <p className="text-base text-center text-white w-full   ">
                      Clean , Minimalistic Layouts personalized for maximum user
                      engagement
                    </p>
                  </div>
                </div>
                <div>
                  <div className="hidden xl:flex transition-all duration-300 font-medium ">
                    <p className="text-base w-full  text-white text-center ">
                      Engaging, interactive animations that enhance the user
                      experience{" "}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            {/* Latest Projects */}
            <div className="">
              <p className="text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] font-bold md:text-3xl text-4xl lg:text-6xl xl:text-7xl text-center">
                Projects
              </p>
            </div>
            {/* Projects Mobile*/}
            <div className="flex lg:hidden items-center justify-center ">
              <Carousel className="w-full  max-w-xs py-10">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1 text-center ">
                      <Card className="bg-[url('./assets/Nasia1.jpeg')] bg-top bg-cover  ">
                        <CardContent className=" flex aspect-square text-white  flex-col items-center justify-center p-10"></CardContent>
                      </Card>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl text-white  font-semibold">
                          01.Digital Bio
                        </span>
                        <div className="flex gap-x-3 mt-2">
                          <Badge
                            variant="outline"
                            className=" text-white top-0 right-0"
                          >
                            nasia-adam.com
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1 text-center ">
                      <Card className="bg-[url('./assets/Nasia2.JPG')] bg-top bg-cover  ">
                        <CardContent className=" flex aspect-square text-white  flex-col items-center justify-center p-10"></CardContent>
                      </Card>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl text-white  font-semibold">
                          02.Branding
                        </span>
                        <div className="flex gap-x-3 mt-2">
                          <Badge
                            variant="outline"
                            className=" text-white top-0 right-0"
                          >
                            dotheworkintensive.com
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1 text-center ">
                      <Card className="bg-[url('./assets/kifisia_3-1.jpg')] bg-top bg-cover  ">
                        <CardContent className=" flex aspect-square text-white  flex-col items-center justify-center p-10"></CardContent>
                      </Card>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl text-white  font-semibold">
                          03.Branding
                        </span>
                        <div className="flex gap-x-3 mt-2">
                          <Badge
                            variant="outline"
                            className=" text-white top-0 right-0"
                          >
                            inter-tech.gr
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            {/* Projects Large Viewport*/}
            <div id="Projects" className=" h-fit hidden lg:block ">
              <div className="  w-full pt-10 lg:pt-46">
                <div className="flex lg:flex-row flex-col w-full  justify-between px-2 lg:pl-10 ">
                  <div className="w-full justify-center items-start gap-x-10  flex flex-col   border-b-white border-b-2 h-fit py-5 lg:py-16">
                    <div className="flex lg:flex-row flex-col gap-x-3">
                      <div className="flex items-center text-left text-2xl lg:text-3xl  text-white">
                        <BsDot />
                        <a href="https://nasia-adam.com/">Nasia-adam.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col w-full  justify-between px-2 lg:pl-10 ">
                  <div className="w-full justify-center items-start gap-x-10  flex flex-col   border-b-white border-b-2 h-fit py-5 lg:py-16">
                    <div className="flex lg:flex-row flex-col gap-x-3">
                      <div className="flex text-left text-2xl lg:text-3xl  text-white">
                        <BsDot />
                        <a href="https://dotheworkintensive.com/">
                          Dotheworkintensive.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col w-full  justify-between px-2 lg:pl-10 ">
                  <div className="w-full justify-center items-start gap-x-10  flex flex-col   h-fit py-5 lg:py-16">
                    <div className="flex lg:flex-row flex-col gap-x-3">
                      <div className="flex items-center  text-2xl lg:text-3xl  text-white">
                        <BsDot />
                        <a href="https://inter-tech.gr/">Inter-tech</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact*/}
            <div
              id="Contact"
              className="flex flex-col xl:flex-row items-center justify-center border-b   "
            >
              <div className="lg:text-start text-center  lg:px-28 pb-10  ">
                <p className="text-yellow-200 drop-shadow-[0_0_6px_rgba(255,0,150,0.8)] font-bold md:text-3xl text-4xl lg:text-6xl xl:text-7xl">
                  Let's Talk
                </p>
              </div>
              <div className="flex ">
                <span className="flex items-center justify-center w-10  h-16 lg:w-16 lg:h-16 bg-amber-400 rounded-lg me-4 shrink-0">
                  <svg
                    className="w-10 lg:w-16 h-16 text-primary"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <rect
                        id="bound"
                        x={0}
                        y={0}
                        width={24}
                        height={24}
                      />{" "}
                      <path
                        d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                        id="Combined-Shape"
                        fill="currentcolor"
                        opacity="0.3"
                      />{" "}
                      <path
                        d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                        id="Combined-Shape"
                        fill="currentcolor"
                      />{" "}
                    </g>{" "}
                  </svg>
                </span>
                <div className="grow pb-10">
                  <h5 className="text-lg lg:text-3xl text-amber-400">Email</h5>
                  <a
                    href="mailto:m.bafalukos@gmail.com"
                    className="text-white text-base lg:text-2xl"
                  >
                    m.bafalukos@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* Footer*/}
            <div className="text-center pb-10 ">
              <p className="text-gray-500/80 text-base">
                {new Date().getFullYear()}© All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
