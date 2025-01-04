import history from '../models/historyModel.js';
import textServices from '../services/textServices.js';

const { isPalindrome } = textServices;

const checkPalindrome = (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "El texto es requerido" });
    }

    const result = isPalindrome(text);
    history.add(text);
    res.json({
        text,
        isPalindrome: result,
        history: history.getAll()
    });
};

export default { checkPalindrome };