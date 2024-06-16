import { RefreshIcon } from "@/compornents/Icons";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <>
      <Head>
        <title>Moving Box</title>
        <meta name="description" content="Moving Box" />
      </Head>

      <main className="pt-12 sm:pt-6">
        <h1 className="w-[80vw] pb-12 text-center mx-auto text-6xl font-extrabold sm:text-4xl sm:pb-3">
          Let's move the box with the bar!
        </h1>
        <div className="flex justify-center items-center p-5 sm:flex-col sm:gap-6">
          <div>
            <motion.div
              className="w-[200px] h-[200px] rounded-3xl border-[3px] border-dotted border-primary pointer-events-none"
              animate={{ x, y, rotate }}
              transition={{ type: "spring", stiffness: 300 }}
            ></motion.div>
          </div>

          <div className="flex flex-col pl-[50px]">
            <label className="flex items-center my-3">
              <code className="text-primary w-[100px]">x</code>
              <input
                type="range"
                min="-200"
                max="200"
                value="0"
                className="accent-[#6B92E5] cursor-pointer"
                onChange={(e) => setX(Number(e.target.value))}
              />
              <input
                type="number"
                min="-200"
                max="200"
                value={x}
                className="accent-[#6B92E5] border-0 border-b-2 border-dotted ml-3"
                onChange={(e) => setX(Number(e.target.value))}
              />
            </label>

            <label className="flex items-center my-3">
              <code className="text-primary w-[100px]">y</code>
              <input
                type="range"
                min="-200"
                max="200"
                value="0"
                className="accent-[#6B92E5] cursor-pointer"
                onChange={(e) => setY(Number(e.target.value))}
              />
              <input
                type="number"
                min="-200"
                max="200"
                value={y}
                className="accent-[#6B92E5] border-0 border-b-2 border-dotted ml-3"
                onChange={(e) => setY(Number(e.target.value))}
              />
            </label>
            <label className="flex items-center my-3">
              <code className="text-primary w-[100px]">rotate</code>
              <input
                type="range"
                min="-180"
                max="180"
                value={rotate}
                className="accent-[#6B92E5] cursor-pointer"
                onChange={(e) => setRotate(Number(e.target.value))}
              />
              <input
                type="number"
                min="-180"
                max="180"
                value={rotate}
                className="accent-[#6B92E5] border-0 border-b-2 border-dotted ml-3"
                onChange={(e) => setRotate(Number(e.target.value))}
              />
            </label>
            <RefreshIcon
              onClick={() => {
                setX(0);
                setY(0);
                setRotate(0);
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
