import React from "react";
import { LineChart } from "../Charts/Pie";
import Rounded from "../Charts/Rounded";

const Profile = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 p-5 gap-8">
      <div className="w-full text-white rounded-lg overflow-hidden p-3 bg-white max-h-96  min-h-[300px]">
        <LineChart data2={frontEnd} color={"blue"} />
      </div>
      <div className="w-full text-white rounded-lg overflow-hidden p-3 bg-white max-h-96  min-h-[300px]">
        <LineChart data2={backEnd} color={"green"} />
      </div>
      <div className="w-full text-white rounded-lg overflow-hidden p-3 bg-white max-h-96  min-h-[300px]">
        <LineChart data2={softwore} color={"purple"} />
      </div>
      <div className="w-full text-white rounded-lg overflow-hidden p-3 bg-white max-h-96 min-h-[300px]">
        <LineChart data2={game} color={"orange"} />
      </div>
      <div className="w-full text-white rounded-lg overflow-hidden p-3 bg-white max-h-96 min-h-[300px]">
        <LineChart data2={app} color={"red"} />
      </div>
      <div className="w-full text-white rounded-lg overflow-hidden p-3 max-h-96">
        <Rounded />
      </div>
    </div>
  );
};

export default Profile;

const frontEnd = {
  labels: [
    "React JS",
    "Next JS",
    "Javascript",
    "Typescript",
    "Redux",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
  ],
  datasets: [
    {
      label: "Front End",
      data: [60, 50, 70, 40, 40, 80, 70, 60, 50, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  title: "Front End Skills",
};

const backEnd = {
  labels: [
    "Node JS",
    "Express JS",
    "MongoDB",
    "Postgress Sql",
    "Prisma",
    "Docker",
  ],
  datasets: [
    {
      label: "Back End",
      data: [50, 50, 50, 30, 30, 20, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  title: "Back End Skills",
};

const softwore = {
  labels: [
    "Python",
    "Django",
    "C",
    "C++",
    "My SQL",
    "JAVA",
    "AWS",
    "Data Structure",
    "Algorithm",
  ],
  datasets: [
    {
      label: "Softwore Development",
      data: [60, 50, 50, 50, 30, 30, 10, 10, 10, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  title: "Softwore Development Skills",
};
const game = {
  labels: ["Blender", "Ubreal Engine"],
  datasets: [
    {
      label: "Game Development",
      data: [40, 60, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  title: "Game Development Skills",
};
const app = {
  labels: ["React Native",],
  datasets: [
    {
      label: "App Development",
      data: [40, 60, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  title: "App Development Skills",
};
