import { Link } from "react-router-dom"
import { useState } from "react"

import background from "../assets/images/hero-banner.jpg"

export function Home() {
  return (
    <>
      <main className="relative">
      {/* HERO */}
        <section className="xl:padding-l wide:padding-r padding-b bg-hero bg-no-repeat bg-cover bg-center w-full h-auto xl:min-h-screen max-xl:py-40 bg-yellow-orange">
          <section className="w-full justify-center">
            <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
              <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
                <span className="text-black relative z-10 pr-10">
                  HIGH QUALITY
                </span>
                <br />
                <span className="text-black"> PET FOOD </span>
              </h1>
            </div>
            <p className="text-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Sale up to 60% off until August 10th!</p>
            <button>Shop Now</button>
          </section>
        </section>
      {/* SHOP BY PET */}
       
      {/* OFFERS */}
      {/* POPULAR CATEGORIES */}
      {/* PET PARENT FAVORITES */}
      {/* SERVICE QUALITY */}
      </main>


    </>
  )
}