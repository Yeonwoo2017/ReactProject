import React, { useState } from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";


const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
  padding: "24px",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const TopBar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

function App() {
  const [customers, setCustomers] = useState([
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
  ]);

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    gender: "",
    job: "",
    image: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Date.now(),
      ...formData,
      image: formData.image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
    };
    setCustomers([...customers, newCustomer]);
    setFormData({ name: "", birthday: "", gender: "", job: "", image: "" });
    setShowForm(false);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

 
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <StyledPaper>
      <TopBar>
        <Button variant="contained" color="secondary" onClick={handleToggleForm}>
          {showForm ? "입력 폼 닫기" : "고객 추가"}
        </Button>

        <TextField
          variant="outlined"
          placeholder="고객 이름 검색"
          size="small"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </TopBar>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: "24px", display: 'grid', gap: '12px' }}>
          <TextField name="name" label="이름" value={formData.name} onChange={handleChange} fullWidth />
          <TextField name="birthday" label="생년월일 (예: 990101)" value={formData.birthday} onChange={handleChange} fullWidth />
          <TextField name="gender" label="성별" value={formData.gender} onChange={handleChange} fullWidth />
          <TextField name="job" label="직업" value={formData.job} onChange={handleChange} fullWidth />
          <TextField name="image" label="이미지 URL (선택)" value={formData.image} onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained" color="primary">등록</Button>
        </form>
      )}

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCustomers.map((customer, index) => (
            <Customer
              key={customer.id}
              index={index+1}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
              onDelete={deleteCustomer}
            />
          ))}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;
