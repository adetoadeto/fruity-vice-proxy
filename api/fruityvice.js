export default async function handler(req, res) {
    const {endpoint = 'fruit/all'} = req.query;

    try {
        const response = await fetch(`https://www.fruityvice.com/api/${endpoint}`);
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from Fruityvice API' });
    }
}