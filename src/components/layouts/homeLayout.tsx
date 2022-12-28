import { Box, VStack, Center } from "@chakra-ui/react"

type HomeLayoutProps = {
    children: React.ReactNode
}

export default function HomeLayout({children}: HomeLayoutProps) {
    return(
        <>
        <Box marginTop="3" padding="3" as="main">
            <Center>
            <VStack w="container.lg">
            {children}
            </VStack>
            </Center>
        </Box>
        </>
    )
}