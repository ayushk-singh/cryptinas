import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                  Cryptinas-2k25
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg">
                  A National Level Technical Symposium organised by Department
                  of Computer Applications (UG), Hindusthan College of Arts and
                  Science, Coimbatore
                </p>

                <div className="mt-8 flex flex-col gap-4 text-lg sm:flex-row sm:gap-8 lg:justify-start justify-center">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Calendar className="size-5" />
                    <p>
                      <span className="font-semibold">When:</span> September 25,
                      2025
                    </p>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <MapPin className="size-5" />
                    <p>
                      <span className="font-semibold">Where:</span> HICAS,
                      Coimbatore
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <Link href="/register">
                      <span className="text-nowrap">Register Now</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden border border-black/10 lg:aspect-video dark:border-white/5">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src="/banner-video.mp4"
              ></video>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
