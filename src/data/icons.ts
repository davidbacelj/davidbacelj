// Icons from Simple Icons (CC0). Only tools David has actually worked with:
// his CV (Python, TensorFlow, C++, Linux, Git) and his current code (TypeScript, React).
import { siPython, siTensorflow, siCplusplus, siLinux, siGit, siTypescript, siReact, siX, siGithub } from "simple-icons";

export const STACK = [siPython, siTensorflow, siCplusplus, siTypescript, siReact, siLinux, siGit];

/** LinkedIn's "in" mark (Simple Icons no longer ships it), on the same 24px grid. */
export const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export const SOCIALS = [
  { label: "X", href: "https://x.com/davidbacelj", path: siX.path, hex: "000000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidbacelj/", path: linkedinPath, hex: "0A66C2" },
  { label: "GitHub", href: "https://github.com/davidbacelj", path: siGithub.path, hex: "181717" },
];
