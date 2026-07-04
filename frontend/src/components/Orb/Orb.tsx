import { motion } from "framer-motion";
import styles from "./Orb.module.css";

import { useAstra } from "../../context/AstraContext";
import { OrbState } from "../../types/OrbState";

const Orb = () => {
  const { orbState } = useAstra();

  return (
    <motion.div
      className={styles.container}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer Ring */}
      <motion.div
        className={styles.outerRing}
        animate={{
          rotate: 360,
          scale:
            orbState === OrbState.LISTENING
              ? [1, 1.08, 1]
              : [1, 1.02, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      />

      {/* Glow */}
      <motion.div
        className={styles.glow}
        animate={{
          opacity:
            orbState === OrbState.LISTENING
              ? [0.5, 1, 0.5]
              : [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Core */}
      <motion.div
        className={styles.core}
        animate={{
          scale:
            orbState === OrbState.LISTENING
              ? [1, 1.25, 1]
              : [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Orb;