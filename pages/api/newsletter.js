export default function handler(req, res) {
    if (req.method === 'POST') {
        const username = req.body.username;
        const password = req.body.password;
        // validate 
        // if (!username || !username.includes('@')) {
        //     res.status(422).json({ message: 'Invalid email address' });
        //     return;
        // }

        // here we can talk to some backend api or database
        console.log(username, password)
        // send back response 
        res.status(201).json({ message: 'OK' })
    }
}