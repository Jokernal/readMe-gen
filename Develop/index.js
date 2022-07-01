// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import {generateMarkdown} from './utils/generateMarkdown.js';
console.log("This is your professional README generator");
console.log("Answer the following questions to generate a README that looks professional for your projects");

//import generateReadMe from './src/README.md';



// TODO: Create an array of questions for user input

   
        
  
    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What would you like the title of your README to be? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide a title!');
                    return false;
                }
                
            }
        },
      
        {
            type: 'input',
            name: 'description',
            message: 'Please leave a description for your README'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Pick a license suited for your project.',
            choices:['GNU', 'Apache', 'MIT', 'MPL 2.0', 'None'],
            validate: userLicense => {
                if (userLicense) {
                    return true;
                } else {
                    console.log('please select a license dork.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide guidelines for contribution'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide testing instructions'
        },
        {
            type: 'input',
            name: 'github',
            message:'Please provide github information in case any questions may come up! (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide a github!');
                    return false;
                }
                
            }
         
        },
        {
            type: 'input',
            name: 'email',
            message:'Please provide email information in case any questions may come up! (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide an email!');
                    return false;
                }
                
            }
         
        }

        


    ]
     
   




   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            return console.log(err);
        }else {
            console.log("File done been made");
        }

    
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
