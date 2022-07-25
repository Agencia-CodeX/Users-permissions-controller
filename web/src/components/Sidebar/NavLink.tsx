import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon?: ElementType;
    children: string;
    href: string;
    hoverColor: string;
    shouldMatchExactHref?: boolean;
}

export function NavLink({ icon, href, children, hoverColor, shouldMatchExactHref = false, ...rest }: NavLinkProps) {
    return (
        <ActiveLink
            href={href} passHref
            shouldMatchExactHref
        >
            <Link
                w="full"
                h="80px"
                px="20px"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                boxShadow="0 5px 5px rgba(0,0,0,.3)"
                _hover={{
                    textDecoration: "none",
                    bgColor: hoverColor
                }}
                {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {children}
                </Text>
            </Link>
        </ActiveLink>
    );
}