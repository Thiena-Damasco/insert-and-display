const print = {
    index: (req, res) => {
        res.render('index');
    },
    save: (req, res) => {
        const date = req.body;
        console.log(data);
    }
};

module.exports = print;