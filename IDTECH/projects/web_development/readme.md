Brief documentation along the journey of web development

## HTML

The anatomy of the HTML tag
HTML is a markup language just like all other markup eg Extensive Markup Language(XML), General Markup Language (GML). Just like marking down a manuscript, HTML tags are like markup for our browser as the publisher, telling the browser how display our text or content.

- Opening and closing tag <h1> Hello <h1>
- Self closing tags <br>, <hr>
You can always inspect any website in the browser to know what is written there.
e.g <hr size=“3” noshade == $0> hr is the tag while size and noshade are the attributes.
Always check documentation too for details.






inline css is the most powerul, folowed by internal and then external css

  you can download pesticide extension in from pesticide.io to see the blocks in your html code.
  div tag does not do anything on its own but helps us to group and breakdown our layout into different sections that can be styled differently.
  Div is used to split our layout into diff. parts. It does not have a height unless specified but takes the height of its content or elements withing it.

Every html tag is a box. You can see this with pesticide a chrome extension from pesticide.io. Each box must have a width and heigth to be visible.
Note: Don't forget that there is no wbpage without a style. This is because the browser have a style it applies on the element. Most times this has to be overwritten to effect some changes.



/*
css box model

{This deals with width, height, padding, border and margin going from inside out}

css layout often operate like boxes.If we increase/decrease the size it scaled pushing other things away or contract allowing other thing to take space. We can sepcify size of this boses as static using px or %. The viewport is what you are viewing the website on.
If we have a box we specify width to be 300px and then we allow it to have a border of say 50px, this will implies that the whole block is now 350px. In order to get the best result, we can instead of just saying border ipx we can specify border-top or anywhere else possible. Or use the circle shorthand e.g {border-width: 0px 10px 20px 30px} going clockwise
Say we have content in the box above eg text and we want some spaces around the text in the box, we can use padding say {padding: 20px} this will enlarge the box further increasing its size.
Margin: if we give the box some marging, it gives it some space round other element surrounding it.


Css Display Property
Has 4 different values
1. Block
By default the width of the element will cover the whole viewport.

2. Inline
It takes the width of whatever is inside it

3. Inline-Block
Takes the property of both inline and block

4. None
removes any display property on an element.

Importing some image and inspecting with pesticides, we'll see that some element boxes takes the whole width of the page while that of the img takes just their own width on the page.

This is because by default some elements are block element.

This includes: Paragraphs <p>, all header <h1> - <h6>, Divisions <div>, Lists and List items (<ol>, <ul>, and <li>), Forms (<form>)
This elements block all element from being side by side with them on the right or left.
But how do we style them differently. Say a text. To style it differnetly.
We can break that single word using <span> and give it a class. Just like divs, span takes the size of the element its applied to. Other inline element includes: Spans(<span>), images(<img>), anchors(<a>) This was why our links in our cv websites stay side by side. Span can be within other tags or stand-alone and nomatter how many we have together they will be standing side by side i.e inline.

The only problem with inline elements is you can't change their widths. But we can change the width of the block elements. And most importantly we can change the display property of any element.

eg. We can reduce the width of a <p> element and give it a display property of inline. We can also make an inline element to block.

note: if we have a block we styleto inline and an inline we change to block, they wont stay together on a line anylonger. So what do we do. We will just use display property of inline-block a combination of both world. This is kind of what img element are like. So we can treat images as an inline block element.

The last display property is None. It erases all property of an element, like erase the element. as if it never exist.

Say you want to hide info on your webpage, you can use display none at some point or use visibility and set it to hidden. The element will retain its position but wont be visible.

CSS static and Relative Positioning:
HTML element already has a default position, its good to know them before repositioning.
These rules are used
1. Content is everything: all element takes the size of the content.
2. Order comes from the html file. What comes first is what is rendered first.
3. Children sit on of parents. This introduces the z index. Away from the screen and towards the viewer. If a parent is on child then the child won't be seen at all.
This three are the default rules of how things get rendered on the screen.

We can also use css to set position order than the default layout.

Static
This is the default. it just go with the html rule.

Relative
Allow us to position element order than how it has been positioned by default.

img {
  position: relative;
  left 30px;
}
The above means 30px marging from its former left position. We can also have this on all four sides.

Two things to remenber with relative positioning.
1. It moves without considering the positon of other elements.
2. Setting the position relative changes it from the default static and needs the coordinate properties to make something happen. This means after setting the psition as relative we need to specify either left or right or top or bottom pixels.
The relative positioning is relative to where the element would have been in static mode or say its previous position.

Absolute Positioning
This position element relative to its parent element. If the parent is directly the body it means positioning the element anywhere on the page. if its inside a div, it will mean relative to the parent element.
Note: Absolute positioning does affect the flow of your elements. It erases the element's positoning, raises it up allowing others to come under it filling up its space.
Absolute positioning helps to effect pixel to pixel touch when arranging element side by side.
Having a parent to an element helps to fine tune positioning.

Fixed positioning:
Once it is set if stays on the screen regardless of the scrolling of the page.

Centering element
This is achieved once we specify a property centre for text align. It works as long as we have inline block or elements that takes the width of the reference. It centre element that doesn't have a width set.
In a better way we can centre element using the margin with a value called auto. For horizontal centering, we can set margin value as follows, margin: 0 auto 0 auto;

A combination of all this gives a beautiful styling.


### BOOTSTRAP
A Front-End Library

{
  front-end is what the user see. The interface while backend is where you code the functionality server and databases.
}

Bootstrap is on the front-end its a reusable written code that can help to beautify a webpage. It is developed by twitter but now free and open source. It is the most popular front end framework.

Responsive means a page respond to the wiewport.It changes based on where it is displayed and bootstrap makes this easy.
Bootstrap has a lot of pre-built style.
it has css button or whatever generator that generate styles.

You can play with boostrap at codeplay.com it can use bootstrap as a front end framework. e.g bootsrap 4 the latest version as at this writing.

We dont need to write the css or copy the css code but just specify the details for our class in our html script.

How To Use
Go To getboostrap.com
Download the latest version
go to the folder, got to css, open the bootstrap.css with your editor.

To use just copy the code or use the classes for your elements.
You can also use examples that has been made.


How To Install Bootstrap on your Site

All you need to do is copy the boostrap cdn in header file. You can set it for the link of your stylesheet.
CDN is content delivery network. It means instead of hosting your website in a single location we can have multiple places this helps to reduce delay. Bootsrap also had this set up too. The delay time gets shorter because the browser would have cache it because of its large usage.

In using bootstrap you can just copy the starter template into your html file and keepgoing
Another way is to download all boostrap source codes into a folder and link it in your style sheet.
It's good to just start with the starter template for ease sake.


### WIREFRAMING

What does the frame of a designer look like?
Wireframing is  a wuick framing of your site. You can sketch with a pencil and get everything set up and settled before getiing started. It's a low fidelity of your site.
The opposite is a mockup: This is a high fedelity of your design. It's like taking the screenshot of your site before even getting started.

If you start with this, you might get stuck so you can get template, visit other sites, go to uidashboard.com, lookout for user interface design patterns. Look at the problem you're trying to solve by looking at the examples.
You can create a wireframe on dribble, then use photoshop or illustrator to create a mock-up and you can also go the extra mile to create a prototype i.e an animation of what your site will look like at the end. (dribble.com gives you a place to get started. You can start by colour search.)

For our site we can start with a pencil and paper or just use sneakpekit. The industry too is www.balsamiq.cloud

Using Bootstrap

since its a third party library, we need to learn how to use it from their documentation.
To use, go to the site, then documentation, then components and locate the component you want to use e.g navbar.

You can play with boostrap working with the documentation on codeplay.com

You can save your work on codeplay

### Bootstrap Grid System
The first thing to check out is the documentation. There will be different usage depending on version. e.g in styling or changing the bacground color of the navbar to dark, in version 4 this will be navbar-dark or bg-dark but in 5.3 you have to use data-bs-theme="dark"

Bootstrap makes columns and row styling very easy.

for example say we want to create some role and style them. This can easily be achieved with divs and bootstrap

<div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:green; border: 1px solid">
  col-3 col-md-4 col-sm-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:green; border: 1px solid">
  col-3 col-md-4 col-sm-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:green; border: 1px solid">
  col-3 col-md-4 col-sm-6
  </div>
  <div class="col-lg-3 col-md-4 col-sm-6" style="background-color:green; border: 1px solid">
  col-3 col-md-4 col-sm-6
  </div>
</div>

<div class="container shadow min-vh-100 py-2">
    <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
        </div>
    </div>
</div>


<div class="row">
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
    <div class="col-lg-2 col-md-3 col-sm-12" style="background-color:blue; border:1px solid">
            col-lg-2
    </div>
</div>

The above will start out as 6 columns in a role on a large screen (laptop and above), then 4 col on a medium(tablet) size and then 1 col on a small(mobile size and below)

### Using Fonts
We can also use external fonts for our work. Just go to fonts.google.com

Select the fonts you want and then copy the link and insert it as a link in your html file.

Very important: Unlike HTML and Javascript where the code is read in order, in CSS the last style is implemented. So if you have a CSS file you link in your header and also a bootstrap link in your header for your own style to take priority it must be below the bootstrap link.

Your personal styling must be the last styling in the heaer file. I.e it must come after the boostrap style.

### Bootstrap Container

Container help to hold elements in a design. They are basic building block. It helps you to styleor pad or center out your content. A container can contain anything.
A container can be default i.e block. For this maxwidth changes with responsiveness whilethecontainer maintaining the padding and all. It allows everything inthe container to be totally responsive relative to the size of the viewport.

Fluid container: This type of container adapt to the 100% of the view port.

### Bootstrap button
The details of this is in the documentation section of bootstrap with the respective colour and use cases. Locate exact style you want and copy the class name into your html element.

Note: The usage of third party elements changes with time. SO always read the documentation for the way out.

### Using Font Awesome Icon
go to fontawesome.com

you might need to register for a free account.
Copy the unique cdn link and put it in your html header file.

Once the above is done, come back to the site, sign in and search for any icon you want, copy the class identifier and use in your html file

NOTE: For all third party element, having an internet connection is required for loading them.

#### Rotating an html element
This can be achieved by checkinggoogle and stack overflow for the specific how to of the usage.


### Bootstrap Carousel
Anything about bootstrap is boil down to looking at the documentation and implementing it while changing its properties or adding your own style.

#### Making an image circular
This can simply be achieved by changing the border radius property of the element in css to 100%

### Prricing section
You can achieve this using the card section on Bootstrap. You can also get code snippet smples from bootsnipp.com

#### Boostrap cards
The documentation explains it out.


### The CSS Z index
Html elements are stacked exept for a child and parent. A child always sit on the parent. One way we can achieve the z index
The z index is moving things either towards or away from the user. The z index can be edited specifically using the z-index preperty of an element. By default the z index value of any element is 0, changing this value changes the z index of element. z index is one of the ways we chnage the orders of stacked elements.
For z index to work, the position property must be set to absolute/absolute but not static. The z index will not worrk if the position property is not set at all in the script.

To change the z index of an element, we change the z index of the items involved but for it to work we must change the position property of the elements to absolute also.

## MEDIA QUERY
Since October 2016 the number of people visiting the web with their phone overtook those using their laptop or computer.

To guarantee mobile first we can use media query to make our website responsive.

WHY DO WE HAVE TO DESIGN FOR MOBILE or ensure responsiveness for mobile
The number of people who use the mobile are now more so its the generation of mobile first.

HOW DO WE DO THIS
1. Do nothing and get punished for it

Webpages get ranking based also on mobile responsiveness. Google even developed a page to test mobile responsiveness.
search.google.com/test/mobile-friendly

This is very important for any webpage especially businesses.

2. Make a different webpage for mobile
facebook does this. This takes a lot of work.

3. The best is to make your website responsive.
We can do this by normal css functions called media query. This is without bootstrap or jquery or any framework but pure css.

Media query helps implement styling based on some evaluation.If the evaluation is true then it implement the styling and versa.

Cosider the below

Let say we have the below in our index.html
<h1>Hellow World</h1>

and the below in our style.css

h1 {
    color: red;
}

Initially if we run our html file, we are supposed to have a red Hello World text on the screen.

But if we change our css to what we have below

@media print {
h1 {
    color: red;
}
}

Now if we run our html file, we will only see a black Hello World text. This is because we now have a query that determines whether or not the styling would be implemented.
In the case here since the query evaluates to false, our styling is not implemented.
The query here will evaluate to true when will try to print the page from the browser.

There are other query method which includes:
screen or screen resolution: which evaluates the screen
Speech: which will be true when the screen is being read to a visually impaired person.

This is the media query structure

@media <type> <feature>

@media which says everything that comes afterwards is a media query
type: means type of media we are querying on, whether screen, print, etc.
feature: specifies the condition we are checking to be true or not.

e.g
@media screen (min-width: 900px) {
    //Change Something
}

900 and smaller is tablet and mobile
laptop is averagely 1200 x 264

This check the screen size the website is rendered in, if it is the size in the condition then the styling should apply and if not the styling would not apply.

If we use this condition as our query. When we run this on a desktop it will display black test but let say we pop out the tab and we start reducing the size once it reaches 900px size and below, the text will change to red. 

When a media query condition evaluates true, the styling in the query isimplemented thereby overiding the previous or existing style.

if we have this in our css
h1 {
    font-size: 30px;
}

@media (min-width: 900px) and (max-width: 1000px) {
    h1 {
        font-size: 60px;
    }
}

what will this evaluates to.

#### Making It Responsive
In doing this, there are few things we can target
1. The device size: this is the screen size of your device and mostly it is fixed.
2. The browser size: This can change depending on the user.
3. The viewport: This is the size of the screen the broser is displayed on.
This terms mean different things and you must remember them..

We can use chrome to check the width of our browser display.


### WET AND DRY CODE
One important thing about writing code especially css is to make it dry and not wet.
Do not
Repeat
Yourself

A code that has a lot of repetition is called WET
We
Enjoy
Typing

After writing the styles it is always a good practice to remove all sort of repetition. That is to make it dry as much as possible.

This is much called refactoring in the coding space.


There is a idea or concept that has been giving for developers to think when handing over code and it is to think ofthe next person coming to check the code as an axe murderer. Such that they will mostly use their axe if they find it difficult to understand the code or find something quickly in the code.

### CODE REFACTORING
There are few things to consider when refactoring code and the one to take as a priority depends on the programmer.
But in general the include the following in priority as mentioned.
1. Readability
2. Modularity
3. Efficiency
4. Length

1. Easy to understand not just for others but also for your future self. Is everything well arranged, labelled,commented, formated, etc. Make it readable.

2. This is related to how easy to reuse bits of your code.i.eif any part go down is it easy to resolve quickly. This helps in debugging.

3. How fast doesyour code run. You want something fast choose something like C but still it is still possible to make a code in a particular language more readable.

4. You can cut down on lenght to increase readability, this willbe good but doing it the other way round is very bad.

If you are interested in coding challenge involving this, you can go to:
codegolf.stackexchange.com

So go back and refactor your code.


Looking at our code especially in our css, it is good to have all our html element brought together.

Less repeatition gives more modular code. Refactoring should not break your website

Modularity helps to narrow down and change anything without affecting the others.

### SELECTOR COMBINATION IN CSS

#### Pick & Mix Selectors

1. Multiple selectors

a selector, another selector {

}

Say we have an h1 and p with colour red

we can just 
h1, p {
    color: red
}

2. Hierarchical Selectors
This is selecting by hierarchy. That is selection based on the hierarchy of the selectors

e.g 
#title .container-fluid {
    padding-top: 3%;
    text-align: left;
}

selector1 selector2
The first selector is a parent while the 2nd is a child.
So in using this, we will go from outside in, selecting the parents till we get to the specific child.

.container-fluid h1 {color: red}

Then we read the hierarchy from right to left. The one on the right is the child and the one on the left is the parent.

3. Combined Selectors
This is combining selector
selector1.selector2 {

}
selector1#selector2

We will read this fromleft to right.

What is the difference between the one with space and one without space.

Without the separator, we are targetting an element that have the classes we state but with the space it means we are following the hierarchy moving from the parent to child.

It is good to remember this about selectors, they have hierarchy ID's are the most specific which means they take much priority and then classes and lastly htmltags.  

Also it is good to note that the last styling will always be applied.
Also class  selector is superior to html tag while id is superior to class ans html tag. This are css rule.

Then also inline css is the strongest when it comes to where our styling is positioned.

#### HOW TO PREVENT CONFLICTING STYLING

1. Use id's very sparingly. Not only that you have one of that thing but that it is distinct so use class instead. Only use id when you need to but always consider using class first.

2. When you want to use class, always use one class. Try to apply only one class as much as possible.

3. Avoid inline styling as much as possible. It is a very bad pratice so dont do it.

Keeping to all the above helps you reduce debugging to the barest minimum.