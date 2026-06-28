import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Zap } from "lucide-react";

const DetailModal = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <>
          <style>{`
            .modal-scroll::-webkit-scrollbar { width: 4px; }
            .modal-scroll::-webkit-scrollbar-track { background: transparent; }
            .modal-scroll::-webkit-scrollbar-thumb { background: #bb7f14; border-radius: 10px; }
            .modal-scroll::-webkit-scrollbar-thumb:hover { background: #04388b; }
          `}</style>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="modal-scroll bg-[#1F2E4F] rounded-2xl overflow-hidden overflow-y-auto w-full max-w-lg border border-[#bb7f14]/30 relative max-h-[80vh]"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-[#04388b] hover:text-[#bb7f14] flex items-center justify-center transition-colors duration-200"
              >
                <X size={15} />
              </button>

              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#bb7f14] to-[#04388b]" />

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#bb7f14]">
                  {item.title}
                </h3>

                {/* Overview */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-semibold">
                    Overview
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {item.overview}
                  </p>
                </div>

                <div className="border-t border-white/10" />

                {/* Highlights + Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-semibold">
                      Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle
                            size={12}
                            className="text-[#bb7f14] mt-0.5 shrink-0"
                          />
                          <span className="text-white/65 text-xs">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-semibold">
                      Benefits
                    </p>
                    <ul className="space-y-1.5">
                      {item.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Zap
                            size={12}
                            className="text-[#bb7f14] mt-0.5 shrink-0"
                          />
                          <span className="text-white/65 text-xs">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
