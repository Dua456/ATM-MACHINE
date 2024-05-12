#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let mypin = 2244;
// print message
console.log("\n \t wellcome to 'code with Dua' - ATM MACHINE \n");
let pinAnswer = await inquirer.prompt([
    { name: "pinCode",
        type: "number",
        message: "Enter your pin."
    }
]);
if (pinAnswer.pinCode === mypin) {
    console.log("\n \tCorrect pin code, login Successfully!\n");
    let actionAnswer = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["Check Balance", "Withdraw", "FastCash"],
            message: "please your select option",
        }
    ]);
    if (actionAnswer.action === "Check Balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (actionAnswer.action === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw ?"
            }
        ]);
        //myBalance -= WithdrawAmount.amount
        if (WithdrawAmount.amount < myBalance) {
            myBalance -= WithdrawAmount.amount;
            console.log(`\n \t Withdraw Successfuly\n`);
            console.log(`your remaning balance is ${myBalance}`);
        }
        else if (WithdrawAmount.amount > myBalance) {
            console.log(`your balance is Insufficient`);
        }
    }
    else if (actionAnswer.action === "FastCash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                choices: ["2000", "3000", "4000", "5000"],
                message: "Choose your account!"
            }
        ]);
        myBalance -= cashAmount.cash;
        console.log(`your remaning balance is ${myBalance}`);
    }
}
else if (pinAnswer.pinCode !== mypin) {
    console.log("\n \tIncorrect pin code!, plz try again!\n");
}
