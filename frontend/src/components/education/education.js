import React from "react";

function Education() {
  const educationData = [
    {
      title: "Bachelor of Technology",
      institution: "Anurag University",
      duration: "2021-2025",
      status: "Pursuing",
      image: "https://www.excelbee.com/images/university/anurag-university-logo.png", // Replace with actual image URL
    },
    {
      title: "Intermediate",
      institution: "Narayana Jr. College",
      duration: "2019-2021",
      status: "Completed",
      image: "https://tse2.mm.bing.net/th?id=OIP.5d9NXL1WbGlLQNzxmjTz5wHaHa&pid=Api&P=0&h=180", // Replace with actual image URL
    },
  ];

  return (
    <div id="education" className="p-8 education-container min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-black flex items-center justify-center gap-2">
          <span>🎓</span> My Education
        </h1>
        <p className="text-gray-600">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col items-center gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center md:flex-row w-full max-w-[600px]"
          >
            <div className="w-full md:w-1/3 object-cover  h-52 md:h-auto">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 text-center">
              <h2 className="text-xl font-bold text-[#1a237e]">{edu.title}</h2>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>
              <span
                className={`mt-4 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  edu.status === "Pursuing"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {edu.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
