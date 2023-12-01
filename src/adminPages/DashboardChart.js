import React, { useEffect, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card , Typography} from "antd";
import "./Adminsurface.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const DashboardChart = () => {

    const [sportsdata, setSportsData] = useState({
        labels: [],
        datasets: [],
    });
    const [loading, setLoading] = useState(false);

    // fetching chart data from api
    async function fetchSportData() {

        setLoading(true);

        let url = "https://dummyjson.com/carts";

        try {
            const result = await fetch(url);
            const data = await result.json();
            

            const labels = data.carts[0].products.map((product)=>{
                return`User-${product.id}`
            });
           
            const userData = data.carts[0].products.map((product) => {
                return product.total;
            });

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: "sports",
                        data:userData,
                        backgroundColor: "rgba(255, 0, 0, 1)",
                    },

                ],
            };
            setSportsData(dataSource);
        }
        catch (error) {
            console.log("error occur while fetching data");
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchSportData();
    },[]);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Each Sports Data',
          },
        },
      };
    return (
      <>
        <Typography.Text className="recent-applicant" >Analysation of each sport</Typography.Text>
       <Card style={{width: 500, height: 270,}} className="chart-card">
        <Bar options={options} data={sportsdata}/>
       </Card>
       </>
    )
}
export default DashboardChart