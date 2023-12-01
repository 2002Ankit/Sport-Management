import { Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { getUsers } from "./Api"
import { useEffect } from "react";

const Outdoor = () => {
    const [outdoorData, setOutdoorData] = useState();  
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getUsers().then((res) => {
            setOutdoorData(res.users);
            setLoading(false);
        })
    }, []);
    
    return (
        <Space size={20} direction="vertical" className=" w-full">
            <Typography.Title level={4} className=" mt-2">Outdoor Applicants</Typography.Title>
            <Table
                columns={[
                    {
                        title: "Id",
                        dataIndex: "id",
                    },
                    {
                        title: "Name",
                        dataIndex: "lastName",
                    },
                    {
                        title: "Sport",
                        dataIndex: "university",
                    },
                    {
                        title: "Height",
                        dataIndex: "height",
                    },
                    {
                        title: "Weight",
                        dataIndex: "weight",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },

                ]}
                loading={loading}
                dataSource={outdoorData}
                pagination={{
                    pageSize: 7,
                  }}
            ></Table>
        </Space>
    )
}
export default Outdoor;