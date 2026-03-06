"use client";

import { motion } from "framer-motion";
import { componentsData } from "@/lib/data/components";
import { ShowcaseCard } from "@/components/ui/ShowcaseCard";

export function ShowcaseSection() {
    return (
        <section className="flex w-full flex-col py-24 sm:py-32">
            <div className="mb-16 flex flex-col gap-6 text-center sm:items-start sm:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
                >
                    Featured Components
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl text-lg leading-relaxed text-zinc-400 font-medium"
                >
                    A collection of carefully crafted components, from complex 3D
                    interactions to smooth background animations. Built with precision and
                    performance in mind.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {componentsData.map((component, i) => (
                    <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                    >
                        <ShowcaseCard item={component} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
