import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 py-20 px-6 md:px-20 bg-[#121221]/40 rounded-xl backdrop-blur-sm text-gray-300 mt-10 mx-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6"> About Me</h2>
      <p className="max-w-3xl leading-relaxed text-sm md:text-base text-gray-400">
        Hello! I'm <span className="text-white font-semibold">Noleal Arjay M.</span>, a passionate front-end and back - end developer with a love for crafting clean, interactive interfaces.
        <br /><br />
        I specialize in React JS and Tailwind CSS,and delightful user experiences. I also have strong skills in Photoshop, Canva, UI/UX design, and stay updated with the latest design trends. Additionally, I’m experienced in creating infographics and informational videos, combining both design and communication to deliver impactful content.
      </p>
    </motion.section>
  );
}
