import React, { useEffect } from "react";
import { getApplicant } from "./Api";
import { useState } from "react";
import { Drawer,List,Typography } from "antd";

const Notification = ({currentItem}) => {
    // const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [applicant, setApplicant] = useState([]);

    useEffect(() => {
        getApplicant().then((res) => {
            setApplicant(res.products);
        });
    }, [])


    return (
        <div>
            <Drawer
                title="Notifications"
                open={currentItem == 5}
                // onClose={() => {
                //     setNotificationsOpen(false);
                // }}
                // maskClosable
            >
                <List
                    dataSource={applicant}
                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <Typography.Text strong>{item.title}</Typography.Text> has been
                                submitted the form.
                            </List.Item>
                        );
                    }}
                ></List>
            </Drawer>
        </div>
    )
}
export default Notification;