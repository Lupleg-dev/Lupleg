import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-6 md:py-12 lg:py-20 xl:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter">
              Lupleg Academy
            </h1>
            <p className="p-5 max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Learn from the best. Courses taught by industry experts.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 01 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                  Introduction to Web Development
                </h2>
                <p className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-500 dark:text-gray-400">
                  $199
                </p>
              </div>
              <p className="max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to the world of web development.
                You will learn HTML, CSS, and JavaScript from scratch.
              </p>
              <Link href="#" className="inline-block w-full md:w-auto btn">
                Learn more
              </Link>
            </div>
            <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Web Development Course"
                className="object-cover"
                src="/web.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 02 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                  Mastering React with JavaScript
                </h2>
                <p className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-500 dark:text-gray-400">
                  $99
                </p>
              </div>
              <p className="max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Learn React from Facebook engineers. This course will take your
                React skills to the next level.
              </p>
              <Link href="#" className="inline-block w-full md:w-auto btn">
                Learn more
              </Link>
            </div>
            <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="React Course"
                className="object-cover"
                src="/reactjs.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 03 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                  Freelancing 101
                </h2>
                <p className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-500 dark:text-gray-400">
                  $20
                </p>
              </div>
              <p className="max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to Freelancing basics starting
                from scratch to landing your first client on Upwork. .
              </p>
              <Link href="#" className="inline-block w-full md:w-auto btn">
                Learn more
              </Link>
            </div>
            <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Freelancing Course"
                className="object-cover"
                src="/freelancing.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            {/* Course 04 */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                  Git & GitHub for Beginners
                </h2>
                <p className="text-2xl sm:text-3xl font-bold tracking-tighter text-gray-500 dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to how to use git and github for
                version control and collaboration with other developers.
              </p>
              <Link href="#" className="inline-block w-full md:w-auto btn">
                Learn more
              </Link>
            </div>
            <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Git & GitHub Course"
                className="object-cover"
                src="/github.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}