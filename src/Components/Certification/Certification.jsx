import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certification() {
  const [selectedImage, setSelectedImage] = useState(null);

  const posts = [
    {
      title: "HTML",
      img: "https://i.ibb.co.com/bBmBzjZ/Html.jpg",
    },
    {
      title: "CSS",
      img: "https://i.ibb.co.com/kQLPQNk/Css.jpg",
    },
    {
      title: "JavaScript",
      img: "https://i.ibb.co.com/Dt8Dk4h/Js.jpg",
    },
    {
      title: "React Js",
      img: "https://i.ibb.co.com/BjGsG7q/react.jpg",
    },
    {
      title: "Frontend Development",
      img: "https://i.ibb.co.com/cc1NX0T/HTML-CSS-JS-REACT-FULL-COURSE.jpg",
    },
    {
      title: "Git and GitHub",
      img: "https://i.ibb.co.com/wdDx5Yb/git.jpg",
    },
    {
      title: "Full Stack Development",
      img: "https://i.ibb.co.com/r74nG4j/node-js.jpg",
    },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className="py-5 bg-[#2f424d] px-6 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#98dad9] uppercase text-3xl font-extrabold">
            My Certificates
          </h1>
          <p className="font-medium text-lg text-white max-w-2xl mx-auto">
            Explore the certifications I have achieved through my journey in web
            development. I love sharing my knowledge and writing about new
            learnings.
          </p>
        </motion.div>
        <motion.ul
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {posts.map((item, index) => (
            <motion.li
              className="group"
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                onClick={() => handleImageClick(item.img)}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white text-center transition-colors duration-200 group-hover:text-[#98dad9]">
                {item.title}
              </h3>
            </motion.li>
          ))}
        </motion.ul>

        {/* Modal Animation */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div className="relative max-w-3xl w-full p-4">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 focus:outline-none hover:bg-gray-600"
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Certification;
