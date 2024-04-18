import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Runner = ({ editorReference, language }) => {

    const runCode = async () => {
        const code = editorReference.current.getValue();
    }

    return (
        <Box w='50%'>
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
                borderColor="#9B51E0"
            >
                Yash Raj Singh
            </Box>
        </Box>
    )
}

export default Runner