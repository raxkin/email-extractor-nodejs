module.exports = {
    containsArg: function (argToFind) {
        return process.argv.indexOf(argToFind) !== -1;
    },

    groupByName: function (original) {
        var uniqueEmails = [];
        original.forEach(function (value) {
            if (uniqueEmails.indexOf(value) === -1) {
                uniqueEmails.push(value);
            }
        });
        return uniqueEmails;
    }
};

