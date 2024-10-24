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
        <h1 className="text-5xl font-bold text-[#141F3D] dark:text-white transition duration-150">Hi, I’m Abhiroop Reddy</h1>
        <p className="mt-4 text-lg text-[#141F3D] dark:text-white transition duration-150">Aspiring Data Scientist & Software Engineer</p>

        <div className="mt-10">
          <img
            src="/background2.jpg" // Replace with your image path
            alt="Description of the image" // Add a description for accessibility
            className="max-w-full h-auto rounded-lg shadow-md" // Add Tailwind classes for styling
          />
        </div>

        <div className='mt-10 flex flex-col items-center'>
          <h2 className="text-4xl font-bold text-[#141F3D] dark:text-white transition duration-150">About Me</h2>
          <p className="mt-4 text-lg text-[#141F3D] text-center max-w-xl dark:text-white transition duration-150">
            Thanks for checking out my portfolio! Please use the buttons below to check out my projects or to learn more about me and my skills!
          </p>
        </div>

        <div className="mt-10 space-x-4">
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
             About me
          </a>
        </div>
      </main>
    </div>
  );
}
