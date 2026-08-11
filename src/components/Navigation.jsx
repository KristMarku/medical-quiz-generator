import "../styles/Navigation.css";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ currentNode, history, handleClick, goBack, direction }) {
  return (
    <div className="navigation">
      <button
        className="backButton"
        disabled={history.length === 0}
        onClick={goBack}
      >
        ← Back
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          className="navList"
          key={currentNode.id}
          initial={{
            x: direction === "forward" ? 250 : -250,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: direction === "forward" ? -250 : 250,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {currentNode.children?.map((item) => (
            <button
              key={item.id}
              className={`navButton ${item.type === "lesson" ? "topicButton" : ""}`}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default Navigation;
