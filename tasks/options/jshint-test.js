module.exports = {
    files: {
        src: [
            "test/**/*.js"
        ]
    },
    options: {
        "predef": [
            "define",
            "expect",
            "describe",
            "it",
            "xit",
            "sinon",
            "beforeEach",
            "afterEach",
            "jasmine"
        ]
    }
};