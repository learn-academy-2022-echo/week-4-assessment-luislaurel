# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: In my experience working with Ruby, OOP revolves around the idea of making programming easier by storing data inside of Objects. When this data is stored in an Object we are then able to access it at any point in our projects. So we could just have a main Object and then create an instance of it in order to modify it. A difference from functional programming would be that we aren't able to make changes to our function without it affecting the entirety of our code. We also use functions to take our input and create new output. So I think the main difference would be functions being reusable but having to create complete new ones for different behaviors. And creating new instances of the same Object when we want to modify that data. Although I believe I will need to work with more projects in order to see the benefits from each one myself.

Researched answer:
 OOP revolves around creating reusable code with the use of classes and Objects. Objects are modeled around real objects, where classes are just blueprints for them. Methods are used to add different behaviors and attributes. We end up creating new variables based off those Objects. It makes it easier for Developers to create larger, complex programs. I've learned that Attributes are the state of an Object, and are the characteristics of it. The difference is that in Functional programming data and behavior are separate from each other while an Object will intersect the two.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby a Float is a number that has a decimal, while a Integer is a whole number. An example of Float would be 3.3333 and a Integer would be 3. In order for us to get a Float value in Ruby we must  insert a decimal. So 10.00 / 5 would be 2.0 . this is a Float. 10 / 5 = 2 and this is a Integer. The simplest terms would be Float is a non whole number and an Integer is a whole number.

Researched answer: They are both different types of numerical data, Floats have decimals. Integers are whole numbers. So we would use a Float when we want a more precise answer. I've learned that a Integer can be written in 3 numbers systems. Decimal, Octal and Hexadecimal. A Float can only be written as decimal.

3. Ruby has an implicit return. What does that mean?

Your answer: From what I've gathered so far in my work with Ruby, it is just a way to return the value without using any keywords. An example would be

def implicit_return
 'This is a implicit return'
 end

p implicit_return

 I would still get my string, but I could have also used return before it. The outcome would be the same.

Researched answer: A return is implied when we use an implicit return. So it just means we don't use the keyword return. 

4. What is a block in Ruby?

Your answer:
Blocks are functions we pass into a method in order to get a value. The beginning keyword is do and ending is END. These are both needed. The different methods you will use within the function will need parameters that must be inside of pipes | | . For example an each method. 

num = [1,2,3]

num.each do |num|
 p num * 5
end 

Researched answer: Blocks are anonymous functions that we pass into a method to get a value. They are defined using an DO and END statement. I've learned that they can also be defined using curly braces { }. But this would be considered a single line definition, so its used for a single line code block. We use a DO/END for a multi-line code block.
5. What is an instance variable in Ruby?


Your answer: An instance variable is how we create access to that variable from anywhere inside of our class, this means we can also access that variable outside. But only if we that variable trying to access it from outside was given access to that class. This also goes into the scope of it, they are locally scoped as they are only inside of our Object. The way we name the variable is using the @ symbol, so @varname.
Researched answer:
We use instance variables that are locally scoped to store data, this is apart of Encapsulation. Which means that the data in one Object is protected from another Object. 
## Looking Ahead: Terms for Next Week

1. PostgreSQL: Tt is a open-source, database management system. It's used as a data warehouse for most applications.

2. Ruby on Rails: It is a server-side web application framework written in Ruby. It helps build websites.

3. ORM: the bridge between databases and object oriented programming.

4. Active Record: Is ORM with Rails. Mapping between database tables and application objects.

5. Migrations:
Migrating data from one or mor source databases to another database.