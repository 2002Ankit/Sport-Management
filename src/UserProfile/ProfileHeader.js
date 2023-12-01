import { Badge, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { getUserProfile } from './Userapi';
import { SpinnerCircular } from 'spinners-react';
import { getComments } from './Userapi';
import { Drawer, List } from 'antd';


import "./Profile.css";

export const ProfileHeader = () => {
    const [messages, setMessages] = useState("");
    const [notification, setNotification] = useState("");
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [messagesOpen, setMessagesOpen] = useState(false);


    useEffect(() => {
        setLoading(true);
        getUserProfile().then((res) => {
            setNotification(res.users.slice(0,3));
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        setLoading(true);
        getUserProfile().then((res) => {
            setUserName(res.users[0]);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        getComments().then((res) => {
            setMessages(res.comments);
        });
    }, []);

    return (
        <div className='Profile-Header'>
            <div><Typography.Title level={4}>User-dashboard</Typography.Title></div>
            <Space className=" header-icon">
                {/* <div className=' flex justify-center items-center gap-2 text-[20px] text-blue-500  font-serif font-semibold cursor-pointer'>
                    <span><CgProfile /></span>
                    {loading ? <SpinnerCircular className=' h-[15px] w-[15px]' /> : <span>{userName.firstName}</span>}
                </div> */}
                <Badge count={12} dot >
                    <MailOutlined
                        style={{ fontSize: 24 }}
                        onClick={() => setMessagesOpen(!messagesOpen)}
                    />
                </Badge>
                <Badge count={10} dot >
                    <BellFilled
                        style={{ fontSize: 24 }}
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                    />
                </Badge>

            </Space>

            <Drawer
                title="Messages"
                open={messagesOpen}
                onClose={() => {
                    setMessagesOpen(false);
                }}
                maskClosable
            >
                <List
                    dataSource={messages}
                    renderItem={(item) => {
                        return <List.Item>{item.body}</List.Item>;
                    }}
                ></List>
            </Drawer>
            <Drawer
                title="Notifications"
                open={notificationsOpen}
                onClose={() => {
                    setNotificationsOpen(false);
                }}
                maskClosable
            >
                <List
                      dataSource={notification}
                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <Typography.Text strong>{item.firstName}</Typography.Text> form has been
                                Accepted!
                            </List.Item>                            
                        );
                    }}
                   
                ></List>
                
            </Drawer>
        </div>
    )
}
