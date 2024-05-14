import { motion } from "framer-motion";
import { useState } from "react";

export const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  return (
    <section className="py-12 md:py-20 bg-white" id="courses">
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-red-600">Course Type</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SolutionProps {
  title: string;
  description: string[];
  index: number;
  open: number;
  setOpen: (index: number) => void;
}
const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: SolutionProps) => {
  const isOpen = index === open;

  function MobileOrDesktop() {
    if (window) {
      if (window?.innerWidth < 768) {
        return "1350px";
      } else {
        return "440px";
      }
    }
  }

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "100%" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-lg font-semibold w-fit bg-gradient-to-r from-red-600 to-black bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 text-black"
          >
            {description.map((q) => {
              return (
                <p key={q} className="mb-4">
                  {q}
                </p>
              );
            })}
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-red-600"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "Individuals",
    description: [
      `Individual lessons are tea meetings or coffee, in a relaxed and friendly atmosphere in 100% dedicated You and your needs. We check in the first lesson level, agree what is the purpose of the course (e.g. exam, for tourist purposes, Business English) and we set the details regarding lesson dates. As a supporter communicative method I will offer you a number exercises, directed to your needs, developing four main language skills: talking, reading, writing and listening comprehension. During each hour meetings you will learn up to 50 new expressions, you'll be able to use them correctly in a sentence and save without error. How it is possible? The course is intense – the atmosphere is loose but the goal is improvement your English and we focus on that. New material is presented in easily a way to absorb stimulating easy remembering. I use photos, pictures, sounds, recordings, videos, various objects, mnemotechnics ... All so that you can quickly through association he remembered new expressions in specific contexts.`,
      `These are not lessons where you will be carrying out the manual page on the side and did hundreds of tasks grammar. I use authentic sources, e.g. BBC news, movies and series, songs, slogans, English-language books, blogs, interviews with various entertainment programs e.t.c. To give you the language he actually uses today times the so-called. native speaker.`,
      `During the course you will receive: 60 min. lessons, materials individually developed and selected to Your needs and possibilities, homework, language trivia sent between lessons… And an hour of investment in yourself and your future.`,
    ],
  },
  {
    id: 2,
    title: "In a group of 2 to 4 people    ",
    description: [
      `Individual lessons are tea meetings or coffee, in a relaxed and friendly atmosphere in 100% dedicated You and your needs. We check in the first lesson level, agree what is the purpose of the course (e.g. exam, for tourist purposes, Business English) and we set the details regarding lesson dates. As a supporter communicative method I will offer you a number exercises, directed to your needs, developing four main language skills: talking, reading, writing and listening comprehension. During each hour meetings you will learn up to 50 new expressions, you'll be able to use them correctly in a sentence and save without error. How it is possible? The course is intense – the atmosphere is loose but the goal is improvement your English and we focus on that. New material is presented in easily a way to absorb stimulating easy remembering. I use photos, pictures, sounds, recordings, videos, various objects, mnemotechnics ... All so that you can quickly through association he remembered new expressions in specific contexts.`,
      `These are not lessons where you will be carrying out the manual page on the side and did hundreds of tasks grammar. I use authentic sources, e.g. BBC news, movies and series, songs, slogans, English-language books, blogs, interviews with various entertainment programs e.t.c. To give you the language he actually uses today times the so-called. native speaker.`,
      `During the course you will receive: 60 min. lessons, materials individually developed and selected to Your needs and possibilities, homework, language trivia sent between lessons… And an hour of investment in yourself and your future.`,
    ],
  },
  {
    id: 3,
    title: "Preparing for the exam",
    description: [
      `Individual lessons are tea meetings or coffee, in a relaxed and friendly atmosphere in 100% dedicated You and your needs. We check in the first lesson level, agree what is the purpose of the course (e.g. exam, for tourist purposes, Business English) and we set the details regarding lesson dates. As a supporter communicative method I will offer you a number exercises, directed to your needs, developing four main language skills: talking, reading, writing and listening comprehension. During each hour meetings you will learn up to 50 new expressions, you'll be able to use them correctly in a sentence and save without error. How it is possible? The course is intense – the atmosphere is loose but the goal is improvement your English and we focus on that. New material is presented in easily a way to absorb stimulating easy remembering. I use photos, pictures, sounds, recordings, videos, various objects, mnemotechnics ... All so that you can quickly through association he remembered new expressions in specific contexts.`,
      `These are not lessons where you will be carrying out the manual page on the side and did hundreds of tasks grammar. I use authentic sources, e.g. BBC news, movies and series, songs, slogans, English-language books, blogs, interviews with various entertainment programs e.t.c. To give you the language he actually uses today times the so-called. native speaker.`,
      `During the course you will receive: 60 min. lessons, materials individually developed and selected to Your needs and possibilities, homework, language trivia sent between lessons… And an hour of investment in yourself and your future.`,
    ],
  },
  {
    id: 4,
    title: "High School ",
    description: [
      `Individual lessons are tea meetings or coffee, in a relaxed and friendly atmosphere in 100% dedicated You and your needs. We check in the first lesson level, agree what is the purpose of the course (e.g. exam, for tourist purposes, Business English) and we set the details regarding lesson dates. As a supporter communicative method I will offer you a number exercises, directed to your needs, developing four main language skills: talking, reading, writing and listening comprehension. During each hour meetings you will learn up to 50 new expressions, you'll be able to use them correctly in a sentence and save without error. How it is possible? The course is intense – the atmosphere is loose but the goal is improvement your English and we focus on that. New material is presented in easily a way to absorb stimulating easy remembering. I use photos, pictures, sounds, recordings, videos, various objects, mnemotechnics ... All so that you can quickly through association he remembered new expressions in specific contexts.`,
      `These are not lessons where you will be carrying out the manual page on the side and did hundreds of tasks grammar. I use authentic sources, e.g. BBC news, movies and series, songs, slogans, English-language books, blogs, interviews with various entertainment programs e.t.c. To give you the language he actually uses today times the so-called. native speaker.`,
      `During the course you will receive: 60 min. lessons, materials individually developed and selected to Your needs and possibilities, homework, language trivia sent between lessons… And an hour of investment in yourself and your future.`,
    ],
  },
  {
    id: 5,
    title: "Enterprise",
    description: [
      `Individual lessons are tea meetings or coffee, in a relaxed and friendly atmosphere in 100% dedicated You and your needs. We check in the first lesson level, agree what is the purpose of the course (e.g. exam, for tourist purposes, Business English) and we set the details regarding lesson dates. As a supporter communicative method I will offer you a number exercises, directed to your needs, developing four main language skills: talking, reading, writing and listening comprehension. During each hour meetings you will learn up to 50 new expressions, you'll be able to use them correctly in a sentence and save without error. How it is possible? The course is intense – the atmosphere is loose but the goal is improvement your English and we focus on that. New material is presented in easily a way to absorb stimulating easy remembering. I use photos, pictures, sounds, recordings, videos, various objects, mnemotechnics ... All so that you can quickly through association he remembered new expressions in specific contexts.`,
      `These are not lessons where you will be carrying out the manual page on the side and did hundreds of tasks grammar. I use authentic sources, e.g. BBC news, movies and series, songs, slogans, English-language books, blogs, interviews with various entertainment programs e.t.c. To give you the language he actually uses today times the so-called. native speaker.`,
      `During the course you will receive: 60 min. lessons, materials individually developed and selected to Your needs and possibilities, homework, language trivia sent between lessons… And an hour of investment in yourself and your future.`,
    ],
  },
];
