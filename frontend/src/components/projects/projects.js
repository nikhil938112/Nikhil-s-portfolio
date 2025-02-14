import React from "react";

function Projects() {
  const projects = [
    {
      title: "SAVE EAT",
      content:
        "It emphasizes conserving and utilizing food efficiently to prevent waste and ensure sustainability. It promotes meal planning, proper storage, and thoughtful consumption habits. Technologies/Tools:HTML, CSS, MySQL.Outcome/Impact:Measurable reduction in food waste through strategies and awareness campaigns at the community or organizational level.",
      tools: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "REST APIs" },
      ],
      url: "",
    },
    
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      id="projects"
      className="pt-24 py-16 min-h-screen scroll-mt-24" // Proper offset for fixed navbar
    >
      <div className="m-6 p-4 flex flex-row justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-black flex items-center justify-center gap-2">
          PROJECTS
        </h1>
      </div>
      <div className="container -z-10 mx-auto px-4">
        <div className="grid grid-cols-1 z-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white z-0 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <h5 className="mb-2 text-2xl font-bold text-gray-900 hover:text-blue-600">
                    {project.title}
                  </h5>
                </a>
                <p className="text-gray-600 text-justify text-sm h-[135px] line-clamp-3">
                  {project.content}
                </p>
                <div className="mt-4">
                  <p className="flex flex-wrap gap-2">
                    {project.tools.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full"
                      >
                        {item.name}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    role="link"
                    onClick={() => openInNewTab(project.url)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
