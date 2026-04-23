'use client'

import { FooterSection } from '@/components/sections';
import { ColorBends, DotGrid } from '@/components/canvas';
import { ProfileCard, LogoLoop, TextPressure, CardSwap, Card, BubbleMenu } from '@/components/effects';
import { RotatingText, ScrollReveal, ScrollStack, ScrollStackItem } from '@/components/animations';
// import { ChromaGrid, type ChromaItem } from '@/components/ui';
import { ShowcaseCard } from '@/components/ui';
import type { ComponentItem } from '@/lib/data/components';

const techLogos = [
  { src: "/assets/images/netcore_logo.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/assets/images/angular_logo.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/assets/images/flutter_logo.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/assets/images/laravel_logo.png", alt: "Company 4", href: "https://company4.com" },
  { src: "/assets/images/react_logo.png", alt: "Company 5", href: "https://company5.com" },
  { src: "/assets/images/java_logo.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/assets/images/docker_logo.png", alt: "Company 7", href: "https://company7.com" },
  { src: "/assets/images/firebase_logo.png", alt: "Company 8", href: "https://company8.com" },
  { src: "/assets/images/mssql_logo.png", alt: "Company 7", href: "https://company7.com" },
  { src: "/assets/images/mysql_logo.png", alt: "Company 8", href: "https://company8.com" },
  { src: "/assets/images/postgres_logo.png", alt: "Company 7", href: "https://company7.com" },
  { src: "/assets/images/redis_logo.png", alt: "Company 8", href: "https://company8.com" },
  { src: "/assets/images/node_js_logo.png", alt: "Company 7", href: "https://company7.com" },
];

/* const projects: ChromaItem[] = [
  {
    image: "/sinegy_logo.png",
    title: "SINEGY Digital Asset Exchange",
    subtitle: "Flutter • .NET Core • Laravel • React • Angular • Node • Docker • K8s",
    handle: "Apr 2025 – Present",
    borderColor: "#FACC15",
    gradient: "linear-gradient(145deg, #FACC15, #000)",
  },
  {
    image: "/longbow.png",
    title: "IOI City Mall OTS + CLUB IOI Loyalty",
    subtitle: ".NET Framework • WPF/MVVM • jQuery • REST APIs",
    handle: "Nov 2024 – Mar 2025",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(210deg, #8B5CF6, #000)",
  },
  {
    image: "/assets/images/flutter_logo.png",
    title: "Emergency Case Management + IoT",
    subtitle: "Flutter • Laravel • C++ • IoT • GPS",
    handle: "Mar – Sep 2024",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
  },
  {
    image: "/assets/images/laravel_logo.png",
    title: "JomPick — Parcel Management",
    subtitle: "Flutter • Laravel • REST APIs • 🏆 Platinum Award",
    handle: "Oct 2023 – Jan 2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(165deg, #10B981, #000)",
  },
]; */

const projects: ComponentItem[] = [
  {
    id: "sinegy-mobile",
    title: "SINEGY DAX — Mobile App",
    //description: "Production crypto exchange app on App Store & Google Play. Built end-to-end with Flutter/BLoC — real-time order book, wallets, trade execution, and live price feeds.",
    description: "Develop and maintain end to end cross-platforn mobile app alone after incomplete handover by 3rd party vendor as SINEGY DAX SDN BHD. Built with Flutter (BLoC), the app features real-time order book, wallet management, trade execution, and push notification and biometric access. Hanlde deployment to App Store and Playstore.",
    href: "https://exchange.sinegy.com/download",
    image: "/mobile_app.png",
    tags: ["Flutter", "BLoC", "Web Sockets", "REST APIs", "App Store Deployment"],
  },
  {
    id: "sinegy-web",
    title: "SINEGY DAX — Web Platform",
    description: "Develop and maintain crypto exchange platform at SINEGY DAX SDN BHD. Built with React JS, Angular and Microservices backend (.NET Core, Laravel, Go) deployed on Docker and Kubernetes. Led SIT and code review for the team.",
    href: "https://exchange.sinegy.com",
    image: "/web_app.png",
    tags: ["React", "Angular", ".NET Core", "Docker", "REST APIs", "Web Sockets", "Redis"],
  },
  {
    id: "ioi-city-mall",
    title: "IOI City Mall OTS + CLUB IOI",
    description: "Online ticketing system with SEO Module. Integrated CLUB IOI loyalty point redemption across web,POS and Self Service Kiosks at Longbow Solutions Sdn Bhd.",
    href: "#",
    image: "/ioi_mall.png",
    tags: [".NET Framework", "WPF/MVVM", "Bootstrap", "REST APIs"],
  },
  {
    id: "emergency-case",
    title: "Emergency Case Management + IoT",
    description: "Field emergency response system with IoT sensor integration, GPS tracking, and real-time case coordination via mobile and backend APIs.",
    href: "#",
    image : "/fyp.png",
    tags: ["Flutter (BLoC)", "Laravel", "C++", "IoT", "Google Maps"],
  },
  {
    id: "jompick",
    title: "JomPick — Parcel Management",
    description: "Smart parcel collection and delivery management platform for last-mile logistics. 🏆 Platinum Award — Workshop II Innovation Competition.",
    href: "https://youtu.be/CdXnIZmE_-I?feature=shared",
    image: "/jompick.png",
    tags: ["Flutter", "Laravel", "REST APIs", "Google Maps", "Exhibition Winner"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black font-sans selection:bg-zinc-800 text-white overflow-x-hidden">
      <BubbleMenu
        useFixedPosition
        menuBg="#0f0f0f"
        menuContentColor="#ffffff"
        items={[
          { label: 'Home',        href: '#hero',       rotation: -6, hoverStyles: { bgColor: '#5227FF', textColor: '#fff' } },
          { label: 'Experience',  href: '#experience', rotation:  6, hoverStyles: { bgColor: '#FACC15', textColor: '#000' } },
          { label: 'Projects',    href: '#projects',   rotation: -6, hoverStyles: { bgColor: '#67e8f9', textColor: '#000' } },
          { label: 'Contact',     href: '#contact',    rotation:  6, hoverStyles: { bgColor: '#10b981', textColor: '#fff' } },
        ]}
      />

      {/* Full-width Hero Container */}
      <section id="hero" className="flex w-full flex-col items-center">
        {/* Intro + ProfileCard with ColorBends scoped to this block only */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ColorBends
              rotation={90}
              speed={0.2}
              colors={["#5227FF", "#FF9FFC", "#7cff67"]}
              transparent
              autoRotate={0}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              parallax={0.5}
              noise={0.15}
              iterations={1}
              intensity={1.5}
              bandWidth={6}
            />
          </div>

          {/* Bottom fade to blend into page background */}
          <div className="absolute bottom-0 inset-x-0 h-100 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6 text-left">
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                  I’m building {" "}
                  <RotatingText
                    texts={["Mobile App", "Web App", "Microservices Backend", "Containerize Backend", "UI/UX", "Fintech Grade App"]}
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

              <div className="flex justify-center lg:justify-end h-[500px] md:h-[600px] w-full">
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
                  onContactClick={() => console.log("Contact clicked")}
                  behindGlowColor="rgba(125, 190, 255, 0.67)"
                  iconUrl="/profile.jpg"
                  behindGlowEnabled
                  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content below the hero block — no ColorBends */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={3}
          >
            Software Engineer experienced in end-to-end mobile and web development. I specialize in microservices and cross-platform solutions to build secure, scalable applications. I am passionate about advancing Malaysia’s digital finance ecosystem and thrive in fast-paced environments tackling complex technical challenges.
          </ScrollReveal>

          {/* Tech Stack Loop */}
          <div className="mt-4 py-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full" />
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={70}
              gap={80}
              scaleOnHover
              fadeOut
              fadeOutColor="black"
            />
          </div>
        </div>

        {/* My Journey — Timeline */}
        {/* <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 pt-24">
          <TextPressure
            text="My Journey"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-zinc-400 md:text-lg">
            From a curious Computer Science student to a Full Stack Engineer shipping
            production fintech — here’s how I got here.
          </p>

          <ScrollStack useWindowScroll={true}>
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
                <div className="mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  Apr 2025 – Present
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
                <div className="mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  Oct 2024 – Mar 2025
                </div>
              </div>
            </ScrollStackItem>
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
                <h2 className="text-3xl md:text-5xl font-bold text-white-400">Bachelor of Computer Science</h2>
                <h3 className="text-lg md:text-2xl font-bold text-blue-400">Universiti Teknikal Malaysia Melaka (UTeM)</h3>
                <div className="mt-4 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  First Class Honours • CGPA 3.71 • Dean’s List every semester
                </div>
                <div className="mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm md:text-base font-medium backdrop-blur-md self-start">
                  Sep 2021 – Mar 2025
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div> */}

        {/* Experiences — CardSwap */}
        <div id="experience" className="mx-auto w-full max-w-7xl px-6 md:px-12 pt-24">
          <TextPressure
            text="Experiences"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-zinc-100 md:text-4xl">
                What I actually <span className="text-cyan-300">ship</span>.
              </h3>
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                Production-grade fintech and e-commerce work. Flipping through the deck
                on the right — hover to pause, each card is a chapter from the resume.
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {["Flutter", "BLoC", ".NET", "Laravel", "React JS", "Node.js", "Angular", "WPF", "Docker", "Firebase", "SQL Server", "PostgreSQL", "MySQL", "Redis"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[280px] md:h-[520px] w-full">
              <CardSwap
                width={480}
                height={400}
                cardDistance={55}
                verticalDistance={65}
                delay={4500}
                pauseOnHover
                skewAmount={5}
                easing="elastic"
              >
                <Card customClass="bg-gradient-to-br from-yellow-500/20 via-black to-black border-yellow-400/40 p-6 text-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-yellow-300/90">
                        Apr 2025 – Present
                      </p>
                      <h4 className="mt-1 text-xl font-bold">SINEGY DAX</h4>
                      <p className="text-sm text-zinc-400">Full Stack Developer</p>
                    </div>
                    <img src="/sinegy_logo.png" alt="SINEGY" className="h-12 w-12 rounded-lg object-contain" />
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-200">
                    <li>• Led end-to-end Flutter/BLoC exchange app → App Store + Google Play.</li>
                    <li>• Built .NET Core, Laravel, Node.js microservices on Docker + K8s.</li>
                    <li>• Represented SINEGY at PDEC 2025, Re-Intro to Bitcoin, Monie Fest 2026.</li>
                    <li>• Led System Internal Testing (SIT) and code review for the team.</li>
                    <li>• UX research with marketing to cut friction in key trading flows.</li>
                  </ul>
                </Card>

                <Card customClass="bg-gradient-to-br from-purple-500/20 via-black to-black border-purple-400/40 p-6 text-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-purple-300/90">
                        Oct 2024 – Mar 2025
                      </p>
                      <h4 className="mt-1 text-xl font-bold">Longbow Solutions</h4>
                      <p className="text-sm text-zinc-400">Software Engineer Intern</p>
                    </div>
                    <img src="/longbow.png" alt="Longbow" className="h-12 w-12 rounded-lg object-contain" />
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-200">
                    <li>• Built SEO Config Module for IOI City Mall OTS (TikTok/Meta Pixel, GTM).</li>
                    <li>• Shipped IOI CMS / OTS / OWG CMS modules in .NET MVC + modern JS.</li>
                    <li>• Integrated CLUB IOI loyalty QR (earn/redeem/cancel) across web + POS (WPF/MVVM).</li>
                    <li>• On-site UAT for Self-Service Kiosks and POS pre-go-live.</li>
                  </ul>
                </Card>

                <Card customClass="bg-gradient-to-br from-blue-500/20 via-black to-black border-blue-400/40 p-6 text-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300/90">
                        Sep 2021 – Mar 2025
                      </p>
                      <h4 className="mt-1 text-xl font-bold">UTeM</h4>
                      <p className="text-sm text-zinc-400">B.Cs. Software Development</p>
                    </div>
                    <img src="/utem.png" alt="UTeM" className="h-12 w-12 rounded-lg object-contain" />
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-200">
                    <li>• CGPA 3.71 • First Class Honours • Dean’s List every semester.</li>
                    <li>• Core: Software Engineering, DS&amp;A, Databases, Mobile Dev, Network Security.</li>
                    <li>• 🏆 Platinum Award — Workshop II Innovation Competition (JomPick).</li>
                    <li>• 4th Place — FTMK Code Arena Programming Competition.</li>
                  </ul>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="relative w-full pt-32 pb-16 overflow-hidden">
          {/* DotField background */}
          <div className="absolute inset-0 z-0">
            <DotGrid
              dotSize={4}
              gap={28}
              baseColor="#27272a"
              activeColor="#67e8f9"
              proximity={180}
              speedTrigger={80}
              shockRadius={260}
              shockStrength={4}
              resistance={800}
              returnDuration={1.5}
            />
          </div>
          {/* Top fade */}
          <div className="absolute top-0 inset-x-0 h-32 z-10 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-12">
            <TextPressure
              text="Projects"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-zinc-400 md:text-lg">
              Shipped products, research builds, and a few competition winners.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ShowcaseCard key={project.id} item={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
