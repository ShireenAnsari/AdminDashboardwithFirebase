import React from 'react';
import './Widgets.scss';
import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOn, PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';

const Widgets = ({ type }) => {
    let data = {
        title: '',
        isMoney: false,
        link: '',
        icon: null,
    };

    // Temporary values
    const amount = 100;
    const percentage = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutline className="icon" style={{ color: 'crimson', 
                backgroundColor:'rgb(255,0,0,0.2)'

                }} />,
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingBagOutlined className="icon" style={{ color: 'goldenrod', 
                backgroundColor:'rgb(255,0,0,0.2)'

                }} />,
            };
            break;
        case 'earning':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'See net earnings',
                icon: <MonetizationOn className="icon" style={{ color: 'plum', 
                backgroundColor:'rgb(255,0,0,0.2)'

                }} />,
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceOutlined className="icon" style={{ color: 'purple', 
                backgroundColor:'rgb(255,0,0,0.2)'

                }} />,
            };
            break;
        default:
            console.warn(`Unknown type: ${type}`);
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {percentage}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widgets;
