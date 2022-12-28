import {Link} from '@tanstack/react-router'
import {Box, Image, Heading, HStack} from '@chakra-ui/react'
export default function Navbar() {
    return (
        <Box as="nav" bgColor="" display="flex" padding="3">
            <Link to="/">
                <HStack>
                    <Image src="https://seeklogo.com/images/1/4chan-logo-620B8734A9-seeklogo.com.png" alt="logo" w="30px" h="30px" />
                    <Heading fontSize="xs" as="h1">ISAMMCHAN</Heading>
                </HStack>
            </Link>
        </Box>
    )
}