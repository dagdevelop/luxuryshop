import React from 'react';
import { motion } from 'framer-motion';

const animationConfig = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
};

const Transition = ({children}) => {

    return (
        <motion.div
            variants={animationConfig}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    );
};

export default Transition;