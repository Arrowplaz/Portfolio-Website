import DownloadResumeButton from '@/components/ResumeButton';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition duration-150">
      <Head>
        <title>Abhiroop Reddy&apos;s Portfolio</title>
        <meta name="description" content="Portfolio of Abhiroop Reddy, a new-grad data scientist and software engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-[#141F3D] dark:text-white transition duration-150">Hi, I&apos;m Abhi!</h1>
        <p className="mt-4 text-lg text-[#141F3D] dark:text-white transition duration-150">An Aspiring Data Scientist & Software Engineer</p>

        <div className="mt-10">
          <img
            src="/background2.jpg" // Replace with your image path
            alt="Description of the image" // Add a description for accessibility
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-[#141F3D] dark:text-white transition duration-150">
            Let&apos;s Build the Future Together
          </h2>
          <p className="mt-4 text-lg text-[#141F3D] text-center max-w-xl dark:text-white transition duration-150">
            I&apos;m currently a senior at Bowdoin College, studying Computer Science and Economics. In the past 3 years,
            I&apos;ve developed a passion for coming up with innovative solutions using data. Equipped with hands-on experience, 
            AI/ML development, full-stack development, and data science I am excited to make impactful change in my career! With a liberal 
            arts background, I look forward to collaborating and contributing to innovative teams and projects!
          </p>
        </div>

        {/* Resume Display */}
        <div className="my-10 w-full flex justify-center">
          <iframe
            src="/Abhiroop Reddy Nagireddygari.pdf"
            title="Abhiroop Nagireddygari Resume"
            className="w-full max-w-4xl h-[900px] mx-auto border shadow-lg rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex space-x-4">
            <a 
              href="my-projects" 
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out"
            >
              My Projects
            </a>
            <a 
              href="about-me" 
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out"
            >
              About Me
            </a>
          </div>
          <div className="mt-4">
            <DownloadResumeButton />
          </div>
        </div>
      </main>
    </div>
  );
}
