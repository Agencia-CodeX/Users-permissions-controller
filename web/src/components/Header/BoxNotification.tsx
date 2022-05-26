import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface BoxNotificationProps {
    icon: ElementType;
    content: string;
    count: string;
    buttonColor: string;
    hoverColor: string;
}

export function BoxNotification({ icon, content, count, buttonColor, hoverColor }: BoxNotificationProps) {
    return (
        <Flex>
            <Link
                display="flex"
                flexDirection="column"
                alignItems="center"
                minW="200px"
                h="140px"
                bgColor={`${buttonColor}`}
                flex-flexDirection="col"
                borderRadius="4px"
                p="10px"
                gap="10px"
                _hover={{ backgroundColor: hoverColor }}
            >
                <Icon as={icon} fontSize="40px" />
                <Text as="h1">{content}</Text>
                <Text>{count}</Text>
            </Link>
        </Flex >
    );
}