I've written this code for infamous mars rover problem using TDD (red green refactor approach). You can find problem statement here https://code.google.com/archive/p/marsrovertechchallenge.

Here's a quick explaination about on what's happening in the code and patterns we've used.

We have a few entities here namely Rover Class, Plateau Class, Validate Function, Explore Function.

### Rover: 
We've created a rover class using which we can create rover objects. Basically, all of them will have access to move method of rover class which takes in plateau and instruction in turn asking rover to move based on given instruction on provided plateau.

### Plateau: 
We have created a class plateau using which we can create plateau objects with different x and y coordinates. It has 2 methods that gives us x and y coordinates of plateau respectively.

### Validate: 
This is a helper or utility function which simply validates if rover's current x and y coordinates falls within plateau range else it throws error.

### Explore: 
Explore is a function that has all the logic for executing given instruction. It takes in rover's current position (coordinates and direction), instruction string, and plateau object which is to be explored. So, it's completely independent of these parameters. You can pass in rover's current position, any intruction, any plateau and it'll give latest position of rover after executing instructions. The only contant entities in this function are compass and validate function which is not going to change, so we don't need to add them as dependency.

Here, we're mainly making use of **Dependency Injection Design Pattern**. The control of how to move and where to move the rover is in hands of client (invoker). So, we have loosely coupled entities which we can modify without affecting one another and we can reuse, test them easily. Further, we can also implement *command design pattern* such that commands 'L', R', and 'M' can be act different if need be but given the problem statement, our goal is clear and using extra layers of abstraction is unnecessary.
