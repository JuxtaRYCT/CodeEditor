import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Runner = () => {
    return (
        <Box>
            <Text mb={2} fontSize='large'>
                Output
            </Text>
            <Button
                variant='outline'
                colorScheme='green'
                mb={4}
            >
                Run this Code
            </Button>
            <Box h='75vh'
                p={2}
                border='1px solid'
                borderRadius={4}
                borderColor="#262626"
            >
                Yash Raj Singh
            </Box>
        </Box>
    )
}

export default Runner