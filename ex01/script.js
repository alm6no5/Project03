function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    return age >= 18 && hasTicket === true;
}

console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(0));
console.log(calculateGrade(100));
console.log(calculateGrade("90"));

console.log(checkAccess(22, true));
console.log(checkAccess(17, true));
console.log(checkAccess(22, false));
