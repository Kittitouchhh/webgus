import HeaderGus from "./HeaderGus";
import Header from "../components/header";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { GiSkills } from "react-icons/gi";

export default function Home() {
    return (
        <div>
            <HeaderGus />
            <Header />
            <div className="w-full flex justify-center">
                <div className="w-1/1 md:w-1/2 lg:w-1/3 bg-black justify-items-center text-center mt-1 p-3 ">
                    <p className="text-blue-300 text-center text-[22px] lg:text-[30px] ">สวัสดีครับ ผมชื่อ กัส </p>
                    <p className="text-blue-200 text-center lg:text-[20px] ">กำลังพัฒนาตัวเองเป็น Web Developer มือ1 </p>
                    <p className="text-blue-200 text-center lg:text-[20px] ">ส่วนอีกมือ1กินขนม</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 ">
                <div className="px-3 pb-3  m-auto w-[90%] bg-black text-white text-center ">
                    <p className="m-auto text-[30px] my-2 lg:text-[50px] ">Hard-Skills</p>
                    <div className="flex ">
                        <AiOutlineDesktop className="lg:text-[80px] mt-1 text-yellow-300 text-[40px]" />
                        <div className="text-left lg:text-[30px]">
                            <p className="text-[20px] ml-2 lg:text-[30px]  ">Front-End Development</p>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-purple-300 hover:text-[20px] cursor-pointer hover:text-purple-500 transition duration-300 ">React.js</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">Tailwind CSS</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-orange-300 hover:text-[20px] cursor-pointer hover:text-orange-500 transition duration-300 ">HTML</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">CSS</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-yellow-300 hover:text-[20px] cursor-pointer hover:text-yellow-500 transition duration-300">JavaScript</span>
                        </div>
                    </div>
                    <div className="flex mt-3 ">
                        <FaLaptopCode className="mt-1 text-gray-300  text-[40px] lg:text-[80px]" />
                        <div className="text-left">
                            <p className="text-[20px] lg:text-[30px] ml-2  ">Back-End Development</p>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-purple-300 hover:text-[20px] cursor-pointer hover:text-purple-500 transition duration-300 ">Python</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">Node.js</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-yellow-300 hover:text-[20px] cursor-pointer hover:text-yellow-500 transition duration-300">JavaScript</span>
                        </div>
                    </div>
                    <div className="flex mt-3  ">
                        <ImDatabase className="mt-1 text-blue-800 text-[30px] ml-1 lg:text-[80px]" />
                        <div className="text-left">
                            <p className="text-[20px] lg:text-[30px] ml-2  ">Databases</p>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-purple-300 hover:text-[20px] cursor-pointer hover:text-purple-500 transition duration-300 ">PostgreSQL</span>
                            <span className="text-[15px] lg:text-[20px]  ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">Firebase</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-orange-300 hover:text-[20px] cursor-pointer hover:text-orange-500 transition duration-300 ">MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="mt-5 md:mt-0 px-3 pb-3  m-auto w-[90%] lg:w-[70%]  bg-black text-white text-center ">
                    <div className="flex justify-center ">
                        <GiSkills className="mt-4 mr-2 text-blue-500 text-[30px] lg:text-[50px] lg:mt-6" />
                        <span className=" text-[30px] my-2 lg:text-[50px]  ">SOFT-Skills</span>
                    </div>
                    <div className="">
                        <div className="flex w-full flex-wrap ">
                            <span className="text-[15px] lg:text-[20px] ml-2 text-purple-300 hover:text-[20px] cursor-pointer hover:text-purple-500 transition duration-300 ">Teamwork</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">Problem Solving</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-orange-300 hover:text-[20px] cursor-pointer hover:text-orange-500 transition duration-300 ">Analytical Thinking</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-blue-300 hover:text-[20px] cursor-pointer hover:text-blue-500 transition duration-300 ">Flexibility</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-yellow-300 hover:text-[20px] cursor-pointer hover:text-yellow-500 transition duration-300">Communication</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-yellow-300 hover:text-[20px] cursor-pointer hover:text-yellow-500 transition duration-300">Time Management</span>
                            <span className="text-[15px] lg:text-[20px] ml-2 text-yellow-300 hover:text-[20px] cursor-pointer hover:text-yellow-500 transition duration-300">Creativity</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
