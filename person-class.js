class Person {
  constructor(
    fullName = "vasanth salomon",
    dob = "19.04.1999",
    number = 9566443153,
    email = "vasanthsalomonv1904@gmail.com",
    bscDegree = "Bachelor of Science in C & HA",
    mbaDegree = "Master of Business Administration in Human Resource Management",
    skills = "Javascript, python, github, Azure",
    certified = "Microsoft certified: Azure Fundamentals",
    linkedin = "www.linkedin.com/in/vasanth-salomon",
    gitHub = "https://github.com/vasanth0419/",
    address = "85/94A, alagapuri nagar ramnagar, devakottai, sivagangai.",
    state = "Tamilnadu",
    languages = "Tamil, English"
  ) {
    this.fullName = fullName;
    this.dob = dob;
    this.number = number;
    this.email = email;
    this.bscDegree = bscDegree;
    this.mbaDegree = mbaDegree;
    this.skills = skills;
    this.certified = certified;
    this.linkedin = linkedin;
    this.github = gitHub;
    this.address = address;
    this.state = state;
    this.languages = languages;
  }
}

const Persondetails = new Person();
console.log(Persondetails);
