  import { motion } from 'framer-motion';

  const Logo = ({ width = 80, height = 80, innerWidth = 48, innerHeight = 48 }) => {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        className={`flex w-[${width}px] h-[${height}px] justify-center items-center rounded-[100%] bg-[linear-gradient(180deg,_#ECEFF3_0%,_#ECEFF3_0.01%,_rgba(236,_239,_243,_0)_100%)] [border-image-source:linear-gradient(180deg,_#DFE1E7_0%,_rgba(223,_225,_231,_0)_100%)]`}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0px 1px 2px 0px #0D0D120F",
              "0px 4px 8px 0px rgba(13, 13, 18, 0.2)",
              "0px 1px 2px 0px #0D0D120F"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`w-[${innerWidth}px] h-[${innerHeight}px] rounded-[100%] bg-white border-[#DFE1E7] shadow-[0px_1px_2px_0px_#0D0D120F] relative`}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#2D3748]"
          >
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  export default Logo;