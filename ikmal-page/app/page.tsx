'use client'
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import LightRays from "@/components/LightRays";
import Lanyard from "@/components/Lanyard";
import ProfileCard from '@/components/ProfileCard'
import RotatingText from '@/components/RotatingText'
import ScrollReveal from '@/components/ScrollReveal';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import GlassSurface from '@/components/GlassSurface'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black font-sans selection:bg-zinc-800 text-white">
      {/* Full-width Hero Container */}
      <section className="relative flex min-h-[85vh] w-full flex-col justify-center">
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
                I'm here to {" "}
                <RotatingText
                  texts={['Code', 'Build', 'Lead', 'Explore', 'Take Risk']}
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
                name="Ikmal Badrol"
                title="Software Engineer"
                handle="ikmalbadrol"
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
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={3}
              containerClassName="lg:col-span-2"
            >
              Software Engineer experienced in end-to-end mobile and web development. I specialize in microservices and cross-platform solutions to build secure, scalable applications. I am passionate about advancing Malaysia’s digital finance ecosystem and thrive in fast-paced environments tackling complex technical challenges.
            </ScrollReveal>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <ScrollStack useWindowScroll={true}>
            <ScrollStackItem
              itemClassName="bg-blue-600/10 border-blue-500/50"
              background={
                <div className="w-full h-full opacity-[0.08]">
                  <img
                    src="/utem.png"
                    alt="UTeM Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white-400">Bachelor Degree in Computer Science</h2>
                <h3 className="text-lg md:text-2xl font-bold text-blue-400">Universiti Teknikal Malaysia Melaka (UTeM)</h3>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  First Class Honours • CGPA 3.71
                </div>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  2021-2025
                </div>
              </div>
            </ScrollStackItem>
            <ScrollStackItem
              itemClassName="bg-purple-600/20 border-purple-500/50"
              background={
                <div className="w-full h-full opacity-[0.08]">
                  <img
                    src="/longbow.png"
                    alt="Longbow Solutions Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-white-400">Software Engineer Intern</h2>
                <h3 className="text-lg md:text-2xl font-bold text-green-400">Longbow Solutions Sdn. Bhd.</h3>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  Developed • Maintained • Designed • UAT • Deployed • Documented
                </div>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  2025-2026
                </div>
              </div>
            </ScrollStackItem>
            <ScrollStackItem
              itemClassName="bg-emerald-600/20 border-emerald-500/50"
              background={
                <div className="w-full h-full opacity-[0.08]">
                  <img
                    src="/sinegy_logo.png"
                    alt="Sinegy DAX Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-white-400">Full-Stack Developer • Full-time</h2>
                <h3 className="text-lg md:text-2xl font-bold text-yellow-400">SINEGY DAX Sdn. Bhd.</h3>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  Developed • Maintained • Designed • UAT • Deployed • Documented • Led
                </div>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  2026 - Present
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      <main className="flex w-full max-w-6xl flex-col items-center px-6 md:px-12">
        {/* Components Showcase */}
        <ShowcaseSection />
      </main>
    </div>
  );
}
