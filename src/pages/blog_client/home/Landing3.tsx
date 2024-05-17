/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dKFPb80mphN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

function Landing3() {
  return (
    <div className="bg-gray-100">
      <div className="border-b border-gray-200">
        <div className="px-4 py-3 md:px-6 lg:py-4 lg:grid lg:grid-cols-3 lg:items-center">
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl xl:text-4xl">Blog Name</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to the official blog</p>
          </div>
          <div className="justify-center hidden space-x-4 text-sm lg:flex">
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              Home
            </Link>
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              Articles
            </Link>
            <Link className="font-medium text-gray-900 dark:text-gray-100" href="#">
              About
            </Link>
          </div>
          <div className="justify-end hidden space-x-4 text-sm lg:flex">
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              Sign in
            </Link>
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              Sign up
            </Link>
          </div>
          <button
            className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 lg:hidden">
            Subscribe
          </button>
        </div>
      </div>
      <div className="px-4 py-12 md:px-6 lg:py-24">
        <div className="space-y-6 text-center lg:space-y-10 lg:text-left">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Welcome to the blog
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">The Art of Writing</h1>
          </div>
          <p className="max-w-3xl mx-auto text-gray-500 md:grid md:gap-4 lg:gap-6 dark:text-gray-400">
            Improve your writing skills, find inspiration, and stay up to date with the latest literary news.
          </p>
          <div>
            <Link
              className="inline-block w-full md:w-auto bg-gray-900 hover:bg-gray-900 dark:bg-gray-100 dark:hover:bg-gray-200 rounded-lg px-8 py-3 text-white dark:text-gray-900"
              href="#"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </div>
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
        <div className="space-y-6 lg:col-span-2 lg:space-y-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Featured Article
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              The Power of Words: How Language Shapes Our World
            </h2>
          </div>
          <div className="space-y-4 text-gray-500 dark:text-gray-400">
            <p>
              Words have power. They can inspire us to reach great heights or plunge us into the depths of despair. But
              the influence of language goes beyond mere motivation; it shapes the way we think, the way we perceive the
              world around us.
            </p>
            <p>
              In this thought-provoking article, we will explore the ways in which language shapes our reality. From the
              subtle nuances of communication to the impact of rhetoric on public opinion, we will delve into the
              profound influence of words.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="font-medium underline hover:no-underline text-gray-900 dark:text-gray-100" href="#">
              Read the full article
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">10 min read</p>
          </div>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Recent Articles
            </p>
          </div>
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-2">
                <Link
                  className="text-xl font-semibold tracking-tight hover:underline text-gray-900 dark:text-gray-100"
                  href="#"
                >
                  The Science of Creativity: Unleashing the Artist Within
                </Link>
                <p className="text-gray-500 dark:text-gray-400">May 13, 2023</p>
              </div>
            </li>
            <li>
              <div className="grid gap-2">
                <Link
                  className="text-xl font-semibold tracking-tight hover:underline text-gray-900 dark:text-gray-100"
                  href="#"
                >
                  The Magic of Storytelling: Capturing Hearts and Minds with Narrative
                </Link>
                <p className="text-gray-500 dark:text-gray-400">April 24, 2023</p>
              </div>
            </li>
            <li>
              <div className="grid gap-2">
                <Link
                  className="text-xl font-semibold tracking-tight hover:underline text-gray-900 dark:text-gray-100"
                  href="#"
                >
                  Beyond the Bestseller: Exploring Hidden Gems in the Literary World
                </Link>
                <p className="text-gray-500 dark:text-gray-400">March 31, 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-6 md:px-6 lg:py-12 lg:grid lg:grid-cols-3 lg:items-center">
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl xl:text-4xl">Blog Name</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to the official blog</p>
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-sm">© 2023 Blog Name. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4 md:justify-end lg:space-x-2">
              <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
                Home
              </Link>
              <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
                Articles
              </Link>
              <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
                About
              </Link>
              <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-end space-x-4 lg:hidden">
            <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
              Sign in
            </Link>
            <Link className="text-gray-900 hover:underline dark:text-gray-100" href="#">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing3;
