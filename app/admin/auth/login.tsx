import React, { useState } from "react";
import { Heading, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import checkCredentials from "../../../services/GET/checkCredentials";

interface LoginProps {
    updateLoginState: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ updateLoginState }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleFormSubmit = async () => {

        const res = await checkCredentials(username, password);

        if (res === true) {
            updateLoginState(username, password);
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        };
    };
    
    return ( 
        <div id="Login">
            <div id="LoginContainer">
                <div id="LoginHeaderContainer">
                    <Heading id="LoginHeader">Admin Login</Heading>
                </div>
                <div id="LoginInputContainer">
                    <Input id="LoginNameInput" placeholder="Username" variant="filled" onChange={(e) => setUsername(e.target.value)} />
                    <InputGroup id="LoginPasswordInputContainer">
                        <Input 
                            id="LoginPasswordInput"
                            type={ showPassword ? "text" : "password" }
                            placeholder="Password"
                            variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement id="LoginPasswordButtonContainer">
                            <Button id="LoginPasswordButton" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <div id="LoginButtonContainer">
                    <Button id="LoginButton" colorScheme="blue" onClick={handleFormSubmit}>Login</Button>
                </div>
                <div id="LoginErrorContainer">
                    {showWarning && <p id="LoginError">Incorrect Credentials</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
