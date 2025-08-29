"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [target, setTarget] = useState(0);
  const [message, setMessage] = useState(" Erick Koine");
  const [complete, setComplete] = useState(false);

  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const completeRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const already = sessionStorage.getItem("emk_preloader_shown");
    if (already) return; // skip entirely on repeat visits

    setVisible(true);
    sessionStorage.setItem("emk_preloader_shown", "1");

    const stages = [
      { progress: 15, message: "Dream " },
      { progress: 35, message: "Code " },
      { progress: 55, message: "Design " },
      { progress: 80, message: "Deploy " },
      { progress: 100, message: "Launch " },
    ];

    const stageTimers: number[] = [];

    // Advance target progress and update statuses over time
    stages.forEach((stage, idx) => {
      stageTimers.push(
        window.setTimeout(() => {
          setTarget(stage.progress);
          targetRef.current = stage.progress;
          setMessage(stage.message);
        }, (idx + 1) * 1200)
      );
    });

    // Smooth progress animation toward target
    const tick = window.setInterval(() => {
      setProgress((p) => {
        const delta = Math.max(0.4, (targetRef.current - p) * 0.12);
        const next = Math.min(targetRef.current, p + delta);
        progressRef.current = next;
        return Number(next.toFixed(2));
      });
    }, 60);

    // Complete and dismiss after reaching 100
    const doneWatch = window.setInterval(() => {
      if (!completeRef.current && targetRef.current >= 100 && progressRef.current >= 99.5) {
        completeRef.current = true;
        setComplete(true);
        window.setTimeout(() => setVisible(false), 900);
      }
    }, 120);

    return () => {
      stageTimers.forEach(clearTimeout);
      clearInterval(tick);
      clearInterval(doneWatch);
    };
  }, []);

  const R = 76;
  const C = 2 * Math.PI * R;
  const dashOffset = C - (C * progress) / 100;

  // star field positions (client-only; static per session)
  const stars = useMemo(
    () => Array.from({ length: 28 }).map((_) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${(Math.random() * 1.5).toFixed(2)}s`,
      duration: `${(1.8 + Math.random()).toFixed(2)}s`,
      size: `${(Math.random() * 3 + 1).toFixed(1)}px`,
      opacity: Math.random() * 0.5 + 0.3,
    })),
    []
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[radial-gradient(1000px_700px_at_50%_40%,_rgba(24,90,165,0.18),_transparent_60%)] bg-[#0a0a0a]"
          aria-live="polite"
          aria-busy={true}
          role="status"
        >
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-[min(92vw,420px)] rounded-full border border-white/10 bg-white/[0.03] p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
          >
            {/* Star field */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              {stars.map((s, idx) => (
                <span
                  key={idx}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: s.left,
                    top: s.top,
                    width: s.size,
                    height: s.size,
                    opacity: s.opacity,
                    filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
                    willChange: "opacity, transform",
                    animationName: "emk-pulse",
                    animationDuration: s.duration,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: s.delay,
                    animationDirection: "alternate",
                  }}
                />
              ))}
            </div>
            {/* Tech rings with center text */}
            <div className="relative grid place-items-center">
              <svg viewBox="0 0 200 200" className="mx-auto h-56 w-56">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Outer segmented ring */}
                <g transform="translate(100,100)">
                  <circle r="88" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                  <circle
                    r="88"
                    fill="none"
                    stroke="url(#gradBlue)"
                    strokeWidth="4"
                    strokeDasharray="60 40 30 50 20 60"
                    strokeDashoffset="0"
                    filter="url(#glow)"
                  >
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Middle progress ring */}
                <g transform="translate(100,100)">
                  <circle r="76" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                  <circle
                    r="76"
                    fill="none"
                    stroke="url(#gradGreen)"
                    strokeWidth="6"
                    strokeDasharray={`${C}`}
                    strokeDashoffset={`${dashOffset}`}
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                </g>

                {/* Inner animated ring */}
                <g transform="translate(100,100)">
                  <circle r="48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                  <circle
                    r="48"
                    fill="none"
                    stroke="url(#gradOrange)"
                    strokeWidth="4"
                    strokeDasharray="140 60"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  >
                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#185AA5" />
                    <stop offset="100%" stopColor="#01A677" />
                  </linearGradient>
                  <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#185AA5" />
                    <stop offset="100%" stopColor="#01A677" />
                  </linearGradient>
                  <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DD7531" />
                    <stop offset="100%" stopColor="#C7133B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center message */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-[0.15em] text-white/65"></div>
                  <div className="mt-1 max-w-[14rem] text-balance text-center text-sm font-medium text-white">
                    {message}
                  </div>
                  <div className="mt-2 text-[11px] text-white/60">{Math.floor(progress)}%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

