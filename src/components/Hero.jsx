import { motion } from 'framer-motion';
import useTypingEffect from '../hooks/useTypingEffect';

export default function Hero() {
  const typingText = useTypingEffect(
    ['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'GAME DEVELOPER'],
    80,
    2000
  );

  return (
    <section
      id="home"
      className="relative z-10 h-screen px-4 text-center"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[60px] md:text-[90px] font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        >
          NOLEAL ARJAY 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-cyan-300 tracking-widest uppercase"
        >
          {typingText}
          <span className="animate-pulse text-white">_</span>
        </motion.p>
      </div>
    </section>
  );
}
