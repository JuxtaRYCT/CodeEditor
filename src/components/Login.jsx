import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const formBackground = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(23, 25, 35, 0.8)");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();


    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login Successful");
            history.push('/home');
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <Flex
            minHeight="100vh"
            width="full"
            align="center"
            justifyContent="center"
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Box
                p={6}
                borderRadius="lg"
                bg={formBackground}
                boxShadow="2xl"
                width="100%"
                maxW="md"
                backdropFilter="blur(10px)"
            >
                <VStack spacing={4} as="form" onSubmit={handlesubmit}>
                    <Text fontSize="2xl" fontWeight="semibold" color="orange.400">Welcome Back! </Text>
                    <FormControl isRequired >
                        <FormLabel htmlFor="email" color="orange.600">Email</FormLabel>
                        <Input id="email" type="email" placeholder="Enter your email" focusBorderColor="orange.400" onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password" color="orange.600">Password</FormLabel>
                        <Input id="password" type="password" placeholder="Enter your password" focusBorderColor="orange.400" onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <Button colorScheme="orange" width="full" mt={4} type="submit">
                        Login
                    </Button>
                    <Text mt={6} color="gray.600">
                        Don't Have an account?{' '}
                        <Link to="/auth">
                            Sign Up
                        </Link>
                    </Text>
                </VStack>

            </Box>

        </Flex>

    );
};

export default Login;




