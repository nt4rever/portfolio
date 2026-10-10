import { Period } from "./types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatMonth = (value: string) => {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

const formatPeriod = ({ start, end }: Period) =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : "Now"}`;

// A period expires after the last day of its end month.
const isExpired = ({ end }: Period) => {
  if (!end) return false;
  const [year, month] = end.split("-").map(Number);
  return new Date() >= new Date(year, month, 1);
};

export { formatPeriod, isExpired };
