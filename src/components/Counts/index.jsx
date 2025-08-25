import { StatsContainer, StatBox } from "./style";

const stats = [
  { value: "1.5k", label: "Account Holders" },
  { value: "2.1k", label: "Transactions" },
  { value: "2.3k", label: "Settlement" },
  { value: "45k", label: "QR Orders" },
];

export const Stats = () => {
  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StatBox key={index}>
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </StatBox>
      ))}
    </StatsContainer>
  );
};
