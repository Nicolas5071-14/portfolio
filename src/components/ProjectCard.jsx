// components/ProjectCard.jsx
// import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags, link }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="project-card"
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Voir le projet
            </a>
        </motion.div>
    );
}