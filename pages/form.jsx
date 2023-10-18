import axios from "axios";
import { useRef } from "react"

function Form() {
    const username = useRef();
    const password = useRef();

    async function submitHandler(e) {
        e.preventDefault();
        const enteredUsername = username.current.value;
        const enteredPassword = password.current.value;

        fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: enteredUsername,
                password: enteredPassword
            })
        }).then(res => res.json()).then(data => console.log(data))
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
