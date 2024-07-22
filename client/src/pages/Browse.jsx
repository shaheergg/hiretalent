import React from "react";
import AgencyLayout from "../layouts/AgencyLayout";
import { Button } from "../components/ui/button";
import { Filter } from "../components/agency/Filter";
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
          <Button>Let's Go</Button>
        </section>
        <hr />
        <section className="max-w-6xl py-4 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Filters</h2>
            <div className="flex items-center gap-2">
              <Filter />
              <Filter />
              <Filter />
              <Filter />
              <Filter />
            </div>
          </div>
        </section>
      </AgencyLayout>
    </div>
  );
};

export default Browse;
