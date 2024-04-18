import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { executeCode } from '../api';

const Runner = ({ editorReference, language }) => {

    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const runCode = async () => {

        const code = editorReference.current.getValue();
        if (!code) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, code);
            setOutput(result.output)
        } catch (error) {
            console.log(error);
            toast({
                title: "Uh Oh! This is embarassing, an unknown error occured.",
                description: error.message || "Our services are unable to run your code.",
                status: "error",
                duration: 6000
            })
        } finally {
            setIsLoading(false);
        }
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
                isLoading={isLoading}
                onClick={runCode}
            >
                Run this Code
            </Button>
            <Box h='75vh'
                p={2}
                border='1px solid'
                borderRadius={4}
                borderColor="#9B51E0"
                color='white'
            >
                {
                    output ? output : "Click Run this code to check the output"
                }
            </Box>
        </Box>
    )
}

export default Runner