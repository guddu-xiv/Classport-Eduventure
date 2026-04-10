/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Settings, Clock, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Background Subtle Gradient - Matched to Logo Colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 flex flex-col items-center text-center max-w-2xl w-full"
          >
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -10, 0] 
              }}
              transition={{ 
                delay: 0.2, 
                duration: 0.8, 
                ease: "easeOut",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="mb-12 relative group"
            >
              <div className="absolute -inset-8 bg-white/60 backdrop-blur-2xl rounded-[3rem] -z-10 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(0,82,204,0.06)] group-hover:-inset-10" />
              <img
                src="https://iili.io/BGIXexS.png"
                alt="Classport Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(255,171,0,0.5)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Scheduled Maintenance</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Elevating the <br />
              <span className="text-brand-blue italic font-medium">learning horizon.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 max-w-lg font-light"
            >
              Classport Eduventure is currently undergoing a digital transformation. We're building a more powerful platform for your educational journey.
            </motion.p>

            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
            >
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-5 text-left group hover:border-brand-blue/20 hover:shadow-[0_8px_30px_rgba(0,82,204,0.04)] transition-all duration-500">
                <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Status</h3>
                  <p className="text-sm text-slate-400 font-medium">Coming back shortly</p>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-5 text-left group hover:border-brand-gold/20 hover:shadow-[0_8px_30px_rgba(255,171,0,0.04)] transition-all duration-500">
                <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-inner">
                  <Settings size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Updates</h3>
                  <p className="text-sm text-slate-400 font-medium">Platform optimization & core upgrades</p>
                </div>
              </div>
            </motion.div>

            {/* Instagram Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Connect with us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/classport_eduventure?igsh=cTI1eHB2M2QybHdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-blue transition-all duration-500 active:scale-95 shadow-2xl shadow-slate-200 hover:shadow-brand-blue/20"
                >
                  <Instagram size={22} />
                  <span className="tracking-tight">Instagram</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <p className="text-[10px] text-slate-300 font-bold tracking-[0.4em] uppercase">
          &copy; 2026 Classport Eduventure Pvt Ltd
        </p>
      </motion.footer>
    </div>
  );
}
