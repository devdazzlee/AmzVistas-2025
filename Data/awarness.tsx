export interface ChartDataPoint {
  period: string;
  totalCost: number;
  revenue: number;
  fba: number;
  onlineArbitrage: number;
  privateLabel: number;
}

export const defaultChartData: ChartDataPoint[] = [
  {
    period: "Q3 2022",
    totalCost: 180000,
    revenue: 200000,
    fba: 150000,
    onlineArbitrage: 120000,
    privateLabel: 100000,
  },
  {
    period: "Q4 2022",
    totalCost: 200000,
    revenue: 220000,
    fba: 170000,
    onlineArbitrage: 140000,
    privateLabel: 120000,
  },
  {
    period: "Q1 2023",
    totalCost: 220000,
    revenue: 250000,
    fba: 190000,
    onlineArbitrage: 160000,
    privateLabel: 140000,
  },
  {
    period: "Q2 2023",
    totalCost: 250000,
    revenue: 280000,
    fba: 220000,
    onlineArbitrage: 180000,
    privateLabel: 160000,
  },
  {
    period: "Q3 2023",
    totalCost: 280000,
    revenue: 320000,
    fba: 250000,
    onlineArbitrage: 200000,
    privateLabel: 180000,
  },
  {
    period: "Q4 2023",
    totalCost: 320000,
    revenue: 380000,
    fba: 290000,
    onlineArbitrage: 230000,
    privateLabel: 210000,
  },
  {
    period: "Q1 2024",
    totalCost: 360000,
    revenue: 450000,
    fba: 340000,
    onlineArbitrage: 270000,
    privateLabel: 250000,
  },
  {
    period: "Q2 2024",
    totalCost: 400000,
    revenue: 500000,
    fba: 380000,
    onlineArbitrage: 300000,
    privateLabel: 280000,
  },
];
