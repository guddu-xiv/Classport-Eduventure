import { motion, AnimatePresence } from "motion/react";
import { Settings, Clock, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // Fixed: overflow-y-auto allows scrolling on small screens, py-12 adds vertical space
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center p-6 overflow-y-auto relative py-12 md:py-20">
      
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 flex flex-col items-center text-center max-w-2xl w-full flex-1 justify-center"
          >
            {/* Logo Section - Adjusted for mobile */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
              transition={{ 
                delay: 0.2, duration: 0.8, ease: "easeOut",
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mb-8 md:mb-12 relative group"
            >
              <div className="absolute -inset-4 md:-inset-8 bg-white/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] -z-10 border border-white/40 shadow-sm" />
              <img
                src="https://iili.io/BGIXexS.png"
                alt="Classport Logo"
                className="w-24 h-24 md:w-40 md:h-40 object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 md:mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Scheduled Maintenance</span>
            </motion.div>

            {/* Main Heading - Responsive font sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-4 md:mb-6 leading-[1.1]"
            >
              Elevating the <br />
              <span className="text-blue-600 italic font-medium">learning horizon.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 max-w-lg font-light px-4"
            >
              Classport Eduventure is currently undergoing a digital transformation. We're building a more powerful platform for your educational journey.
            </motion.p>

            {/* Info Grid - Stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-12 md:mb-16"
            >
              <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">Status</h3>
                  <p className="text-xs md:text-sm text-slate-400">Coming back shortly</p>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-start gap-4 text-left">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-400">
                  <Settings size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">Updates</h3>
                  <p className="text-xs md:text-sm text-slate-400">Platform optimization</p>
                </div>
              </div>
            </motion.div>

            {/* Instagram Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col items-center gap-6 mb-12"
            >
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">Connect with us</p>
              <a
                href="https://www.instagram.com/classport_eduventure?igsh=cTI1eHB2M2QybHdn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all duration-500 active:scale-95 shadow-xl"
              >
                <Instagram size={20} />
                <span className="text-sm md:text-base tracking-tight">Instagram</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-500" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Footer - Not absolute anymore to prevent overlap */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="w-full text-center mt-auto pt-8"
      >
        <p className="text-[9px] md:text-[10px] text-slate-300 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
          &copy; 2025 Classport Eduventure Pvt Ltd
        </p>
      </motion.footer>
    </div>
  );
}
