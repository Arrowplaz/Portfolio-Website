import React from 'react';

interface MLProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const MLProjectCard: React.FC<MLProjectCardProps> = ({
  title,
  description,
  imageSrc,
  href,
}) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold text-[#141F3D] dark:text-white">{title}</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <a
        href={href}
        className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out mt-4"
      >
        View Github
      </a>
    </div>
  );
};

export default MLProjectCard;
