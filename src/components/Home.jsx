import React from 'react';
import {
    Button,
    Box,
    HStack,
    Icon,
    Heading,
    Center,

} from '@chakra-ui/react';
import { FaCode, FaPencilRuler } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleNavigateToCode = () => {
        history.push('/code');
    };

    const handleNavigateToCanvas = () => {
        history.push('/canvas');
    };

    return (

        <Box >

            <div>

                <Heading mb={10} color="orange.400">Welcome Back</Heading>
                <Center>
                    <HStack spacing={8}>
                        <Button
                            // colorScheme="orange"
                            leftIcon={<Icon as={FaCode} />}
                            fontSize="xl"
                            shadow="md"
                            width="250px"
                            height="200px"
                            borderRadius="15px"
                            onClick={handleNavigateToCode}
                        >
                            Start Coding
                        </Button>
                        <Button
                            // colorScheme="orange"
                            leftIcon={<Icon as={FaPencilRuler} />}
                            fontSize="xl"
                            shadow="md"
                            width="250px"
                            height="200px"
                            borderRadius="15px"
                            onClick={handleNavigateToCanvas}
                        >
                            Design Algorithms
                        </Button>
                    </HStack>
                </Center>


            </div>


        </Box>
    );
};

export default Home;
