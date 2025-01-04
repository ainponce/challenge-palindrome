const isPalindrome = (text) => {
    const normalized = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
};

export default { isPalindrome };