import React from "react"
import { FaSun } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Searchboc from "./Searchboc";

type Props = {};

export default function Navbar ({}: Props){
    return(
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
            
                <div className=" items-center justify-center gap-2 flex">
                <h2 className="text-gray-500 text-3xl">Weather</h2>
                <FaSun className="text-3xl mt-1 text-yellow-300" />
                </div>
                <section className="flex gap-2 items-center">
                <FaLocationDot className="text-2xl text-gray-400 hover:opacity-50 cursor-pointer"/>
                <FaLocationCrosshairs className="text-2xl text-black hover:opacity-50 cursor-pointer" />
                <p className="text-opacity-80 text-sm text-slate-700">India</p>
                <div>{/*Search Box */}
                    <Searchboc />
                </div>
                </section>
            </div>
        </nav>
    );
}