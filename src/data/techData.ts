import type { ITech } from "../types/tech";

import reactLogo from "../assets/react.png";
import vueLogo from "../assets/vue.png";
import svelteLogo from "../assets/svelte.png";
import nextLogo from "../assets/next.png";
import nodeLogo from "../assets/node.png";
import postgresLogo from "../assets/postgres.png";
import redisLogo from "../assets/redis.png";
import jsLogo from "../assets/js.png";
import tsLogo from "../assets/typescript.png";
import javaLogo from "../assets/java.png";
import tailwindLogo from "../assets/tailwind.png";
import dockerLogo from "../assets/docker.png";

export const techData: ITech[] = [
  {
    id: 1,
    name: "React",
    logo: reactLogo,
    badge: "Popular",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Vue.js",
    logo: vueLogo,
    badge: "Versatile",
    badgeColor: "bg-green-50 text-green-600",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Svelte",
    logo: svelteLogo,
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-500",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Next.js",
    logo: nextLogo,
    badge: "",
    badgeColor: "",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Node.js",
    logo: nodeLogo,
    badge: "Standard",
    badgeColor: "bg-green-50 text-green-600",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 6,
    name: "PostgreSQL",
    logo: postgresLogo,
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Redis",
    logo: redisLogo,
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-500",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 8,
    name: "JavaScript",
    logo: jsLogo,
    badge: "Ubiquitous",
    badgeColor: "bg-yellow-50 text-yellow-600",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: 9,
    name: "TypeScript",
    logo: tsLogo,
    badge: "Essential",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 10,
    name: "Java",
    logo: javaLogo,
    badge: "Robust",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
  },
    {
    id: 11,
    name: "Tailwind CSS",
    logo: tailwindLogo,
    badge: "Modern",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A utility-first CSS framework for building custom user interfaces.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Docker",
    logo: dockerLogo,
    badge: "Containers",
    badgeColor: "bg-blue-50 text-blue-600",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
  },
];