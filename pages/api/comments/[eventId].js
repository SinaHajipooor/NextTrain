export default function handler(req, res) {

    // get the event Id that is in the api url
    const eventId = req.query.eventId;

    // save comment
    if (req.method === 'POST') {
        // extract comments info 
        const { email, name, text } = req.body;

        // server side validation
        //.........  

        // talk to database or a backend api 
        //........
        console.log(email, name, text);

        res.status(201).json({ message: 'comment has been added' })
    }

    // get comment 
    if (req.method === 'GET') {
        // send back the comments list from a backend api or a database
        //........  
        const dummyComments = []
        res.status(200).json({ message: 'Comments has been fetched successfully', comments: dummyComments })

    }
}