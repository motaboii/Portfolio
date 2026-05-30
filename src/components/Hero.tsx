import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="relative z-0 w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-br from-blue-50 via-white to-purple-50 [background-image:radial-gradient(circle_at_30px_30px,rgba(0,0,0,0.2)_2px,transparent_1px)] bg-[length:60px_60px]" />
      {/* --- CONTENT WRAPPER --- */}
      <div className="w-full max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-semibold mb-4">
            Hey, I’m Pranjal
          </h1>

          <h2 className="text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={40}
              backSpeed={30}
              
              loop
            />
          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed opacity-80">
            I love building robust and scalable web applications using modern
            technologies like React, Next.js, Node.js and MongoDB.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={380}
            height={460}
            className="rounded-2xl shadow-xl animate-floating object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;
