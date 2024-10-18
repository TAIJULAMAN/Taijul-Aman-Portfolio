import { useState } from "react";

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

  return (
    <section className="pt-16 md:pt-32 bg-[#2f424d] px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-[#98dad9] uppercase text-3xl font-extrabold">
            My Certificates
          </h1>
          <p className="font-medium text-lg text-white max-w-2xl mx-auto">
            Explore the certifications I have achieved through my journey in web
            development. I love sharing my knowledge and writing about new
            learnings.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, index) => (
            <li className="group" key={index}>
              <div
                onClick={() => handleImageClick(item.img)}
                className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105 cursor-pointer"
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
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
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
          </div>
        )}
      </div>
    </section>
  );
}

export default Certification;
