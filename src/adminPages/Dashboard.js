import React from "react";
import { Card, Space, Statistic, Table, Typography, Badge, Drawer, List } from "antd";
import { useEffect, useState } from "react";
import { CgGames } from "react-icons/cg";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import RecentApplicants from "./RecentApplicants";
import { BellFilled } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { getUsers } from "./Api";
import "./Adminsurface.css"

const Dashboard = () => {
    const [cardData, setCardData] = useState("");
    const [loading, setLoading] = useState(false);
    const [notifyopen, setNotifyopen] = useState(false);
    const [notify, setNotify] = useState("");


    // fetching an url
    async function fetchCardData() {
        setLoading(true);
        let url = "https://dummyjson.com/carts";

        try {
            const result = await fetch(url);
            const data = await result.json();
            setCardData(data.carts[0].products[0])
        }
        catch (error) {
            console.log("error occur in fetching data")
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchCardData();
    }, []);

    useEffect(() => {
        getUsers().then((res) => {
            setNotify(res.users);
        });
    }, []);

    return (
        <div className=" h-[100%]">
            <Space size={20} direction="vertical" className=" flex flex-col gap-11 ">
                <Space className=" flex justify-between bg-richblack-25 dash-notify">
                    <Typography.Title level={4} className=" mt-2">Dashboard</Typography.Title>
                    <Space className=" mr-[4rem]">
                        <Badge count={10} dot className=" mr-4" >
                            <BellFilled
                                style={{ fontSize: 24 }}
                                onClick={() => setNotifyopen(!notifyopen)}
                                className=" text-richblack-800"
                            />
                        </Badge>

                        <CgProfile className=" text-[23px] text-richblack-800 mr-5" />
                    </Space>
                </Space>

                <Drawer
                    title="Notifications"
                    open={notifyopen}
                    onClose={() => {
                        setNotifyopen(false);
                    }}
                    maskClosable
                >
                    <List
                        dataSource={notify}
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <Typography.Text strong>{item.firstName}</Typography.Text> has been
                                    submitted the form!
                                </List.Item>
                            );
                        }}
                    ></List>
                </Drawer>

                <Space direction="horizontal" className="dashboard-card">
                    <DashboardCard
                        icon={
                            <CgGames
                                style={{
                                    color: "blue",
                                    backgroundColor: "rgba(0,255,0,0.25)",
                                    borderRadius: 20,
                                    fontSize: 40,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Indoor"}
                        value={cardData.total}
                        loading={loading}
                    />


                    <DashboardCard
                        icon={
                            <CgGames
                                style={{
                                    color: "blue",
                                    backgroundColor: "rgba(0,255,0,0.25)",
                                    borderRadius: 20,
                                    fontSize: 40,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Outdoor"}
                        value={cardData.discountedPrice}
                        loading={loading}
                    />

                    <DashboardCard
                        icon={
                            <CgGames
                                style={{
                                    color: "yellow",
                                    backgroundColor: "rgba(0,255,0,0.25)",
                                    borderRadius: 20,
                                    fontSize: 40,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Total Form"}
                        value={"115"}
                        loading={loading}
                    />
                </Space>

                <Space className="applicant-chart">
                    <RecentApplicants />
                    <DashboardChart />
                </Space>
            </Space>
        </div>
    )
}
export default Dashboard;