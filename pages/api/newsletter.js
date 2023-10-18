export default function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        // validate 
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }

        // here we can talk to some backend api or database
        console.log(userEmail)
    }
}