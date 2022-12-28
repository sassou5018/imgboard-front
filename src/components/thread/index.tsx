import { useState } from 'react';
import { Flex, Grid, Heading, Text, Image, Stack, Link, AspectRatio } from '@chakra-ui/react';
import {Link as RouterLink} from '@tanstack/react-router'

type ThreadProps = {
    title: string,
    author: string,
    date: string,
    imageUrl: string,
    text: string,
    id: Number
}

export default function Thread({ title, author, date, imageUrl, text, id }:ThreadProps){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex p={4} shadow="md" borderWidth="1px" _hover={{ bg: 'gray.100' }} onClick={() => setIsExpanded(!isExpanded)} w="full">
      <Grid templateColumns="1fr 2fr" gap={4}>
        {!isExpanded &&<AspectRatio w="100%" ratio={16/9}>
          {imageUrl && <Image src={imageUrl} alt="image" />}
        </AspectRatio>}
        {imageUrl && isExpanded && <Image src={imageUrl} alt="image" />}
        <Stack>
          <RouterLink to={`/${id}`}><Link as="h3" size="lg" href="#" _hover={{ color: 'teal.500' }}>{title}</Link></RouterLink>
          <Text fontSize="sm">
            Author: {author} | Date: {date}
          </Text>
          {isExpanded && <Text mt={4}>{text}</Text>}
        </Stack>
      </Grid>
    </Flex>
  );
};