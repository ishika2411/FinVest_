import React from "react";
import VideoSection from "../Components/VideoSection";

function Learn() {
  return (
    <>
      <div>
        <section class="bg-white dark:bg-transparent">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md sm:text-center">
              <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                Selected learning resources according to your preferences
              </h2>
              <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                    <label
                      for="email"
                      class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Search
                    </label>
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                    <input
                      class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-lime-400 focus:border-lime-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
                      placeholder="Search here"
                      type="text"
                      id="email"
                      required=""
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-lime-400 dark:hover:bg-lime-200 dark:focus:ring-primary-800"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div class="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">
                  To change preferences go to :{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 dark:text-lime-400 hover:underline"
                  >
                    My Account
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <VideoSection />
      <VideoSection />
    </>
  );
}
export default Learn;
