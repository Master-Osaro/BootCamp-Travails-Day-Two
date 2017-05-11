
    class Dogs  //super class delaration
    {
        constructor(breed, color_, lifeExpectancy, cost)//class constructor
       {
            this.breed = breed || "Dog Breed"; 
            this.color_ = color_ || "No Color" ;
            this.lifeExpectancy = lifeExpectancy  || "No Life Expectancy" ;
            this.cost = cost || "No Cost";
        }

        getInfo()

        {

            return `${this.breed} ${this.color_} ${this.lifeExpectancy} for ${this.cost}`;  

        }

    }

    class wildDogs extends Dogs //class wildDogs inherits from the dogs class

    {
       constructor(breed, color_, lifeExpectancy, cost)
        {
            super(breed, color_, lifeExpectancy, cost); 
            this.sprintSpeed = '2km/min';
            this.isHomeFriendly = false;            
        }

        getsprintSpeed()

        {

            return this.sprintSpeed;

        }
        
        isFriendly()
        {
           return this.isHomeFriendly

        }

        cost()
        {
            return  this.color_;  

        }

        details () 
        {

            console.log(' Dog breed is '+ this.breed + ',color' + this.color_ + '.It is available for '  + '$'+this.cost+ ' Life Expectancy is ' + this.lifeExpectancy);

        }
        getInfo(speed, unit)                                 //method overriding and overload a form of polymorphism. Overrides getinfo method from super class
        {
            console.log("Distance travelled every one hour is: " + speed + unit)
        }

    }

    

    class domesticDogs extends Dogs //inheritance

    {

        constructor(breed, color_, lifeExpectancy, cost) //class constructor
        {
            super(breed, color_, lifeExpectancy, cost);
            this.weightCapacity = weightCapacity;
        }
    }

let dog1 = new wildDogs('Wolf','white','3yrs',400)
console.log(dog1.getInfo(5, 'km/h'))                         //encapsulation using the getInfo method without needing to know how it works
