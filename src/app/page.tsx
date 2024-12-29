/** @format */
import Navbar from "@/component/Navbar";
import navBar from "@/component/Navbar";
import Image from "next/image";
import './globals.css';
//https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=8dada6c95dbfd13a2a32c6762a075ea9&cnt=56

export default function Home() {
  return (
  <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
  <Navbar />
  </div>
  );
}
