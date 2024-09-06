// import React from "react";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa";
// import { teamMembers } from "@/data"; // Ensure this path is correct
// import { PinContainer } from "./ui/Pin"; // Assuming you have this component

// const Team = () => {
//   return (
//     <div className="py-10">
//       <h1 className="heading">
//         Meet our <span className="text-purple">team</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-10">
//         {teamMembers.map((member) => (
//           <a
//             href={member.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="lg:min-h-[20rem] h-[20rem] flex items-center justify-center sm:w-80 w-[70vw] mb-8 hover:scale-105 transition-transform duration-500"
//             key={member.id}
//           >
//             <PinContainer title="Connect on LinkedIn" href={member.linkedin}>
//               {/* Profile Image */}
//               <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[20vh] shadow-lg">
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   width={120}
//                   height={120}
//                   className="z-10 absolute bottom-0 rounded-full border-4 border-gray-800 shadow-2xl"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 mt-3">
//                 {member.name}
//               </h1>

//               <p
//                 className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {member.role}
//               </p>

//               <div className="flex items-center justify-between mt-5 mb-3">
//                 {/* Skills icons with offset */}
//                 <div className="flex items-center">
//                   {member.skills.map((skill, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-1"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <Image
//                         src={skill.icon}
//                         alt={`skill-${index}`}
//                         width={24}
//                         height={24}
//                         className="p-1"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center">
//                   <p className="flex lg:text-lg md:text-sm text-xs text-purple">
//                     Connect here
//                   </p>
//                   <FaLocationArrow className="ms-2" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;


import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { teamMembers } from "@/data"; // Ensure this path is correct
import dynamic from 'next/dynamic';
import { PinContainer } from "./ui/Pin"; // Ensure the path is correct



// const TeamMember = dynamic(() => import("./TeamMember").then((m) => m.TeamMember), {
//   ssr: false,
// });

const Team = () => {
  return (
    <div className="py-10">
      <h1 className="heading">
        Meet our <span className="text-purple">team</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10">
        {teamMembers.map((member) => (
          <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="lg:min-h-[20rem] h-[20rem] flex items-center justify-center sm:w-80 w-[50vw] mb-8 hover:scale-105 transition-transform duration-500"
  key={member.id}
>
  <PinContainer title="Connect on LinkedIn" href={member.linkedin}>
    {/* Profile Image */}
    <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[20vh] shadow-lg">
      <Image
        src={member.img}
        alt={member.name}
        width={120}
        height={120}
        className="z-10 absolute bottom-0 rounded-full border-4 border-gray-800 shadow-2xl"
      />
    </div>

    <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 mt-3">
      {member.name}
    </h1>

    <p
      className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
      style={{
        color: "#BEC1DD",
        margin: "1vh 0",
      }}
    >
      {member.role}
    </p>

    <div className="flex items-center justify-between mt-5 mb-3">
      {/* Skills icons with offset */}
      <div className="flex items-center">
        {member.skills.map((skill, index) => (
          <div
            key={index}
            className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-1"
            style={{
              transform: `translateX(-${5 * index + 2}px)`,
            }}
          >
            <Image
              src={skill.icon}
              alt={`skill-${index}`}
              width={24}
              height={24}
              className="p-1"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <p className="flex lg:text-lg md:text-sm text-xs text-purple">
          Connect here
        </p>
        <FaLocationArrow className="ms-2" color="#CBACF9" />
      </div>
    </div>
  </PinContainer>
</a>

        ))}
      </div>
    </div>
  );
};

export default Team;
