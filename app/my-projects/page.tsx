import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition duration-150">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Projects by Abhiroop Reddy, a new-grad data scientist and software engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 transition duration-150">
        <div className="text-center transition duration-150">
          <h1 className="text-5xl font-bold text-[#141F3D] dark:text-white">My Projects</h1>
          <p className="mt-4 text-lg text-[#141F3D] dark:text-gray-400">Explore my work and the projects I&apos;ve built.</p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dynamically render ProjectCard components from the Projects array */}
          {Projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.text}
              imageSrc={project.src}
              href={project.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
