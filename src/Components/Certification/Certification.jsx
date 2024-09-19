function Certification() {
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
      title: "JS",
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
      title: "Git and Github",
      img: "https://i.ibb.co.com/wdDx5Yb/git.jpg",
    },
    {
      title: "Full Stack Development",
      img: "https://i.ibb.co.com/r74nG4j/node-js.jpg",
    },
  ];
  return (
    <section className="pt-16 md:pt-32 bg-[#2f424d] px-[20px] md:px-[120px] lg:px-[120px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:mx-auto">
          <h1 className="text-[#98dad9] uppercase text-3xl font-extrabold text-center">
            My Certicate
          </h1>
          <p className="font-medium text-lg text-center text-white">
            Blogs that are loved by the people.I always love to write what i
            learn and sharing new things.
          </p>
        </div>
        <ul className="grid gap-5 mt-16 grid-cols-1 lg:grid-cols-3 ">
          {posts.map((items, key) => (
            <li className="w-full mx-auto" key={key}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-lg"
              />
              <h3 className="mt-5 text-lg text-white duration-150 group-hover:text-[#98dad9] font-semibold ">
                {items.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certification;
