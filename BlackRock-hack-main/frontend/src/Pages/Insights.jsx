import React, { useState, useEffect } from "react";
import InstrumentCard from "../Components/InstrumentCard";
import axios from "axios";

function Insights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      window.location.href = "/signin";
      return;
    }

    const userData = JSON.parse(user);

    const fetchInsights = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `http://localhost:5000/api/insights/${userData._id}`
          );
          setInsights(response.data.data.data.insights);
          setLoading(false);
        }, 1500); // 1.5 seconds timeout
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };

    fetchInsights();
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <>
      <section className="bg-white dark:bg-transparent">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We have created an investment profile for you
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Below are the financial instruments that we suggest according to
              your risk profile, learn more and gain insights on each instrument
              below <br />
              <br />
              Learn more and watch relevant videos
            </p>
            <a
              href="#"
              className="inline-flex items-center text-black bg-lime-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {loading ? (
            <p>Loading insights...</p>
          ) : insights.length > 0 ? (
            insights.map((insight, index) => (
              <InstrumentCard
                count={index + 1}
                key={insight.id}
                insight={insight}
                className="flex-none"
              />
            ))
          ) : (
            <p>No insights available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Insights;
