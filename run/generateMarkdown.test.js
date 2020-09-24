const generateMarkdown = require("../tools/markdown");

const data = {
    name: "name",
    license: "license",
    description: "description",
    screenshot: "screenshot",
    install: "install",
    usage: "usage",
    test: "test",
    homePage: "homePage",
    language: "language",
    github: "github",
    author: "author",
    email: "email"
}

describe("generateMarkdown", () => {
    test("get the user input", () => {
        expect(generateMarkdown(data)).toEqual(`# ${ data.name }
[![License: ${ data.license }](https://img.shields.io/badge/License-${ data.license }-blue.svg)](https://opensource.org/licenses/${ data.license })

![screenshot](${ data.screenshot })

### Project Description
\`\`\`md
${ data.description }
\`\`\`

### Install
\`\`\`md
${ data.install }
\`\`\`

### Usage
\`\`\`md
${ data.usage }
\`\`\`

### Language
\`\`\`md
${ data.language }
\`\`\`

### Test
\`\`\`md
${ data.test }
\`\`\`

## About
* Project Home Page: ${ data.homePage }
* Project Github: ${ data.github }
* Author: [\`${ data.author }\`](https://github.com/${ data.author })

## Questions
*  For more question please contact me: ${ data.email }


`);
    });
});