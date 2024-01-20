import './board.css'
import { IoMdAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import Card from '../Cards/card';
import Icon from '../Icons/Icons';
import { generateIntials, getRandomColor, priorities, statusIcons } from '../../resources/details';

const Board = (props) => {
    const { tickets, users, group, level, userId, order, data } = props;

    let filter = [];
    if (group === 'status')
        filter = tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
    else if (group === 'priority')
        filter = tickets.filter(ticket => ticket.priority === level);
    else
        filter = tickets.filter(ticket => ticket.userId === userId);

    if (order === 'priority')
        filter = filter.slice().sort((a, b) => b.priority - a.priority);
    else
        filter = filter.slice().sort((a, b) => a.title.localeCompare(b.title));

    if (group === 'user') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span><Icon intials={generateIntials(data?.name)} available={data?.available} bgColor={getRandomColor()} /></span>
                        <p>{data?.name} </p>
                        <span>{filter.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filter.map((ticket) => {
                            return (<Card
                                ticket={ticket}
                                key={ticket.id}
                                icon={priorities[ticket?.priority].icon}
                                group={group} statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                            />)
                        })
                    }
                </div>

            </div>
        )
    }
    if (group === 'priority') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span style={{ color: data.color }}>{data.icon}</span>
                        <p>{data.title} </p>
                        <span>{filter.length}</span>
                    </div>
                    <div className="board_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filter.map((ticket) => {
                            const user = users?.find(user => user.id === ticket.userId)
                            return (<Card
                                ticket={ticket}
                                key={ticket.id}
                                user={user}
                                group={group}
                                statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                                icon="" />)
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div className='board'>
            <div className='board_top'>
                <div className="board_top_name">
                    <span style={{ color: data.color }}>{data.icon}</span>
                    <p>{data.title} </p>
                    <span>{filter.length}</span>
                </div>
                <div className="board_top_options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="board_container">
                {
                    filter.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId)
                        return (<Card
                            ticket={ticket}
                            key={ticket.id}
                            statusIcon=""
                            icon={priorities[ticket?.priority].icon}
                            user={user}
                            group={group}
                            bgColor={getRandomColor()}
                            statusColor="" />)
                    })
                }
            </div>
        </div>
    )
}

export default Board