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
            "xdescribe",
            "it",
            "xit",
            "sinon",
            "beforeEach",
            "afterEach",
            "jasmine"
        ]
    }
};