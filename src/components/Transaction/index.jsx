import {
  Container,
  Card,
  Header,
  LeftSection,
  Title,
  Amount,
  Arrow,
  Content,
  Transaction,
  NameDate,
  Price,
  ActionButton
} from "./style";

export const Transactions = () => {
  const data = [
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
  ];

  return (
    <Container>
      <Card>
        <Header>
          <LeftSection>
          <Title>SETTLEMENT</Title>
          <Amount>₹1,23,816.19</Amount>
          </LeftSection>
          <Arrow>›</Arrow>
          
        </Header>
        <Content>
          {data.map((item, index) => (
            <Transaction key={index}>
              <NameDate>
                <strong>{item.name}</strong>
                <span>{item.date}</span>
              </NameDate>
              <Price>{item.amount}</Price>
            </Transaction>
          ))}
          <ActionButton>Settle Now</ActionButton>
        </Content>
      </Card>

      <Card>
        <Header>
          <LeftSection>
          <Title>TOTAL TRANSACTIONS</Title>
          <Amount>₹1,23,816.19</Amount>
          </LeftSection>
          <Arrow>›</Arrow>
        </Header>
        <Content>
          {data.map((item, index) => (
            <Transaction key={index}>
              <NameDate>
                <strong>{item.name}</strong>
                <span>{item.date}</span>
              </NameDate>
              <Price>{item.amount}</Price>
            </Transaction>
          ))}
          <ActionButton>View All</ActionButton>
        </Content>
      </Card>
    </Container>
  );
};
