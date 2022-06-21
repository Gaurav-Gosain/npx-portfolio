#!/usr/bin/env node

'use strict'

const clear = require('clear');
const chalk = require('chalk');
const boxen = require('boxen');
const inquirer = require("inquirer");
const open = require('open');

clear();

const data = {
    name: chalk.green.bold("Gaurav Gosain"),

    work: `${chalk.white("First Class Graduate")} ${chalk.hex("#2b82b2").bold("BSc. Computer Science (Hons.), Specialized in AI")}`,
    labelWork: chalk.white.bold("Work:"),

    site: chalk.greenBright.bold("https://labsforhome.com/"),
    newSite: chalk.greenBright.bold("http://kitmeer-dev.vercel.app/"),
    newSite1: chalk.greenBright.bold("https://cerebroex.com/"),
    newSite2: chalk.greenBright.bold("https://aperture-by-octech.herokuapp.com/"),
    
    github: chalk.gray("https://github.com/") + chalk.green("Gaurav-Gosain"),
    labelGitHub: chalk.white.bold("GitHub:"),

    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("gaurav-gosain"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),

    npx: chalk.red("npx") + " " + chalk.white("gaurav"),
    labelCard: chalk.white.bold("Card:"),

    email: 'gauravgosain01@gmail.com',
    // resume_link: "https://drive.google.com/file/d/1k_g-D_Ylju8tLB4wwoU8D6LMoI9PP-TC/view?usp=sharing"
}

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.work}`,
        ``,
        `${data.site}`,
        `${data.newSite}`,
        `${data.newSite1}`,
        `${data.newSite2}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        align: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"

    }
);

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open(`mailto:${data.email}`);
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `See my ${chalk.magentaBright.bold("Github Profile")}?`,
                value: () => {
                    open(`https://github.com/${data.github}`);
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Let me outtt.",
                value: () => {
                    console.log("See ya.\n");
                }
            }
        ]
    }
];

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());