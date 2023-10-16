import { BulkReviewOutputType } from "@/utils/types";
import React from "react";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import NotAvailable from "@/components/NotAvailable";
import BoxHeading from "@/components/BoxHeading";

Chart.register(ArcElement, Tooltip, Legend);

const ReviewAverageProbability = (props: {
  reviewAverageProbability: BulkReviewOutputType | undefined;
}) => {
  const data = {
    labels: props.reviewAverageProbability?.label,
    datasets: [
      {
        label: "Review average probability",
        data: props.reviewAverageProbability?.data,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center p-3 border rounded-md shadow-md bg-white">
      {props.reviewAverageProbability ? (
        <div>
          <BoxHeading label="REVIEWS AVERAGE PROBABILITY" />
          {/* <Doughnut data={data} className="w-[300px] h-auto" /> */}
          <Pie data={data} className="w-[300px] h-auto" />
        </div>
      ) : (
        <NotAvailable label="Reviews average probability" />
      )}
    </div>
  );
};

export default ReviewAverageProbability;
