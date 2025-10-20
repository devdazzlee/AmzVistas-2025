"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AwarenessSection() {
  const chartData = {
    labels: [
      "Month 1",
      "Month 3",
      "Month 6",
      "Month 9",
      "Month 12",
      "Month 18",
      "Month 24",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 15000, 35000, 75000, 150000, 300000, 500000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: "Investment",
        data: [10000, 25000, 40000, 55000, 70000, 85000, 100000],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#f59e0b",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: "normal" as const,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#3b82f6",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(107, 114, 128, 0.1)",
        },
        ticks: {
          color: "#6b7280",
          font: {
            size: 12,
          },
          callback: (value: any) => "$" + (value / 1000).toFixed(0) + "K",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Are You Aware?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clients with the right working capital hit up to six-figure monthly
            revenues within 12 months.
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Amazon Revenue Growth Projection
          </h3>
          <div className="h-80">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-blue-600 mb-1">$500K</div>
            <div className="text-sm text-gray-600">Peak Revenue</div>
            <div className="text-xs text-green-600 mt-1">+150% growth</div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-green-600 mb-1">24</div>
            <div className="text-sm text-gray-600">Months</div>
            <div className="text-xs text-blue-600 mt-1">Time to peak</div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-purple-600 mb-1">400%</div>
            <div className="text-sm text-gray-600">ROI</div>
            <div className="text-xs text-green-600 mt-1">Return rate</div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-orange-600 mb-1">$100K</div>
            <div className="text-sm text-gray-600">Investment</div>
            <div className="text-xs text-gray-500 mt-1">Total capital</div>
          </div>
        </div>
      </div>
    </section>
  );
}
