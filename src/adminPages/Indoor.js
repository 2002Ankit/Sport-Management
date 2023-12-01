import React, { useEffect, useState } from "react";
import { getUsers } from "./Api"
import { Space, Table, Typography } from "antd";


const Indoor = () => {

    const [indoorData, setIndoorData] = useState("");
    const [loading, setLoading] = useState(false);

    console.log(indoorData);

    useEffect(() => {
        setLoading(true);
        getUsers().then((res) => {
            setIndoorData(res.users);
            setLoading(false);
        })
    }, []);
    return (
        <Space  direction="vertical" className=" w-full">
            <Typography.Title level={4} className=" mt-2">Indoor Applicants</Typography.Title>
            <Table
                columns={[
                    {
                        title: "Id",
                        dataIndex: "id",
                    },
                    {
                        title: "Name",
                        dataIndex: "firstName",
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
                dataSource={indoorData}
                pagination={{
                    pageSize: 7,
                  }}
            ></Table>
        </Space>
    )
}
export default Indoor;