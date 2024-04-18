import { motion } from "framer-motion";
import Image from "next/image";

// Utilise les mêmes variantes d'animation pour toutes les cartes
const cardVariants = {
  initial: { y: 10, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

// Définit le composant pour une carte de compétence
const SkillCard = ({ avatar, skill, level }) => (
  <motion.div
    variants={cardVariants}
    initial="initial"
    animate="enter"
    whileHover="hover"
    className="h-full w-full md:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center space-y-4"
  >
    <Image
      src={avatar}
      alt={skill}
      width={100}
      height={100}
      className="rounded-full"
    />
    <p className="text-sm text-center font-semibold text-neutral-500">
      {skill}
    </p>
    <span className={`px-3 py-1 rounded-full text-xs ${level.color}`}>
      {level.text}
    </span>
  </motion.div>
);

// Utilise le composant SkillCard pour chaque compétence
export const SkillCards = () => (
  <motion.div className="flex flex-1 w-full justify-center md:justify-between items-center space-x-0 md:space-x-2">
    <SkillCard
      avatar="/path/to/javascript-avatar.jpg"
      skill="Just code in Vanilla Javascript"
      level={{ text: "Delusional", color: "bg-red-500" }}
    />
    <SkillCard
      avatar="/path/to/tailwind-avatar.jpg"
      skill="Tailwind CSS is cool, you know"
      level={{ text: "Sensible", color: "bg-green-500" }}
    />
    <SkillCard
      avatar="/path/to/angular-avatar.jpg"
      skill="I love Angular, RSC, and Redux."
      level={{ text: "Helpless", color: "bg-yellow-500" }}
    />
  </motion.div>
);

// Ajoute ensuite <SkillCards /> à l'endroit approprié dans ton composant BentoGrid.
