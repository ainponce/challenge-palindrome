const history = [];

const add = (text) => {
    history.push(text);
};

const getAll = () => {
    return history;
};

export default { add, getAll };