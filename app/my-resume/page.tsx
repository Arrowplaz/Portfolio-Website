import React from 'react';

const MyResume: React.FC = () => {
  return (
    <div className="max-w-[80%] mx-auto text-gray-800 dark:text-white py-8 pt-24 scroll-padding-top-24"> {/* Adjusted top padding */}
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Abhiroop Reddy Nagireddygari</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Computer Science & Economics | Bowdoin College</p>
        <p className="text-lg text-gray-600 dark:text-gray-400">Seeking Full-Time Software Engineering / Data Science Roles</p>
      </header>

      {/* Profile Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <p className="text-lg leading-relaxed">
          Passionate software engineer and data science enthusiast with a background in physics, now focusing on AI, machine learning, and backend development. Adept at building innovative solutions, from computer vision models for sports analysis to robust full-stack applications.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium">Software Engineering Intern</h3>
          <p className="text-gray-600 dark:text-gray-400">Company Name | Location | Duration</p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Worked on developing backend services for high-frequency trading strategies.</li>
            <li>Implemented scalable and efficient APIs using Node.js and Express.</li>
            <li>Collaborated with the data science team to integrate ML models into applications.</li>
          </ul>
        </div>
        {/* Add more experience sections as needed */}
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-medium">Bowdoin College</h3>
          <p className="text-gray-600 dark:text-gray-400">Bachelor of Arts in Computer Science and Economics | Expected May 2025</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <h4 className="font-medium">Programming Languages</h4>
            <p>Python, JavaScript, TypeScript, SQL</p>
          </div>
          <div>
            <h4 className="font-medium">Frameworks & Libraries</h4>
            <p>React, Next.js, Express, PyTorch, TensorFlow</p>
          </div>
          <div>
            <h4 className="font-medium">Tools</h4>
            <p>Git, Docker, AWS, Firebase</p>
          </div>
          <div>
            <h4 className="font-medium">Data Science & ML</h4>
            <p>Pandas, Scikit-Learn, YOLO, Computer Vision</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium">Squash Analysis System</h3>
          <p className="text-gray-600 dark:text-gray-400">Computer Vision-based sports analysis project using YOLO, PyTorch, and Key Point Extraction.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium">Pokédex Application</h3>
          <p className="text-gray-600 dark:text-gray-400">MERN stack app with server-side caching using Redis for optimized performance.</p>
        </div>
        {/* Add more project sections as needed */}
      </section>

      {/* Contact Section */}
      <section className="text-center mt-12">
        <a
          href="mailto:Abhiroopreddy2003@gmail.com"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default MyResume;
