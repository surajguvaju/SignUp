import React from "react";
import Lorem from "@/components/Lorem";
import BarChart from "@/Charts/BarChart";
import ChartLayout from "@/components/ChartLayout";
import PieChart from "@/Charts/PieChart";
import DoughnutChart from "@/Charts/DoughnutChart";
import LineChart from "@/Charts/LineChart";
export default function Chartjs() {
  return (
    <div className="flex">
      <div class="w-[100%] p-4 sticky top-[5rem] h-screen overflow-hidden border m-2 rounded">
        <div className="section-left">
          <h1 className="text-center text-[2rem] text-bold">ChartJs</h1>
          <div className="decription my-4">
            <span>
              Chart.js provides a set of frequently used chart types, plugins,
              and customization options. In addition to a reasonable set of
              built-in chart types, you can use additional community-maintained
              chart types . On top of that, it’s possible to combine several
              chart types into a mixed chart (essentially, blending multiple
              chart types into one on the same canvas). Chart.js is highly
              customizable with custom plugins to create annotations, zoom, or
              drag-and-drop functionalities to name a few things.
            </span>
          </div>
        </div>
      </div>
      <div class="flex-grow p-4 mt-[4rem]">
        <ChartLayout title="Bar Chart">
          <BarChart />
        </ChartLayout>
        <ChartLayout title="Doughnut Chart">
          <DoughnutChart />
        </ChartLayout>
        <ChartLayout title="Line Chart">
          <LineChart />
        </ChartLayout>
        <ChartLayout title="Pie Chart">
          <PieChart />
        </ChartLayout>
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
      </div>
      <div class="w-[100%] p-4 sticky top-[5rem] h-screen overflow-hidden border m-2 rounded">
        <p>Right Content</p>
      </div>
    </div>
  );
}
