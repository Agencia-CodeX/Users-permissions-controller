import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface BoxNotificationProps {
    icon: ElementType;
    content: string;
    count: string;
    color?: boolean;
}

export function BoxNotification({ icon, content, count, color = false }: BoxNotificationProps) {
    return (
        <Flex>
            <Link
                display="flex"
                flexDirection="column"
                alignItems="center"
                h="140px"
                backgroundColor={color ? 'red.500' : 'darkBlue.100'}
                flex-flexDirection="col"
                borderRadius="4px"
                minW="200px"
                p="10px"
                gap="10px"
                _hover={{backgroundColor: color ? 'red.700' : 'lightBlue.100' }}
            >
                <Icon as={icon} fontSize="40px" />
                <Text as="h1">{content}</Text>
                <Text>{count}</Text>
            </Link>
        </Flex>
    );
}