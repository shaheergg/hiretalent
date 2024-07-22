import React from "react";
import AgencyLayout from "../layouts/AgencyLayout";
import { BriefcaseIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/ui/Button";

const Browse = () => {
  return (
    <div>
      <AgencyLayout>
        <section className=" max-w-6xl text-center flex-col space-y-8 mx-auto min-h-[50vh] flex items-center justify-center">
          <h2 className="text-6xl font-display">
            Browse top engineers and hire them to work on your projects,
            seamlessly.
          </h2>
          <p className="max-w-4xl text-gray-600">
            We have a pool of talented engineers that can help you with your
            next project. Browse through our list of engineers and hire them to
            work on your projects.
          </p>
        </section>
        <hr />
        <section className="grid grid-cols-6 gap-4 p-8">
          <div className="col-span-2 border-r">
            <div className="p-4 space-y-4 bg-gray-100 border rounded-md shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-4 bg-indigo-600 rounded-full"></div>
                  <div>
                    <h2 className="flex items-center gap-2">
                      Muhammad Shaheer
                      <span>
                        {" "}
                        <CheckBadgeIcon className="w-4 h-4 text-indigo-500" />
                      </span>
                    </h2>
                    <p className="text-xs text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-green-500">$50/hr</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">
                  Available for work
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  I'm a full stack developer with 5 years of experience. I have
                  worked on multiple projects and have a good understanding of
                  the latest technologies.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 32 32"
                  >
                    <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                    <path
                      fill="#00d8ff"
                      d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324a11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573a10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"
                    />
                    <path
                      fill="#00d8ff"
                      d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593a28.7 28.7 0 0 1 5.653-7.154a11.4 11.4 0 0 1 3.384-2.133a3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133a28.4 28.4 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"
                    />
                    <path
                      fill="#00d8ff"
                      d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237a28.7 28.7 0 0 1-3.374-8.471a11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.4 28.4 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.54 3.54 0 0 1-1.494 2.555a2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662a10.2 10.2 0 0 0 .153 3.565a27.5 27.5 0 0 0 3.236 8.1Z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.18px"
                    height="16px"
                    viewBox="0 0 256 289"
                  >
                    <path
                      fill="#539e43"
                      d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#439934"
                      fill-rule="evenodd"
                      d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#45a538"
                      fill-rule="evenodd"
                      d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#46a037"
                      fill-rule="evenodd"
                      d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#409433"
                      fill-rule="evenodd"
                      d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#4faa41"
                      fill-rule="evenodd"
                      d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#4aa73c"
                      fill-rule="evenodd"
                      d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#57ae47"
                      fill-rule="evenodd"
                      d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#60b24f"
                      fill-rule="evenodd"
                      d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#a9aa88"
                      fill-rule="evenodd"
                      d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#b6b598"
                      fill-rule="evenodd"
                      d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#c2c1a7"
                      fill-rule="evenodd"
                      d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#cecdb7"
                      fill-rule="evenodd"
                      d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#dbdac7"
                      fill-rule="evenodd"
                      d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#ebe9dc"
                      fill-rule="evenodd"
                      d="m65.38 124.415l1.218-3.124l.251 3.696z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#cecdb7"
                      fill-rule="evenodd"
                      d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#4faa41"
                      fill-rule="evenodd"
                      d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.25px"
                    height="16px"
                    viewBox="0 0 424 512"
                  >
                    <path
                      fill="currentColor"
                      d="m381.39 405.887l-229.671 67.928c-7.017 2.077-13.742-3.992-12.267-11.073L221.5 69.81c1.535-7.352 11.692-8.515 14.896-1.71l151.918 322.595c2.865 6.09-.404 13.267-6.925 15.193m39.384-16.028L244.876 16.326C233.28-5.365 205.84-4.578 195.12 13.576L4.348 322.567c-5.91 9.635-5.793 21.51.336 31.02l93.253 144.459c9.615 11.463 18.506 16.87 33.692 12.378l270.685-80.058c18.033-5.4 26.723-22.822 18.46-40.506"
                    />
                  </svg>
                </span>
                <span className="text-xs flex items-center justify-center border rounded-full text-gray-600 h-[16px] w-[16px]">
                  +7
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  <span className="text-green-500">4.8</span> (12 reviews)
                </p>
                <p className="text-sm">
                  <span className="text-green-500">5+</span> years of experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="p-4 space-y-4 border rounded-md shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-4 bg-indigo-600 rounded-full"></div>
                  <div>
                    <h2 className="flex items-center gap-2">
                      Muhammad Shaheer
                      <span>
                        {" "}
                        <CheckBadgeIcon className="w-4 h-4 text-indigo-500" />
                      </span>
                    </h2>
                    <p className="text-xs text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div>
                  <Button>
                    <BriefcaseIcon className="w-4 h-4 mr-2" />
                    Hire now
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">
                    Available for work
                  </span>
                </div>
                • <span className="text-xs text-green-500">$50/hr</span>
              </div>
              <div>
                <p>
                  I'm a full stack developer with 5 years of experience. I have
                  worked on multiple projects and have a good understanding of
                  the latest technologies. I'm a full stack developer with 5
                  years of experience. I have worked on multiple projects and
                  have a good understanding of the latest technologies. I'm a
                  full stack developer with 5 years of experience. I have worked
                  on multiple projects and have a good understanding of the
                  latest technologies. I'm a full stack developer with 5 years
                  of experience. I have worked on multiple projects and have a
                  good understanding of the latest technologies. I'm a full
                  stack developer with 5 years of experience. I have worked on
                  multiple projects and have a good understanding of the latest
                  technologies.
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-1 p-4 text-center bg-gray-100 border-b-2 border-green-500 cursor-pointer">
                  Reviews
                </div>
                <div className="flex-1 p-4 text-center border-b-2 border-transparent cursor-pointer hover:bg-gray-100">
                  Experiences
                </div>
                <div className="flex-1 p-4 text-center border-b-2 border-transparent cursor-pointer hover:bg-gray-100">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </section>
      </AgencyLayout>
    </div>
  );
};

export default Browse;
