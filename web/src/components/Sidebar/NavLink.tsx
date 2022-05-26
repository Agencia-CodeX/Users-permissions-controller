import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
    icon?: ElementType;
    children: string;
    active?: boolean;
    hoverColor: string;
}

export function NavLink({ icon, children, active = false, hoverColor, ...rest }: NavLinkProps) {
    return (
        <Link
            w="full"
            h="80px"
            px="20px"
            bgColor={active ? 'lightBlue.100' : 'darkblue.50'}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            boxShadow="0 5px 5px rgba(0,0,0,.3)"
            _hover={{
                textDecoration: "none",
                bgColor: hoverColor
            }}
            {...rest}
        >
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
                {children}
            </Text>
        </Link>
    );
}