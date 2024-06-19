import { Box, Flex, Link, Button, useDisclosure, Stack } from '@chakra-ui/react';
import { MdMenu as HamburgerIcon, MdClose as CloseIcon } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Sneaker Accounting</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7} display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/inventory" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }}>
              Inventory
            </Link>
            <Link as={RouterLink} to="/sales" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }}>
              Sales
            </Link>
            <Link as={RouterLink} to="/reports" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }}>
              Reports
            </Link>
          </Stack>
          <Button
            size="md"
            onClick={isOpen ? onClose : onOpen}
            display={{ md: 'none' }}
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
            <Link as={RouterLink} to="/inventory" onClick={onClose}>Inventory</Link>
            <Link as={RouterLink} to="/sales" onClick={onClose}>Sales</Link>
            <Link as={RouterLink} to="/reports" onClick={onClose}>Reports</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;