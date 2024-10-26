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
        <h1 className="text-5xl font-bold text-[#141F3D] dark:text-white transition duration-150">Hi, I&apos;m Abhiroop Reddy</h1>
        <p className="mt-4 text-lg text-[#141F3D] dark:text-white transition duration-150">Aspiring Data Scientist & Software Engineer</p>

        <div className="mt-10">
          <img
            src="/background2.jpg" // Replace with your image path
            alt="Description of the image" // Add a description for accessibility
            className="max-w-full h-auto rounded-lg shadow-md" // Add Tailwind classes for styling
          />
        </div>

        <div className='mt-10 flex flex-col items-center'>
        <h2 className="text-2xl font-semibold mb-2 text-[#141F3D] dark:text-white transition duration-150">
          Let&aposs Build the Future Together
        </h2>
          <p className="mt-4 text-lg text-[#141F3D] text-center max-w-xl dark:text-white transition duration-150">
          As a senior majoring in Computer Science and Economics, I&apos;m excited to take the next step in my journey. 
          With hands-on experience in AI/ML, full-stack development, and data science, I&apos;m actively seeking full-time 
          opportunities to contribute my skills to innovative teams. 
          Let&apos;s collaborate and create solutions that matter.
          </p>
        </div>

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
            <a 
              href="/resume.pdf" 
              download 
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#FCA317] dark:bg-[#5A189A] rounded-lg hover:bg-[#F89A12] transition duration-150 ease-in-out"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
