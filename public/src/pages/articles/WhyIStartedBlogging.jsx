import { Link } from 'react-router-dom';

export default function WhyIStartedBlogging() {
  return (
    <>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Why I started Blogging?
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 ">
                <div>By Abdullah Shamout</div>
                <div className="h-4 w-px bg-gray-300" />
                <div>May 19, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
          <article className="prose prose-gray">
            <h2 id="backstory" className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Backstory</h2>
            <p>
              During my time at university, I faced many struggles as a freshman, particularly with managing my time. Balancing a normal social life, excelling in my studies, maintaining my hobbies, and exploring my interests all at once proved to be challenging. Thankfully, I met some great people during that period, and we built strong friendships. With their support, I managed to get through that difficult time and learned a lot.
            </p>
            <p>
            After some time had passed, I reflected on my freshman year. I figured out what was missing, how it could have been better, and how I could have tackled those struggles more efficiently. Now, as I write this blog, I am finishing my junior year and heading into the summer before my senior year.
            </p>
            <figure className="my-4">
            <img
              alt="castle"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height="480"
              src="/src/assets/Blogs/ITUSUNSET.jpg"
              width="720"
            />
            <figcaption className="mt-1 text-gray-700 italic font-semibold">Sunset from Mustafa Inan Library in ITU</figcaption>
          </figure>
            <h2 id="What I needed" className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">What I needed</h2>
            <p>
              Looking back, I realize I was in great need of a mentor or an upperclassman—someone who could guide me through my challenges, tell me what to focus on, and what to ignore. I searched for such a person but couldn't find one. The friends I made during my freshman year were fantastic and helped me build an amazing social life, especially as an international student, which might have been harder without them. However, in other aspects of my life, they couldn't offer much insight, as things seemed to come easily for them when I asked for advice.
            </p>
            <p>
              At the same time, I needed a roadmap for managing my technical classes. I was studying computer engineering with no previous experience in programming. In high school, I used to score high grades without much effort because my teachers were very good and attentive. However, in university, that luxury was absent due to the large number of students, so I did not have good study habits. I needed to figure out how to study efficiently and manage my time.
            </p>
            <h2 id="Helping others" className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Helping Others</h2>
            <p>
              By the end of the first semester of my sophomore year, I had figured out how to manage my time better. I was doing well in my classes and had a good social life. After achieving what I wanted, I felt compelled to help others facing similar difficulties. I started by posting my notes, solutions, projects, and tips on how to study efficiently and where to find the best resources for each course. I uploaded this information to a GitHub repository at the end of each semester so that others could benefit from it when they took the same courses. This way, they could learn from my mistakes.
            </p>
            <p>
              At that time, I didn't think much of it; I just posted what I had gathered throughout the semester and went on with my life. However, after some time, I started receiving messages and notifications from people who found what I posted helpful. They would ask questions about what I shared or simply thank me. It was a great feeling. Doing something selflessly and seeing it help others made me feel good, and I wanted to continue doing it.
            </p>
            <h2 id="Currently" className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Currently</h2>
            <p>
              I am currently in my junior year and still posting my notes, solutions, and tips on GitHub. This semester, I started going to the gym, which has been a great decision. I am learning a lot about the human body, from nutrition to anatomy, and how to train efficiently. Additionally, I picked up book reading again and I am learning a lot. During this period, I felt that documenting my journey regarding my school life, gym life, and personal life would be a great idea. Documenting what I am going through and what I am learning will help me remember and internalize it more, reflect on it, look back on it in the future, and, who knows, maybe it will help someone else!
            </p>
            <h2 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Conclusion</h2>
            <p>
            My aim with this blog is to document my journey and share what I am learning with others. It will help me keep track of my learning and internalize it. It will serve as a journal for me to look back on in the future. Additionally, it will help others who are going through similar experiences. I hope this blog will be helpful to you and that you will enjoy reading it.
            </p>
          </article>
          <div className="space-y-8">
            <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Table of Contents</h3>
              <nav className="space-y-2">
                <a
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#backstory"
                >
                  Backstory
                </a>
                <a
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#What I needed"
                >
                  What I needed
                </a>
                <a
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#Helping others"
                >
                  Helping Others
                </a>
                <a
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#Currently"
                >
                  Currently
                </a>
                <a
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#Conclusion"
                >
                  Conclusion
                </a>
              </nav>
            </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Tags</h3>
            <div className="mt-4 space-y-2">
              <div className="inline-flex items-center text-sm font-medium hover:underline mr-2" href="#">
                <TagIcon className="h-4 w-4 text-gray-500" />
                <span>Blogging</span>
              </div>
              <div className="inline-flex items-center text-sm font-medium hover:underline mr-2" href="#">
                <TagIcon className="h-4 w-4 text-gray-500" />
                <span>University</span>
              </div>
              <div className="inline-flex items-center text-sm font-medium hover:underline mr-2" href="#">
                <TagIcon className="h-4 w-4 text-gray-500" />
                <span>Freshman</span>
              </div>
              <div className="inline-flex items-center text-sm font-medium hover:underline mr-2" href="#">
                <TagIcon className="h-4 w-4 text-gray-500" />
                <span>Time management</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}