import { Link } from "react-router-dom";

const Blogs = () => {
  const posts = [
    {
      title: "Async and Await in JavaScript.",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. ",
      img: "https://i.ibb.co/xCtgt12/7bf581d2-0c9b-4904-83ea-2a7e36ab33af.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/async-and-await-in-javascript",
    },
    {
      title: "Flexbox vs Grid in CSS.",
      desc: "Have you ever had issues with replicating a particular user interface from a Figma design? ",
      img: "https://i.ibb.co/52JMcG1/2d928e8c-3bf9-4604-b8cf-0a26c72fba33.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/flexbox-vs-grid-in-css-which-should-you-use",
    },
    {
      title: "Improve Code Quality.",
      desc: "ES Lint is a linting tool for JavaScript code. The term “linting” refers to the process of analyzing code for potential errors,",
      img: "https://i.ibb.co/QmTkMp2/497e9e60-5d81-4bb5-8aea-5075ce01cd2b.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/improve-code-quality-with-es-lint-and-pr",
    },
    {
      title: "Optional Chaining in JavaScript.",
      desc: "JavaScript development often involves navigating through nested objects, which can be cumbersome and error-prone,",
      img: "https://i.ibb.co/GHmckZ5/84521afc-3fb2-464c-8bc9-919ac52abac4.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/optional-chaining-in-javascript",
    },
    {
      title: "Virtual DOM is More Powerful.",
      desc: "If you're into the world of web development, you've like heard of the Virtual DOM before",
      img: "https://i.ibb.co/TTYXWxY/1a2bc158-a15c-4946-b776-2c8fd643ff6d.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/virtual-dom",
    },
    {
      title: "Asynchronous Programming.",
      desc: "All programming languages have runtime engines that execute their code. In JavaScript,",
      img: "https://i.ibb.co/LtrVYZz/cc6ad44c-7cf1-42f4-b88a-557d10d2056c.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/asynchronous-programming-in-javascript",
    },
    {
      title: "JavaScript Map Method.",
      desc: "JavaScript's map method, introduced in ECMAScript 5, is a fundamental tool for array manipulation and transformation.",
      img: "https://i.ibb.co/6s6TLgc/5b0d3e7d-6b99-49bc-915a-a4a5c7ca7aa8.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/javascript-map-method",
    },
    {
      title: "Lazy loading.",
      desc: "Lazy loading means waiting to render content on a webpage until the user or the browser needs it. Lazy loading can help speed up webpage load times.",
      img: "https://i.ibb.co/7QQ3mWz/7ff202f9-dfae-45ea-9ee1-fca86b1be753.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/lazy-loading",
    },
    {
      title: "Spread and Rest Operators.",
      desc: "In modern JavaScript, the spread and rest operators are indispensable tools for simplifying array manipulation and function parameters.",
      img: "https://i.ibb.co/XXWbn7Z/9b393bd7-1a97-420c-b308-e97733506eaf.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/javascript-spread-and-rest-operat",
    },
    {
      title: " How DOM and Events Work?",
      desc: "In this in-depth tutorial, you'll learn all about the Document Object Model, or DOM for short.",
      img: "https://i.ibb.co/0fwYDLD/73260f21-e2e7-442e-aa48-e15fc4f0e8af.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/how-the-document-object-model-work",
    },
    {
      title: "JavaScript Filter Method.",
      desc: "JavaScript's filter method serves as a powerful tool for selectively extracting elements from arrays based on certain conditions.",
      img: "https://i.ibb.co/g6Ngr98/23858c3d-5483-47bd-86d4-c6a7f7cc6ec4.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/how-the-javascript-filter-method-works-explained-with-code-examples",
    },
    {
      title: "Arrow and Regular Functions.",
      desc: "In JavaScript, there are two main ways of writing functions. You can create functions using the regular function syntax.",
      img: "https://i.ibb.co/cDY5cjW/79c008c2-1c9e-4b93-bd5a-e055b1295b46.jpg",
      href: "https://mdshahamanpatwary.hashnode.dev/javascript-arrow-functions-vs-regular-functions",
    },
  ];
  return (
    <section className="pt-16 md:pt-32 bg-[#2f424d] px-[20px] md:px-[120px] lg:px-[120px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:mx-auto">
          <h1 className="text-[#98dad9] uppercase text-3xl font-extrabold text-center">
            Latest blog posts
          </h1>
          <p className="font-medium text-lg text-center text-white">
            Blogs that are loved by the people.I always love to write what i
            learn and sharing new things.
          </p>
        </div>
        <ul className="grid gap-5 mt-16 sm:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((items, key) => (
            <li
              className="w-full mx-auto group sm:max-w-sm border border-gray-900 rounded-lg"
              key={key}
            >
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-t-lg"
              />
              <div className="mt-3 space-y-2 px-5">
                <h3 className="text-lg text-white duration-150 group-hover:text-[#98dad9] font-semibold ">
                  {items.title}
                </h3>
                <p className="text-white text-sm">{items.desc}</p>
              </div>
              <div className="my-2 px-5">
                <Link
                  to={items.href}
                  className="text-sm my-2 text-[#98dad9] inline-flex items-start"
                >
                  <div className="text-[#2e424d] hover:bg-[#98dad9] px-3 py-2 rounded-lg shadow-lg mt-4 bg-white text-sm md:text-xl font-semibold">
                    See More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
