import './naviagation.css'
import { useState } from 'react';
import { MdOutlineTune } from "react-icons/md";


import { FaAngleDown } from "react-icons/fa6";

const orderOptions = [
    {
        label: "Priority",
        value: "priority",
    },

    {
        label: "Title",
        value: "title",
    }];

const groupOptions = [
    {
        label: "Status",
        value: "status",
    },
    {
        label: "User",
        value: "user",
    },
    {
        label: "Priority",
        value: "priority",
    }];



const Navigation = ({ group, order, onGroupchange, onOrderChange }) => {
    const [expandMore, setExpandMore] = useState(false);
    // eslint-disable-next-line
    const [groupedBy, setGroupedBy] = useState(group);
    // eslint-disable-next-line
    const [orderedBy, setOrderedBy] = useState(order);


    const GroupChange = (x) => {
        setGroupedBy(x.target.value);
        onGroupchange(x.target.value);
    }

    const OrderChange = (x) => {
        setOrderedBy(x.target.value);
        onOrderChange(x.target.value);
    }



    return (
        <div className='nav'>
            <div
                className='btn'
                onClick={() => { setExpandMore(prev => !prev) }}
            >
                <MdOutlineTune />
                <span>Display</span>
                <FaAngleDown />
            </div>
            {expandMore && <div className="drop" >
                <div className='display'>
                    <p>Grouping</p>
                    <select
                        name="group"
                        id="groupBy"
                        defaultValue={group}
                        onChange={GroupChange}>
                        {groupOptions.map((val, i) => (
                            <option key={i} value={val.value}>{val.label}</option>
                        ))}

                    </select>
                </div>
                <div className='display'>
                    <p>Ordering</p>
                    <select
                        name="order"
                        id="orderBy"
                        defaultValue={order}
                        onChange={OrderChange}
                    >
                        {orderOptions.map((val, i) => (
                            <option key={i} value={val.value}>{val.label}</option>
                        ))}
                    </select>
                </div>
            </div>}
        </div>
    )
}

export default Navigation