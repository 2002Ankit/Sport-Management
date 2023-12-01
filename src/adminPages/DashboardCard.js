import React from "react";
import { Card, Space, Statistic } from "antd";
import { SpinnerCircular } from "spinners-react";
import "./Adminsurface.css"

const DashboardCard = ({ title, value, icon, loading }) => {
  return (
    <div>     
       <Card>
        <Space direction="horizontal" className="card">
          {icon}
          {loading?<SpinnerCircular className=" h-[15px] w-[15px]"/>:<Statistic title={title} value={value}  />}
        </Space>
      </Card>
    </div>

  )
}
export default DashboardCard