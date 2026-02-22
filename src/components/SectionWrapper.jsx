import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, style }) => {
    return (
        <motion.section
            id={id}
            className={className}
            style={style}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
