import { Avatar, Flex, Text } from "@chakra-ui/react";

export function SidebarProfile() {
    return (
        <Flex
            mx="auto"
            my="30px"
            w="80%"
            h="200px"
            maxW="80"
            borderRadius="2xl"
            bgColor="darkBlue.50"
            flexDirection="column"
            alignItems="center"
            gap="5"
            boxShadow="0 5px 5px rgba(0,0,0,.3)"
        >
            <Avatar
                mt="20px"
                name="Gustavo Soares"
                src="https://github.com/zankei1.png"
            />
            <Text as="strong">
                Gustavo Soares
            </Text>
            <Text as="h1">
                Função exercida
            </Text>
        </Flex>
    );
}