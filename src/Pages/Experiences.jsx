/*
   Copyright (C), 2023-2024, Valentin Henriques 
   Author: Valentin Henriques
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import SectionTitle from "../Components/SectionTitle";
import ExperienceCard from "../Components/ExperienceCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="Experiences" subtitle="My professionnal experiences" />
        </div>
        <div className="w-full h-[70%] z-10 flex justify-center">
          <div className="w-full xl:w-[70%] h-[-10%">
            <ExperienceCard />
          </div>
          <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;