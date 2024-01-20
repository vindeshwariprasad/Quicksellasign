import { BsThreeDots, BsFillInfoSquareFill } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaRegCircle } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";
import { RxHalf2 } from "react-icons/rx";
import { GiNetworkBars } from "react-icons/gi";
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}

export const status = [
    { title: "backlog", color: "black", icon: <TbCircleDotted /> },
    { title: "todo", color: "lightgrey", icon: < FaRegCircle /> },
    { title: "in progress", color: "yellow", icon: <RxHalf2 /> },
    { title: "done", color: "green", icon: <FaCheckCircle /> },
    { title: "cancelled", color: "red", icon: <FaCircleXmark /> },
];

export const priorities = [
    { title: "no priority", color: "gray", icon: <BsThreeDots /> },
    { title: "low", color: "lightgray", icon: <GiNetworkBars /> },
    { title: "medium", color: "yellow", icon: <GiNetworkBars /> },
    { title: "high", color: "black", icon: <GiNetworkBars /> },
    { title: "urgent", color: "red", icon: <BsFillInfoSquareFill /> }
];


export const statusIcons = {
    backlog: {
        color: "black",
        icon: <TbCircleDotted />,
    },
    todo: {
        color: "lightgrey",
        icon: <FaRegCircle />,
    },
    "in progress": {
        color: "yellow",
        icon: <RxHalf2 />,
    },
    done: {
        color: "green",
        icon: <FaCheckCircle />,
    },
    cancelled: {
        color: "red",
        icon: <FaCircleXmark />,
    },
};

const bg = ["green", "red", "grey", "blue"];

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bg.length);
    return bg[randomIndex];
};