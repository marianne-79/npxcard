const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear()

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:example@example.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Marianne Auquier"),
    handle: chalk.white(""),
    fact: chalk.hex('#B10000')("I'm not crazy, I just don't like you !"),
    github: chalk.hex('#787878')("https://github.com/marianne-79"),
    LinkedIn: chalk.hex('#00AB9E')("https://www.linkedin.com/in/mauquierwebdev/"),
    npx: chalk.hex('#A1AB00')("npx ma"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelLinkedIn: chalk.hex('#59FFC8').bold("        LinkedIn:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.LinkedIn}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Marianne, I'm a junior developer in learning " 
        )}`,
        `${chalk.bold("at BeCode Charleroi, here in Belgium. ")}`,
        `${chalk.bold(
            "I've never code before that and now I love it "
        )}`,
        `${chalk.bold(
            "I am currently undergoing a professional transition to web development and would like to give a new impetus to my career. !"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());