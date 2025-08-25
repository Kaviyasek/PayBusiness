import{ useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  DownloadButton,
  SearchSection,
  SearchInput,
  SearchIcon,
  InfoSection,
  TimerWrapper,
  TimerIcon,
  InfoText,
  SettleButton,
  SettleButtonIcon,
  SettleButtonText,
  TableWrapper,
  Table,
  TableRow,
  TableHeader,
  TableData,
  StatusTag,
  ViewLink,
  Pagination,
  PageNumber,
  PageArrow,
} from "./style";
import axios from "axios";

export const SettlementHistory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

  const fetchData = async (pageNumber = 0) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "http://64.227.189.27/wallet/api/v1/transaction_history",
        {
          params: {
            service_id: 111,
            page: pageNumber,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const transactions = response.data.transactions || [];
      setData(transactions);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <Container>
      <Header>
        <Title>Settlement History</Title>
        <DownloadButton>Download statement</DownloadButton>
      </Header>

      <SearchSection>
        <SearchInput placeholder="Search" />
        <SearchIcon></SearchIcon>
      </SearchSection>

      <InfoSection>
        <TimerWrapper>
          <TimerIcon></TimerIcon>
          <InfoText>
            Today’s total collection will be auto-settled by{" "}
            <strong>08:00AM, 23rd Oct’22</strong> Tomorrow.
          </InfoText>
        </TimerWrapper>
        <SettleButton>
          <SettleButtonIcon></SettleButtonIcon>
          <SettleButtonText>Settle Now!</SettleButtonText>
        </SettleButton>
      </InfoSection>

      <TableWrapper>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Date & Time</TableHeader>
                <TableHeader>Account</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Details</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {data.length === 0 && (
                <TableRow>
                  <TableData colSpan={6}>No transactions found.</TableData>
                </TableRow>
              )}
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{row.user_name || "N/A"}</TableData>
                  <TableData>{row.date || row.timestamp}</TableData>
                  <TableData>{row.account_type || "🪙"}</TableData>
                  <TableData>{row.amount || "₹0"}</TableData>
                  <TableData>
                    <StatusTag status={row.status}>{row.status}</StatusTag>
                  </TableData>
                  <TableData>
                    <ViewLink>View</ViewLink>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </TableWrapper>

      <Pagination>
        <PageArrow disabled={page === 0} onClick={() => setPage(page - 1)}>
          {"<"}
        </PageArrow>
        {[...Array(totalPages)].map((_, i) => (
          <PageNumber key={i} active={i === page} onClick={() => setPage(i)}>
            {i + 1}
          </PageNumber>
        ))}
        <PageArrow
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </PageArrow>
      </Pagination>
    </Container>
  );
};
