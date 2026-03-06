"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentItem } from "@/lib/data/components";

export function ShowcaseCard({ item }: { item: ComponentItem }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-sm transition-all hover:shadow-xl min-h-[300px]"
        >
            <div className="z-10 flex flex-col gap-4">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-50">
                    {item.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-400 font-medium">
                    {item.description}
                </p>
            </div>

            <div className="z-10 mt-8 flex items-end justify-between">
                <div className="flex flex-col gap-3 flex-1 mr-4">
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-zinc-800 px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <Link
                    href={item.href}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950 transition-transform duration-300 ease-out hover:scale-110 hover:bg-zinc-200 active:scale-95"
                    aria-label={`View ${item.title}`}
                >
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            {/* Decorative gradient background on hover */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

            {/* Subtle border glow effect */}
            <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-br from-zinc-700 to-transparent opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
    );
}
