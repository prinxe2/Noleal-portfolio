import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const sectionVariants = {
  initial: { opacity: 0, x: 80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function App() {
  const glowRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      if (glow) {
        glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    { type: 'image', src: 'src/proseso ng pag apply ng senior Id.png', title: 'Project 1' },
    { type: 'image', src: 'src/483830245_674494934934278_4890878550111956571_n.jpg', title: 'Project 2' },
    { type: 'image', src: 'src/website.png', title: 'Website Project  CSWD Office, City Hall Internship Developed a full-stack website during internship using both front-end and back-end technologies. The project involved creating user-friendly interfaces and implementing database functionality to streamline records management for the CSWD office.' },
    { type: 'image', src: 'src/codes.png', title: 'Guided by a senior developer who reviewed my code, I helped build a functional platform to manage and organize CSWD office data.' },
    { type: 'video', src: 'src/2cdc3597-4bb7-4f9c-b67d-3228ab9bf7d2.mp4', title: 'Anti Mendicancy Law Informational Video' },
    { type: 'video', src: 'src/antimendicancy law.mp4', title: 'Process of applying Social Pension' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f0f1b] to-[#0a0a23] text-white overflow-hidden font-mono scroll-smooth">
      <Navbar
        onNavClick={(section) => {
          switch (section) {
            case 'about':
              scrollToRef(aboutRef);
              break;
            case 'work':
              scrollToRef(workRef);
              break;
            case 'resume':
              scrollToRef(resumeRef);
              break;
            case 'contact':
              scrollToRef(contactRef);
              break;
            default:
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      <Hero />

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="min-h-screen px-10 pt-40 scroll-mt-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>

      {/* Work Section */}
      <motion.section
        ref={workRef}
        className="min-h-screen px-10 pt-40 scroll-mt-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Here's my recent work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all flex flex-col h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
              ) : (
                <video src={item.src} controls className="w-full h-auto object-cover" />
              )}
              <div className="p-4 text-sm text-white/70">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Resume Section */}
<motion.section
  ref={resumeRef}
  className="min-h-screen flex items-center justify-center pt-40 scroll-mt-28"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
>
  <motion.a
    href="src/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center gap-4 px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:-translate-y-1"
    whileHover={{ scale: 1.05 }}
  >
    {/* Icon */}
    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-cyan-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11V17M12 17H8m4 0h4M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M4 7l4-4h8l4 4"
        />
      </svg>
    </div>

    {/* Text */}
    <div className="text-left">
      <p className="text-cyan-300 font-semibold text-lg leading-tight">
        View My Resume
      </p>
      <p className="text-white/50 text-sm">PDF format, opens in new tab</p>
    </div>
  </motion.a>
</motion.section>
      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="min-h-screen flex flex-col items-center justify-center gap-6 pt-40 scroll-mt-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <p className="text-center text-lg">
          Email me at <span className="text-cyan-400">bsemc.nolealarjaym@gmail.com</span>
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bsemc.nolealarjaym@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition"
        >
          Open Gmail
        </a>
      </motion.section>

      {/* Static glowing blobs */}
      <div className="absolute top-[-200px] left-[10%] w-[500px] h-[500px] bg-purple-500 opacity-30 rounded-full blur-[180px] z-0"></div>
      <div className="absolute top-[50%] right-[5%] w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-[150px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[40%] w-[600px] h-[600px] bg-pink-400 opacity-10 rounded-full blur-[200px] z-0"></div>

      {/* Interactive mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl opacity-20 z-10 transition-transform duration-300"
        style={{ transform: 'translate(-9999px, -9999px)' }}
      ></div>

      {/* Floating background shapes */}
      <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-purple-500/20 blur-3xl rounded-full animate-float-slow z-0"></div>
      <div className="absolute top-[60%] right-[15%] w-32 h-32 bg-cyan-400/20 blur-2xl rounded-[40%] animate-float-slower z-0"></div>
    </div>
  );
}

export default App;
