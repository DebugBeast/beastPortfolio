import React from "react";
import { SectionTitle } from "./ui/SectionTitle";

export function Leetcode() {
  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Leetcode Progress</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Leetcode Activity Image */}
          <div className="relative w-full h-[25rem] overflow-hidden">
            <iframe
              src="https://leetcard.jacoblin.cool/debugbeast?theme=dark&font=Inter&ext=activity&border=2&radius=10"
              title="Leetcode Activity"
              className="absolute w-full h-full shadow-md"
            ></iframe>
          </div>

          {/* Leetcode Journey Text */}
          <div>
            <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              My Leetcode Journey
            </h3>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
              I've recently started exploring LeetCode and competitive
              programming to build a strong foundation in Data Structures and
              Algorithms. I'm enjoying the process of solving problems that
              challenge my thinking and help me grow as a programmer. 
            </p>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
            Although I'm just beginning, I'm committed to learning consistently and
              gradually working through topics like arrays, trees, graphs, and
              dynamic programming to prepare myself for future technical
              interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
