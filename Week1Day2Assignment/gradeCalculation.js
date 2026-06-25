function getGrade(score) {

    switch (true) {

        case score >= 90:
            return "Grade A";

        case score >= 80:
            return "Grade B";

        case score >= 70:
            return "Grade C";

        case score >= 60:
            return "Grade D";

        default:
            return "Grade F";
    }
}


console.log(getGrade(10));