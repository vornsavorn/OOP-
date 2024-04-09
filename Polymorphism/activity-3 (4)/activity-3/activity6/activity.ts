enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}

enum Major {
    WEB = "Web",
    SNA = "SNA"
}

enum Topic {
    JAVASCRIPT = "JavaScript",
    PHP = "PHP",
    HTML = "HTML",
    TS = "TS",
    VUE = "VUE",
}

class Student {
    constructor(
        public name: string,
        public gender : Gender,
        public major: Major
    ) {
        this.name = name;
        this.gender = gender;
        this.major = major;
    }
}

class Result {
    constructor(
        public student: Student,
        public topic: Topic,
        public score: number
    ) {
        this.student = student;
        this.topic = topic;
        this.score = score;
    }
}

let student1 = new Student("Vorn Savorn", Gender.FEMALE, Major.SNA);
let result1 = new Result(student1, Topic.PHP, 90);
console.log(result1);

