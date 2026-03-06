export type ComponentItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    tags: string[];
};

export const componentsData: ComponentItem[] = [
    {
        id: "lanyard-3d",
        title: "3D Lanyard",
        description: "An interactive 3D lanyard component with physics and webgl.",
        href: "/components/lanyard",
        tags: ["React Three Fiber", "Framer Motion", "Physics"],
    },
    {
        id: "light-rays",
        title: "Light Rays Background",
        description: "Dynamic and smooth ambient light rays using CSS gradients.",
        href: "/components/light-rays",
        tags: ["CSS", "React", "Animations"],
    },
    {
        id: "auth-form",
        title: "Auth Form",
        description: "A beautiful, accessible authentication form with validation.",
        href: "/components/auth-form",
        tags: ["TailwindCSS", "Forms"],
    },
];
