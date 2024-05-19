import { Link } from 'react-router-dom';

export default function WhyIStartedBlogging() {
  return (
    <>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Taxing Laughter: The Joke Tax Chronicles
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 ">
                <div>By John Doe</div>
                <div className="h-4 w-px bg-gray-300" />
                <div>May 19, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
          <article className="prose prose-gray">
            <h2>The Joke Tax</h2>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>
            <p>
              The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the
              kingdom.
            </p>
            <blockquote>
              "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
              privilege."
            </blockquote>
            <h3>The Joke Tax Levels</h3>
            <ul>
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
              refused to let the king's foolishness get him down: a court jester named Jokester.
            </p>
            <img
              alt="Jokester"
              className="rounded-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width={800}
            />
            <p>
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
              under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem
              to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </p>
          </article>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Table of Contents</h3>
              <nav className="space-y-2">
                <Link
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#"
                >
                  The Joke Tax
                </Link>
                <Link
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#"
                >
                  The Joke Tax Levels
                </Link>
                <Link
                  className="block text-gray-500 hover:text-gray-900  "
                  href="#"
                >
                  Jokester's Revenge
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Related Posts</h3>
              <div className="space-y-3">
                <Link className="flex items-center space-x-4" href="#">
                  <img
                    alt="Related Post"
                    className="rounded-md"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">The Rise of Pun-ishment</h4>
                    <p className="text-sm text-gray-500 ">
                      Exploring the history of the Joke Tax and its impact on the kingdom.
                    </p>
                  </div>
                </Link>
                <Link className="flex items-center space-x-4" href="#">
                  <img
                    alt="Related Post"
                    className="rounded-md"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">The Jester's Revenge</h4>
                    <p className="text-sm text-gray-500 ">
                      How Jokester's antics turned the tide against the Joke Tax.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Share this post</h3>
              <div className="flex items-center space-x-4">
                <Link className="text-gray-500 hover:text-gray-900  " href="#">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link className="text-gray-500 hover:text-gray-900  " href="#">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link className="text-gray-500 hover:text-gray-900  " href="#">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link className="text-gray-500 hover:text-gray-900  " href="#">
                  <CopyIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CopyIcon(props) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}