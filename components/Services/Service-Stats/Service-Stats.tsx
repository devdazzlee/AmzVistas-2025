"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface ServiceStatsProps {
  stats: Stat[];
  backgroundColor?: string;
}

export default function ServiceStats({
  stats,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600",
}: ServiceStatsProps) {
  return (
    <div className={`${backgroundColor} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(stat.value.replace(/\D/g, ""));
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-2"
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </motion.div>
      <div className="text-white/80 text-sm md:text-base font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}

