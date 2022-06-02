import { Flex, Box, Heading, Link, Table, Thead, Tr, Th, Checkbox, useBreakpointValue, Tbody, Spinner, Td, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormLabel, Select, Button, } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";

export default function Users() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data, isLoading, isFetching, error } = useUsers("users", getUsers, 10);

    const isWideVersion = useBreakpointValue({
        base: false,
        xl: true,
    })

    return (
        <Flex w="100%">
            <Sidebar />
            <Flex w="100%" flexDirection="column">
                <Header />
                <Box
                    w="90%"
                    backgroundColor="darkBlue.100"
                    borderRadius="lg"
                    mt="20px"
                    mx="auto"
                    p={{ base: "0", md: "60px" }}
                >
                    <Flex
                        align="center"
                        justify="space-between"
                        p="30px"
                    >   
                        <Flex gap="20px" alignItems="center">
                            <Heading>Usuarios</Heading>
                            {!isLoading && isFetching && (<Spinner/>)}
                        </Flex>
                        <Link
                            onClick={onOpen}
                            w="100px"
                            textAlign="center"
                            lineHeight="40px"
                            h="40px"
                            backgroundColor="lightBlue.50"
                            borderRadius="lg"
                            _hover={{
                                textDecoration: "none",
                                backgroundColor: "lightBlue.100",
                            }}
                        >
                            Criar novo
                        </Link>
                    </Flex>
                    {isLoading
                        ? <Flex w="90%" h="40vh" align="center" justify="center">
                            <Spinner />
                        </Flex>
                        :
                        <Table>
                            <Thead>
                                <Tr borderBottom={{ base: "none" }}>
                                    <Th><Checkbox backgroundColor="darkBlue.100" /></Th>
                                    <Th>Usuario</Th>
                                    {isWideVersion && (<Th>Função</Th>)}
                                    {isWideVersion && (<Th>Data de cadastro</Th>)}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map(user => {
                                    return (
                                        <Tr key={user.id}>
                                            <Td><Checkbox backgroundColor="darkblue.100" /></Td>
                                            <Td>{user.name}</Td>
                                            <Td>{user.role}</Td>
                                            {isWideVersion && (<Td>{user.createdAt}</Td>)}
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    }
                </Box>
                <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                    size={"3xl"}
                >
                    <ModalOverlay />
                    <ModalContent
                        backgroundColor="darkBlue.100"
                        p="40px"
                    >
                        <ModalHeader>Cadastre um novo usuario</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form>
                                <Flex gap="20px">
                                    <Input name="name" type="text" label="Nome" />
                                    <Input name="email" type="email" label="Email" />
                                </Flex>
                                <Box mt="20px">
                                    <FormLabel htmlFor="role">Função exercida</FormLabel>
                                    <Select id="role"  mt="20px">
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                        <option style={{ color: 'white', backgroundColor: "#212936" }}>placeholder</option>
                                    </Select>
                                </Box>
            
                                <Button 
                                    w="full"
                                    h="80px"
                                    px="20px"
                                    mt="40px"
                                    borderRadius="lg"
                                    display="flex"
                                    alignItems="center"
                                    backgroundColor="lightBlue.100"
                                    justifyContent="center"
                                    boxShadow="0 5px 5px rgba(0,0,0,.3)"
                                    _hover={{
                                        textDecoration: "none",
                                        backgroundColor:"lightBlue.50"
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex>
    )
}