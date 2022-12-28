import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"

type ThreadProps = {
    title: string,
    author: string,
    date: string,
    img: string,
    caption: string
}

export default function Thread({title, author, date, img, caption}: ThreadProps) {
    return (
        <>
            <Box bgColor="red" maxW="800px" minW="container.md">
                <Box id="upperBar" bgColor="green" display="flex" justifyContent="space-between" paddingX="1">
                    <VStack spacing="1">
                        <HStack spacing="0px">
                        <Heading as="h3" fontSize="md">Title:</Heading>
                        <Text fontSize="md">{title}</Text>
                        </HStack>
                        <HStack spacing="0px">
                        <Heading as="h3" fontSize="md">Author:</Heading>
                        <Text fontSize="md">{author}</Text>
                        </HStack>
                    </VStack>
                    <VStack spacing="0px">
                        <Text fontSize="md">Date:</Text>
                        <Text fontSize="xs">{date}</Text>
                    </VStack>
                </Box>
                <Box id="threadBody" bgColor="" padding="3" display="">
                    <Image src={img} alt="img" w="fit-content" h="fit-content" float="left" padding="2" />
                    <Text bgColor="" color="white">
                        {caption}
                    </Text>
                </Box>
            </Box>
        </>
    )
}