import inquirer from "inquirer";
let roll = await inquirer.prompt({
    type: "number",
    name: "num",
    message: "please enter your roll number"
});
let rollNum = roll.num;
if (rollNum == 7777) {
    let marks = await inquirer.prompt([
        {
            name: "typescript",
            type: "number",
            message: "please enter your typescript number"
        },
        {
            name: "HTML",
            type: "number",
            message: "please enter your HTML number"
        },
        {
            name: "CSS",
            type: "number",
            message: "please enter your CSS number"
        }
    ]);
    console.log(marks);
    let ts = marks.typescript;
    let html = marks.HTML;
    let css = marks.CSS;
    let totalMarks = 300;
    let obtainMarks = ts + html + css;
    let percent = ((obtainMarks / totalMarks) * 100);
    if (percent >= 80 && percent <= 100) {
        console.log("your grade is: A+");
    }
    else if (percent >= 70 && percent <= 79) {
        console.log(" your grade is :A");
    }
    else if (percent >= 60 && percent <= 69) {
        console.log("your grade is: B");
    }
    else if (percent >= 50 && percent <= 59) {
        console.log("your grade is : C");
    }
    else {
        console.log("failed");
    }
    //answers
    console.log("Name: Amna");
    console.log("Father name:Ashraf ali");
    console.log(`Typescript marks = ${ts} out of 100`);
    console.log(`HTML marks = ${html} out of 100`);
    console.log(`CSS marks = ${css} out of 100`);
    console.log(`obtain Marks = ${obtainMarks} Total Marks = ${totalMarks}`);
    console.log(`percentage = ${percent}`);
}
else {
    console.log('Invalid Roll Number');
}
