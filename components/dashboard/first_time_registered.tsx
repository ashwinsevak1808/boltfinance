import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      className="flex w-[120px] justify-center items-center h-[120px] rounded-[100%] bg-[linear-gradient(180deg,_#ECEFF3_0%,_#ECEFF3_0.01%,_rgba(236,_239,_243,_0)_100%)] [border-image-source:linear-gradient(180deg,_#DFE1E7_0%,_rgba(223,_225,_231,_0)_100%)]"
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
        className="w-[72px] h-[72px] rounded-[100%] bg-white border-[#DFE1E7] shadow-[0px_1px_2px_0px_#0D0D120F] relative flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#2D3748]"
        >
          FF
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

type FirstTimeCongratsProps = {
  onComplete: () => void; 
};

const FirstTimeCongrats : React.FC<FirstTimeCongratsProps> =({ onComplete }) => {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          onComplete();
          router.push('/dashboard');
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete, router]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          delay: 0.2
        }}
        className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center relative overflow-hidden"
      >
        {/* Background Gradient Decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"
        />

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1
          }}
          className="flex justify-center mb-6"
        >
          <Logo />
        </motion.div>

        {/* Celebration Confetti-like Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 1, 
                y: '100vh', 
                x: `${Math.random() * 100}%`,
                rotate: Math.random() * 360
              }}
              animate={{ 
                opacity: [1, 0.7, 0],
                y: [0, `-${Math.random() * 200 + 100}vh`],
                rotate: Math.random() * 720
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 0.5,
                repeat: 0
              }}
              className="absolute w-2 h-2 bg-primary/50 rounded-full"
            />
          ))}
        </motion.div>

        {/* Congratulations Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-gray-800"
        >
          Welcome to FinanceFlow!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-muted-foreground mb-6"
        >
          You&#39;ve successfully created your account. Get ready to take control of your finances!
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          Redirecting to dashboard in {countdown} seconds...
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          initial={{ width: '0%' }}
          animate={{ width: `${(10 - countdown) * 10}%` }}
          transition={{ duration: 1, ease: "linear" }}
          className="h-1 bg-primary mt-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default FirstTimeCongrats;