import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, VStack, HStack, Button, Input, Select, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-01', amount: 200, type: 'Income', category: 'Nike' },
    { id: 2, date: '2023-10-02', amount: 150, type: 'Expense', category: 'Adidas' },
  ]);
  const [form, setForm] = useState({ id: null, date: '', amount: '', type: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (form.id) {
      setTransactions(transactions.map(t => t.id === form.id ? form : t));
    } else {
      setTransactions([...transactions, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, date: '', amount: '', type: '', category: '' });
  };

  const handleEdit = (transaction) => {
    setForm(transaction);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={5}>Sneaker Accounting App</Heading>
        <VStack spacing={4} mb={5}>
          <HStack spacing={3}>
            <Input placeholder="Date" name="date" value={form.date} onChange={handleChange} />
            <Input placeholder="Amount" name="amount" value={form.amount} onChange={handleChange} />
            <Select placeholder="Type" name="type" value={form.type} onChange={handleChange}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Select>
            <Select placeholder="Category" name="category" value={form.category} onChange={handleChange}>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
            </Select>
            <Button onClick={handleSubmit}>{form.id ? 'Update' : 'Add'} Transaction</Button>
          </HStack>
        </VStack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map(transaction => (
              <Tr key={transaction.id}>
                <Td>{transaction.date}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.type}</Td>
                <Td>{transaction.category}</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton icon={<FaEdit />} onClick={() => handleEdit(transaction)} />
                    <IconButton icon={<FaTrash />} onClick={() => handleDelete(transaction.id)} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default Index;