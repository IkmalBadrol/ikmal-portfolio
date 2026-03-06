'use client'
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import LightRays from "@/components/LightRays";
import Lanyard from "@/components/Lanyard";
import ProfileCard from '@/components/ProfileCard'
import RotatingText from '@/components/RotatingText'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black font-sans selection:bg-zinc-800 text-white">
      {/* Full-width Hero Container */}
      <section className="relative flex min-h-[85vh] w-full flex-col justify-center overflow-hidden">
        {/* LightRays Background */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={2.0}
            rayLength={2.0}
            pulsating={true}
            noiseAmount={0.02}
            className="opacity-50"
          />
        </div>

        {/* Hero Content - Centered with max-width */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6 text-left pt-20 lg:pt-0">
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                Deep Dive into {" "}
                <RotatingText
                  texts={['Coding', 'AI', 'Design', 'Project Management', 'Leadership']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex font-extrabold"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-zinc-400">
                Building exceptional digital experiences with a focus on aesthetics,
                performance, and seamless interactions.
              </p>
            </div>

            {/* Lanyard Positioning */}
            <div className="flex justify-center lg:justify-end h-[600px] w-full">
              <ProfileCard
                name="Javi A. Torres"
                title="Software Engineer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/profile.jpg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl="/profile.jpg"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="flex w-full max-w-6xl flex-col items-center px-6 md:px-12">
        {/* Components Showcase */}
        <ShowcaseSection />
      </main>
    </div>
  );
}
