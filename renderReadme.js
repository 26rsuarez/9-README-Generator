//this object stores the logo and license description which will be accessed by the renderReadMe function
const licenseInfo = {
    "MIT license":{
        logo: "https://img.shields.io/badge/License-MIT-yellow.svg",
        licenseDescription: `Copyright <YEAR> <COPYRIGHT HOLDER>

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }, 
    "Apache License 2.0":{
        logo: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
        licenseDescription: `Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
    }, 
    "GNU General Public License (GPL)":{
        logo: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        licenseDescription: `<one line to give the program's name and a brief idea of what it does.>
        Copyright (C) <year>  <name of author>
    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    }, 
    "Mozilla Public License 2.0":{
        logo: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
        licenseDescription: "This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/."
    }, 
    
    "Eclipse Public License version 1.0":{
        logo: "https://img.shields.io/badge/License-EPL%201.0-red.svg",
        licenseDescription: `

        Simply including a copy of this Agreement, including this Exhibit A is not sufficient to license the Source Code under Secondary Licenses.
    
        If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.
    
        You may add additional accurate notices of copyright ownership.
        `
    }
}

//this function fills in the read me with their answers from the promp
function renderReadMe(answers){


    return `
    # ![License](${licenseInfo[answers.license].logo}) 

# ${answers.title}


### Table of Contents
**[Description](##description)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[Usage Instructions](#usage-instructions)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
**[Tests](#tests)**<br>
**[Questions](#questions)**<br>

## Description

${answers.description}

## Installation Instructions

${answers.installation}

## Usage Instructions

${answers.usage}

## License

${answers.license}

${licenseInfo[answers.license].licenseDescription}

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

Contact me at https://www.github.com/${answers.github}
or at ${answers.email}
`
}

module.exports = {
    renderReadMe
  };
