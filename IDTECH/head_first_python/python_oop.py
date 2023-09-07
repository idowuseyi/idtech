'''
There are 4 basic concept in OOP
Encapsulation
Abstraction
Inheritance
Polymorphism
Before OOP we have procedural programming which divide programs into functions. We have a data stored in a variable and functions that operates on the data. This style of programming is very simple and straight forward but as te functions increases, you might have to copy functions all over and then the whole thing is messed up. This is what we called spaghetti code. OOP came to solve this problem. It combine related functions into a unit, we called that unit a object. We referred to this variables as properties and the functions as methods.
An Example:
Say we have a car, it will have properties like make, model, color and also functions like start, stop and move.

But what of a real life example. Think of the local storage object in your browser, every browser has local storage. Local storage object has a property like length which returns the numbers of objects in the storage and methods like setitem and remove item.
In OOP we group related variables and functions that operate on them  into objects. This is what we called encapsulation.
'''

# Example of encapsulation
base_salary = 30_000
overtime = 10
rate = 20

def getWage(base_salary, overtime, rate):
    return base_salary + (overtime * rate)

    """In the above, we have what we called procedural. We have the variables on one side and the functions on the other side. They are decoupled. Now let's look at the object way to solve this
    """
    
class employee:
    base_salary: 30_000
    overtime: 10
    rate: 20
    
    def getWage(self):
        return base_salary + (overtime * rate)
    
'''
OOP way. We can have an employee object with 3 properties - base_salary, overtime and rate and a method called getWage
Why is this better? Look at the function getWage. This function has no parameters. This is because the parameters are already modelled as properties of the object. All the properties and methods of the object are highly related. One of the shortcoming of procedural programming are functions with many parameters. When you go OOP way your functions end up having fewer and fewer paramenters.
As uncle Bob says "The best functions are those with no parameters!" - Robert C Martin
The fewer the parameters the easier it is to maintain the function.
That is encapsulation
'''

# newe = employee()
# print(newe.getWage())

# 2. ABSTRACTION
'''
Think of a DVD player, this player has many things on the inside and a few buttons on the outside. When you press play, you pretty much do not care about what happens on the inside. All the complexity is on the inside. This is abstraction in practice.
In our code, we can hide some method and properties from the outside and this gives us a couple of benefits. It makes using the methods and properties attached to the object looks simpler. It gives simpler interface. It also helps to reduce impact of change. If we change an inner method, none of this changes will leak to the outside because we dont have any of the codes that touches this object outside their containing object. We may delete a method or its properties but none of this changes will impact the rest of the applications code.
So with abstraction we reduce the impact of change.
'''

# 3. INHERITANCE
'''
Inheritance is a mechanism that allows you to eliminate redundant code.
e.g think of html elements like textbox, select, chackbox all of this has a little thing in common, they should have properties like hidden, innerHTML and methods like click and focus. Now instead of redefining all this properties and methods for every type of HTML elements, we can define it once in a generic object called it HTML ELEMENT and have other objects inherit this objects and methods. SO inheritance helps us eliminate redundant code.
'''

# 4. POLYMORPHISM
'''
poly means Many and morphism means Form So Polymorphism means many form.
In OOp programming polymorphism is a technigue that allows you to get rid of long if and else or switch ans case statements. Back to our HTML example, all the HTML objects mentioned earlier should have the ability to be rendered on a page. But the way each element should be rendered is different from the others. If we want to render multiple html elements in a procedural way, our code will look like
switch (...):
    case 'select': renderSelect();
    case 'text': renderTextBox();
    case 'checkbox': renderCheckBox();
    case ...
    case ...
    case ...
But in OOP representation we can have a render method that will behave differently depending on the type of object that we are referencing
so we can just a one line that says
element.render();
'''

'''
BENEFITS OF OOP
We can group familiar variables - properties and functions - methods which is called encapsulation
we can reduce this object in different parts of the program or in different programs
With abstraction we can hide the details and the complexity and show only the essentials. This reduces complexity and isolate the impact of changes in the code.
With inheritance we can eliminate redundant code and 
WIth polymorphism we can refactor ugly switch case statements.
'''
