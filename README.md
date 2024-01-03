## _*DAY 6 TASK SUMMITION*_

### Question 1:

##### _The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:_

##### I. title, which is a String representing the title of the movie

##### II. studio, which is a String representing the studio that made the movie

##### III. rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

###### a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,and a String representing the rating as its arguments, and sets the respective class properties to these values.

###### b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

###### c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

###### d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

#### CREATE A JS FILE `movie-class.js`.

### Codes:

#### Frist step:

```
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}


```

#### Second step:

```
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
```

#### Third step:

```
const movies = [
  new Movie("The Aviator", "Warner Bros", "PG-13"),
  new Movie("The Lion King", "Disney", "G"),
  new Movie("Beauty and the Beast", "Disney"),
  new Movie("Spirited Away", "Disney", "PG"),
];

```

#### Getting PG rating movies:

```
const PGratingmovies = Movie.getPG(movies);

console.log(casinoRoyale);
console.log(PGratingmovies);
```

### Question 2:

##### _Convert the UML diagram to Javascript class._

#### CREATE A JS FILE `circle-class.js`.

### Codes:

```
class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    return (this.radius = radius);
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    return (this.color = color);
  }
  toString() {
    return `circle [radius = ${this.radius}, color = ${this.color}]`;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

```

#### Getting Results:

```
const results = new Circle();

console.log("getradius :", results.getRadius());
console.log("setradius :", results.setRadius(4));
console.log("getcolor :", results.getColor());
console.log("setcolor :", results.setColor("orange"));
console.log("tostring :", results.toString());
console.log("Area :", results.getArea().toFixed(2));
console.log("Circunference:", results.getCircumference().toFixed(2));
```

### Question 3:

##### _Write a “person” class to hold all the details._

#### CREATE A JS FILE `person-class.js`.

### Codes:

```
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

```

#### Getting Person details:

```
const Persondetails = new Person();
console.log(Persondetails);

```

### Question 4:

##### _write a class to calculate the Uber price._

#### CREATE A JS FILE `uberprice-class.js`.

### Codes:

```
class Ubercar {
  constructor(
    car = "maruthi",
    model = "SUV",
    color = "Black",
    carNumber = "TN 63 BW 8989",
    seating = 6
  ) {
    this.car = car;
    this.model = model;
    this.color = color;
    this.carnumber = carNumber;
    this.seating = seating;
  }

  getPrice(km, season, waitpermin) {
    const basefare = 50;
    const costperkm = 12;
    const bookingfee = 30;
    const waitingfee = 5;
    if (season == "normal") {
      if (waitpermin > 0) {
        return basefare + costperkm * km + bookingfee + waitingfee * waitpermin;
      } else {
        let fare = basefare + costperkm * km + bookingfee;
        return fare;
      }
    } else {
      if (season == "rain") {
        if (waitpermin > 0) {
          return (
            (basefare + costperkm * km + bookingfee + waitingfee * waitpermin) *
            2
          );
        } else {
          let rainfare = (basefare + costperkm * km + bookingfee) * 2;
          return rainfare;
        }
      }
    }
  }
}

```

#### Calculating Results:

```
const cardetails = new Ubercar();

// car details
console.log(cardetails);

// calculating prices
console.log("normal season fare:", cardetails.getPrice(10, "normal"));
console.log("rainy season fare:", cardetails.getPrice(10, "rain"));
console.log(
  "rainy season fare include waiting:",
  cardetails.getPrice(10, "rain", 5)
);
console.log(
  "normal season fare including waiting:",
  cardetails.getPrice(10, "normal", 5)
);

```
