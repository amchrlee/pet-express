import { Link } from "react-router-dom"
import { useState } from "react"

import { arrowRight } from "../assets/icons"
import { dogImg, catImg, bunnyImg, birdImg, fishImg } from "../assets/images"
import Button from "../components/button"

export function Home() {
  return (
    <>
      <main className="relative">
      {/* HERO */}
        <section className="xl:padding-l wide:padding-r padding-b bg-hero bg-no-repeat bg-cover bg-center w-full h-auto bg-yellow-orange">
          <div className="w-full min-h-screen gap-10 max-xl:padding-x max-container">
            <div className="relative xl:w-2/5 w-full pt-28">
              <h1 className="mt-10 font-bangers text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
                <span className="text-white relative">
                  HIGH QUALITY
                </span>
                <br />
                <span className="text-white mt-3"> PET FOOD </span>
              </h1>
            </div>
            <p className="font-nunitoSans text-white text-2xl leading-8 mt-6 mb-14 sm:max-w-md">Sale up to 60% off until August 10th!</p>
            <Button label="Shop Now" iconURL={arrowRight} />
          </div>
        </section>
      {/* SHOP BY PET */}
        <section className="w-full max-container">
          <h2 className="text-3xl font-nunitoSans font-bold max-xl:padding-x flex justify-center pt-10 pb-5">Shop by Pet</h2>
          <div>
            <ul className="flex flex-row justify-center items-center gap-10">
              <li>
                <a href="" className="flex flex-col justify-center items-center">
                  <img className="rounded-full object-cover w-[200px] h-[200px]" src={dogImg} alt="dog image" />
                  <div className="font-nunitoSans">Dog</div>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col justify-center items-center">
                  <img className="rounded-full object-cover w-[200px] h-[200px]" src={catImg} alt="cat image" />
                  <div className="font-nunitoSans">Cat</div>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col justify-center items-center">
                  <img className="rounded-full object-cover w-[200px] h-[200px]" src={bunnyImg} alt="bunny image" />
                  <div className="font-nunitoSans">Bunny</div>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col justify-center items-center">
                  <img className="rounded-full object-cover w-[200px] h-[200px]" src={birdImg} alt="bird image" />
                  <div className="font-nunitoSans">Bird</div>
                </a>
              </li>
              <li>
                <a href="" className="flex flex-col justify-center items-center">
                  <img className="rounded-full object-cover w-[200px] h-[200px]" src={fishImg} alt="fish image" />
                  <div className="font-nunitoSans">Fish</div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      {/* OFFERS */}
      {/* POPULAR CATEGORIES */}
      {/* PET PARENT FAVORITES */}
      {/* SERVICE QUALITY */}
      </main>


    </>
  )
}