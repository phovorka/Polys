import * as React from "react";

export default function Home() {
  const hello = "Hello React!";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p className="title">
        This starter gives you everything you need to start working on a new
        React project, and nothing more. If you're looking for something with
        more options included out of the box, try remixing{" "}
        <a href="https://glitch.com/edit/#!/remix/glitch-hello-react">
          ~glitch-hello-react
        </a>
        .
      </p>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
              alt="Modern building architecture"
            ></img>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
