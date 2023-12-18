import React, { useEffect, useState } from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {}, []);

  const [ChartGlobalData, setData] = useState([
    ["Category", "Expect", "Current"],
    ["Asian", 1000, 400],
    ["Italian", 1170, 460],
    ["Middle Eastern", 660, 1120],
    ["Spicy mexican", 1030, 540],
  ]);
  const [baroptions, setOptions] = useState({
    chart: {
      title: "Empowering Change:Current Recipe in catelogs",
      subtitle: "Transforming Contributions into Impact",
    },
  });
  const [pieOptions, setPieoptions] = useState({
    title: "3D representation of overall Categol by Category",
    is3D: true,
  });

  const [lineOPtions, setLineOptions] = useState({
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  });

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <Heading textAlign={"center"}
                fontSize={{ base: "30px", md: "30px", lg: "35px" }}
                pb="15px"
                >
                  Dashboard
                  </Heading>
      <Grid
        templateColumns={{base:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(2, 1fr)"}}
        gap={4}
      >
        <GridItem
         
          p="1%"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <h6 style={{ textAlign: "center" }}>calender</h6>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Calendar onChange={onChange} value={date} />
          </div>
        </GridItem>

        {/* ================  Bar chart   ========================= */}
        <GridItem
          h="320px"
          
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="Bar"
            width="100%"
            height="100%"
            data={ChartGlobalData}
            options={baroptions}
          />

      
        </GridItem>

        {/* ====================  Pie chart  =============== */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="PieChart"
            data={ChartGlobalData}
            options={pieOptions}
            width={"100%"}
            height={"100%"}
          />
         
        </GridItem>

        {/* ======================  line chart  ============== */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="LineChart"
            width="100%"
            height="100%"
            data={ChartGlobalData}
            options={lineOPtions}
          />
        
        </GridItem>
      </Grid>
    </div>
  );
};

export default Dashboard;
