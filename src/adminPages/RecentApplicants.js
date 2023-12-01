import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import "./Adminsurface.css"

const RecentApplicants = () => {
    const[dataSource,setDataSource]=useState("");
    const[loading,setLoading]= useState(false);

    console.log(dataSource);

    async function fetchData(){
        setLoading(true);
        let url = "https://dummyjson.com/products";
        try{
            const result = await fetch(url);
            const data =  await result.json();
            setDataSource(data.products.splice(0,4));
            console.log(dataSource);
        }
        catch(error){
            console.log("error in fetching data");
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
        
    },[])
    return (
        <>
            <Typography.Text className="recent-applicant" >Recent Applicants</Typography.Text>
            <Table className="admindashboard-table"
                columns={[
                    {
                        title: "Applicant Name",
                        dataIndex: "title",
                    },
                    {
                        title: "Sports Categories",
                        dataIndex: "category",
                    },
                    {
                        title: "Sports Name",
                        dataIndex: "brand",
                    },
                  
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}
            ></Table>
        
        </>


    )
}
export default RecentApplicants