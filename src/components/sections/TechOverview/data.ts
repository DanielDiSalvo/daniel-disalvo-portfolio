import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const stats = [
  {
    key: "software",
    value: "9+",
  },
  {
    key: "react",
    value: "8+",
  },
  {
    key: "nextjs",
    value: "5+",
  },
  {
    key: "products",
    value: "Web + Mobile",
  },
] as const;

export const technologies = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "React Native",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
] as const;
