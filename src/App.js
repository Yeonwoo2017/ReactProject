import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled 컴포넌트 정의
const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=3",
    name: "박창영",
    birthday: "980630",
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=1",
    name: "홍길동",
    birthday: "901023",
    gender: "male",
    job: "cooker",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=10",
    name: "김수현",
    birthday: "950101",
    gender: "male",
    job: "actor",
  },
];

function App() {
  return (
    <StyledPaper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <Customer
              key={customer.id} // map 을 사용하려면 key 라는 속성이 있어야 함(안하면 Console창에 에러가 발생)
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          ))}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;