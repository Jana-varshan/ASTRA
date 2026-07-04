import { motion } from "framer-motion";
import styles from "./Orb.module.css";

const Orb = () => {
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
    <div className={styles.container}>
      {/* Outer Ring */}
      <motion.div
        className={styles.outerRing}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      />

      {/* Glow */}
      <div className={styles.glow} />

      {/* Core */}
      <motion.div
        className={styles.core}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
      />
    </div>

    </motion.div>
  );
};

export default Orb;