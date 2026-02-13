"use client";

import { motion } from "framer-motion";

export function FloatingBadge({ label, className }: { label: string; className?: string }) {
  return (
    <motion.span
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
    >
      {label}
    </motion.span>
  );
}
