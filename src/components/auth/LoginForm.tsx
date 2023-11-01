import { TextInput } from "@tremor/react";

const LoginForm = () => {
    return(
        <>
            <TextInput placeholder="Type Email here" type="email" />
            <TextInput placeholder="Password..." type="password" />
        </>
    )
}

export default LoginForm;