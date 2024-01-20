// prettier-ignore
import "./Icons.css";
import { FaCircle } from "react-icons/fa6";

const Icon = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='point' style={available ? { color: "green" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

export default Icon