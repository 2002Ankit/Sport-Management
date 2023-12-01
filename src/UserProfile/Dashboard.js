import React, { useEffect, useState } from 'react'
import { getUserProfile } from './Userapi'
import { Table } from 'antd';
import "./Dashboard.css"

export const Dashboard = () => {
  const [getData, setGetData] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(getData);

  useEffect(() => {
    setLoading(true);
    getUserProfile().then((res) => {
      setGetData(res.users.splice(0, 3));
      setLoading(false);
    })
  }, []);

  console.log(getData);

  return (       
     <div className=' h-[100vh]  '>      
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
            title: "Applied for",
            dataIndex: "university",
          },
          {
            title: "Categories",
            dataIndex: "gender",
          },
          {
            title: "Date",
            dataIndex: "birthDate",
          },
          {
            title: "Status",
            dataIndex: "eyeColor",
          },
        ]}
        loading={loading}
        dataSource={getData}
        pagination={{
          pageSize: 3,
        }}
        className=' dashboard-table '
      ></Table>
     </div>
    
  )
};
