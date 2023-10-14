import axios from "axios";
import { useRef } from "react"

function Form() {
    const username = useRef();
    const password = useRef();

    async function submitHandler(e) {
        e.preventDefault();
        const enteredUsername = username.current.value;
        const enteredPassword = password.current.value;

        const response = await axios.post('/api/login', { username: enteredUsername, password: enteredPassword })

    }

    return (
        <form onSubmit={submitHandler}>
            <input ref={username} type="text" />
            <input ref={password} type="text" />
            <button>login</button>
        </form>
    )
}

export default Form
