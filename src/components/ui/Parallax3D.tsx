import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Parallax3DProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  rotateX?: boolean;
  rotateY?: boolean;
  scale?: boolean;
  opacity?: boolean;
}

export const Parallax3D = ({
  children,
  className = "",
  speed = 0.5,
  rotateX = false,
  rotateY = false,
  scale = false,
  opacity = false,
}: Parallax3DProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateXValue = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const rotateYValue = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: smoothY,
        rotateX: rotateX ? rotateXValue : 0,
        rotateY: rotateY ? rotateYValue : 0,
        scale: scale ? scaleValue : 1,
        opacity: opacity ? opacityValue : 1,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingLayerProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export const FloatingLayer = ({
  children,
  className = "",
  depth = 1,
}: FloatingLayerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * depth, -50 * depth]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface Scroll3DSectionProps {
  children: ReactNode;
  className?: string;
}

export const Scroll3DSection = ({
  children,
  className = "",
}: Scroll3DSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);
  
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: smoothRotateX,
        scale: smoothScale,
        opacity,
        transformPerspective: 1200,
        transformOrigin: "center center",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface DepthCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const DepthCard = ({
  children,
  className = "",
  index = 0,
}: DepthCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [30 + index * 15, -30 - index * 15]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? 5 : -5, 0, index % 2 === 0 ? -5 : 5]
  );
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{
        y: smoothY,
        rotateY: smoothRotateY,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
