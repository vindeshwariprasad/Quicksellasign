import './card.css'
import Icons from '../Icons/Icons';
import { FaCircle } from "react-icons/fa";

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const users = user?.name.split(' ').map(word => word.charAt(0)).join('');
    return (
        <div className='card'>
            <div className='header'>
                <p className='id'>{ticket?.id}</p>
                {user && <Icons intials={users} available={user?.available} bgColor={bgColor} />}
            </div>
            <div className='info'>
                <span style={{ color: statusColor }}>{statusIcon}</span>
                <p>
                    {ticket?.title}
                </p>
            </div>
            <div className='footer'>
                {icon && <div>
                    {icon}
                </div>}
                <div className="tag">
                    <FaCircle />
                    {
                        ticket?.tag.map((x, id) => (
                            <p key={id} >{x}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card