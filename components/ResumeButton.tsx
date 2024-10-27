import React from 'react';
import { FiDownload } from 'react-icons/fi'; // Optional: download icon

const DownloadResumeButton: React.FC = () => {
  return (
    <a
      href="/Abhiroop Reddy Nagireddygari.pdf" // path to your resume file in the public folder
      download="/Abhiroop Reddy Nagireddygari Resume.pdf" // customize the downloaded filename
      className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out"
    >
      <FiDownload className="mr-2" /> {/* Optional download icon */}
      Download My Resume
    </a>
  );
};

export default DownloadResumeButton;
