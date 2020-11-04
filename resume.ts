function displayPosition(company, job, desc) {
    console.log(" * " + job +" at " + company + "- " + desc);
}
function displaySkill(skill, isCool) {
    if (isCool == true) {
        console.log("*BAM:" + skill);
    } else {
        console.log(skill);
    }
}

console.log("Name: Tsigereda Tekle".toUpperCase());
console.log("Career: Teacher Assistant");
console.log("Discription: I take any job seriously");

console.log("My Interests:");
console.log("Travel");
console.log("Read");
console.log("Video editing");
console.log("Cooking");

console.log("My Previous expriences:");
displayPosition("Montessori 1 ","Assistant Teacher ", "Teaching");
displayPosition("Montessori 2","Assistant Teacher ", "Teaching");
displayPosition("Montessori 3","Assistant Teacher ", "Teaching");

console.log("My skill:");
displaySkill("Teaching", true);
displaySkill("Walking", false);
displaySkill("Gardening", false);
displaySkill("Writting", true);
displaySkill("Exercising", false);