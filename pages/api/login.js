export default function handler(req, res) {

    // check method type
    if (req.method === 'POST') {
        const userData = req.body;
        console.log(userData)
    }
}