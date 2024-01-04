Brief documentation along the journey of web development

## HTML

The anatomy of the HTML tag
HTML is a markup language just like all other markup eg Extensive Markup Language(XML), General Markup Language (GML). Just like marking down a manuscript, HTML tags are like markup for our browser as the publisher, telling the browser how to display our text or content.

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
Note: Don't forget that there is no webpage without a style. This is because the browser have a style it applies on the element. Most times this has to be overwritten to effect some changes.



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

Some things that help with coding better is to study your habbit queue.
The way to keep an habit going is to put it next to an already ongoing habit. Your onging habit will help your new habit to stick.

## WEB DESIGN

The most important thing about creating a great website is the look, the design. When it comes to web design the idea that you only have three seconds to make an impression applies. Just like an interview or a first date. It only take the user few minute to make some conclusions about the site.

colors, fonts, typeface, images, etc counts a tonne.

Improving design is one great and cheapest way to make your product more expensive. So being good at design is highly essential.

### WEB DESIGN PRINCIPLES

a. Colour Theory.
b. Typography
c. User Interface Design
d. User Experience Design

### COLOUR THEORY
This is the art and science of creating the right colour pallet for your design.

When you are picking colour, you have to be aware of the mood of your colours.

Some common mood of are;
Red: Love, Energy, Intensity
Yellow: Joy, Intellect, Attention
Green: Freshness, Safety, Growth
Blue: Stability, Trust, Serenity
Purple: Royalty, Wealth, Feminity

The predominant colour in your design tells user a lot about the design.

You always see cars with more red designs

Yellow grap attention, its hard to ignore. So if you are creating something to be seeing for a very short time then yellow will be great but if otherwise then yellow would really be a bad idea.

You always see groceries coming with green because of its freshness

Blue always say we are trustworthy, this is why financial institutions choose the colour. It has been proven that even wearing blue shirt probably to an interview increases the trust and how you are perceived.

Purple signifies royalty, feminity, it goes with women and royalty.

So your choice of colour is not what you like or your favourite but the message you are passing accross.

### COMBINING COLOURS
In designs, you won't really use a single colour but a combination of colours. 2 or 3
The most scientific part of colour theory is deciding which colours to ccombine.

So designers have to revert to the scientific way of colour combination.
1. Analogous colours: This means choosing colours that are side by side on the colour wheel. This can be good for things like navbar, body and the background.

2. Complementary colour: This is choosing colours that are opposite each other on the colour wheel. This is important because it makes the illustration or design stand out. It creates pop.

What you shouldn't do with complementary colours is to style text or text background with it. It makes the text jarring and make the look fussy. Instead keepit to logo's, icons or thing that you want to stand out.

3. You can also draw a equilateral triangle in the colour wheel creating a triadic pallet or a perfect square.

You can go to adobe color to play with different colour combination.

If this sound not too good, you can use colorhunt.co
This is a website where professional web designer has created their most fantastic color combination. If you check the favourite section of the website you can have a color combo you can use right away. Always thing about your color combination in your next project. Ensure the standout and it conveys the message you want it to convey. 

### TYPOGRAPHY
This is all about choosing the right font type, size, weight, etc in any specific scenerio.

Font like all other things commands a great important of the message sent accross by your design.

There are important font family to be familiar with in the world of fonts
1. Serif: They have footing at the end of their central beams. It gets its inspiration from carving because its not possible to get a 90 directly on carvings without this ending part. It commands authority,old, and others. They are good for letterhead, legal,magazine ofachitect. They have a substyle ehich include old style, transitional Modern and slab-serif.
The exageration between the thickest and thinnest part of the letters can tellhow old this sub types are.

So each subtypes say something specific.

The same way different colour speak different moods and emotion, different fonts also speak different moods and emotion.

#### EMOTION BEHIND FONTS
a. Serif
Traditional, Stable, Respectable, Authoritative.
b. Sans-serif
Sensible, Simple, Straightforward
c. Script
Personal, Creative, Elegant
d. Display
Friendly, Loud, Amusing
e. Modern
Stylish, Chic, Smart


Upon some research it isfound out that the humanist sans serrif is easily more understandable than serif

Meaning that it is good for long text or things that you want people to read more.

#### CRITERIA TO DETERMINE THE READABILITY OF A FONT TYPE
a. Open shapes
b. Ample intercharacter spacing
c. Unabigous forms
d. Varying proportions

#### How Many Fonts To Use
A design that uses too many fonts will surely be cluesttered. It is a good design characteristics to stick with two fonts in your design.

Find fonts that are similar or that communicates similar moods. Also choose fornts that comes from the same era.

### USER INTERFACE DESIGN
The human eye is always drawn to a bigger, bolder, squarer things. Asdesigners we can use this to define hierarchy. Let's say you are writing a birthday invite to me and you write everything in the same font, it will take me more time to understand what is writing compare to the other way round. On the other hand if hierarchy is archieved with fontsize different, the most important information is communicate first.

#### HOW TO ESTABLISH HIERARCHY
We can establish hierarchy in some number of ways:
1. Using colours: it makes things pop immediately. It is achieve importance first. Other than your colour pallete some other colour can be used to command importance and action. Many company are careful to use colour to cammand attention on their page.


2. The Layout: Other than a single block of text, we cna use a well arranged combination of text, different sizes, shapes and pictures to drive attention. The wikipedia is a bad idea in this.
Too short or too long text on a line is very difficult to read. You should keep text on a line to an average of 34 characters and 60 words per line.

When you have good layout, you have more drive on the contents.

3. Alignment:This has to do with how you position things on the scree relative to the others. Starting point, ending and others are very important. The way to go is to reduce allignemnet points or reference to the barest minimun. If you can reduce the number of line then all the pieces will come together. Just doint this with even ordinary text make a lot of difference.

4. White Space: This is a really important element in design. White spaces is used to command expensiveness in shopping stores. The same goes with designs. Adding white spcae make your product command speciality and makes it more expensive.

5. Audience: This is the most important in everything listed here. It means designing for your audience. So colour, layout, shapes, etc all depends on your audience. Take a time to look at a children party invitation and a funeral invitation cards.

So think about your audience and what you want to convey to them. Fun, serious, enjoyable, authoritative, etc.

When it comes to design, design for your audience. Even if you have too break the rule or overuse some element, design for your audience. Have the flexibility in your design, different design for cloth buying and crypto buying. So have some flexibility in your design.

Keeping in mind this 5 things above make you a great designer.
Contrast the fonts by weight, also you can change the weight to show contrast.

So always choose the right fonts for your story in you design.


#### APPLYING WHAT WE HAVE LEARNT

Daily UI gives you daily design tasks for you to work on.

To practice our design skill, we can use canva, register for a free account and click on start a new design.
use custom dimension, set the width to 1400px by 800px

we can have 3 pages

you can choose a pattern and apply it.

Say we are designing for an hotel

To command authority use serif type font.

once you know what you a re going to have

say 1st page will be title page, next page will be features page, the last part cna be contact us page

after you are done you can publish the design as a website and you can view it as a webpage.

Find a time to practice and share your link.


## JAVASCRIPT
After the long internet browser war (Netscape vs Internet Explorer)
Brendan Eich was hired to create to create the code that can run directly on the computer instead of on the application server. This is to enable functionality in real time. Brendan then create the javaScript in 10 days. The language must be simple and easy to add functionality to a webpage.

Since then JavaScript has been powering the web. You can turn off Javascript in chrome browser and see a tonne of functionalitites disappeared. Though there are other language which are used and compiled to Javascript for the web but without Javascript the web will break. The web is dominated the web space.

Its name has change over the years from Livescript-Brendan to JScript-Microsoft, ECMA Script European Computer Manufacturer Script ES5, ES6, etc.

Java Script
just like a script for a play that tells the actors what to do, Javascript tell our html elements who are the actors what to do per time. This is how scripting languages work.

Java and Javascript have as much in common as car and carpet.

The reason why java was in the name can be traced back to an event where an iced tea serving business called blockchain double its stock price overnight by changing its name to java. So everyone wants the word java in their name.
Javascript is an interpreted language. Contrary to just the ideaof it being just a frontend language or a slow language because it is compiled, the Modern Javascript has been developed into many use cases, tools and packages that now drive a tonne of processes. It is also the one language that is supported by all web browsers. As mentioned earlier, though other language are used for the web which are compile into JavaScript, Javascript is still the language that power the web.

### BEST PRACTICE IN WRITING JAVASCRIPT

We can write javascript codes directly using Google Chrome
you can go to the options (3 dots) on chrome --> More Tools --> Developer Tools then select console at the top.

The limitation here is it doesn't allow multiple line code but we can go around this with shift enter.

This is still not the best way to go. To get a better way, select sources, click on the arrow at around the top left there then select snippet, create a new snippet, you can call it index.js. In this file, we can write multiple lines of code as much as possible.

Look into the mdn docs to write javascript

alert("Hello");

Looking at the code snippet above

alert is a function understood by javascript interpreter. It is a keyword. The browser knows what to do when it sees any keyword.
Hello is the message i.e what to display. What we have in the quotation mark is the string to be displayed.
; this indicate the end of the code statement.

This all and many more makes up the grammer of Javascript or of the browser.

It is important to follow the official writing style. For the Best Practices

go to github.com/rwaldron/idiomatic.js check out the repo for writing style of javasript as a programming language. Also it is good to know this. Every code in a code base should look as if only one person write it.

### DATA TYPES IN JAVASCRIPT

Why does the browser know what to display in the pop up with the alert, this is because it understand some data in there. In an alert we have message which is a string="Hello" A string is denoted by ""

#### DATA TYPES
String  e.g "Hello" it's a string of characters
There are other ones;
Numbers eg 123
Boolean describe data that is true or false.
We combine them to create functionality.

Apart from alert that we have seen

Javascript has a function that helps to tell the typeof any data. This is called typeof();

e.g typeof("Hello") --> This will output string telling me the type of my input data is.
You can try it out in the console.

#### VARIABLES
This helps to commit some variable in the computer memory.

We can always request an input from the user using the prompt function.

Lets say we use the prompt function to request for your name and then after the input we just click ok. What happen next? Nothing. Cna we retreive this data, No. But why? this is because we do not store it in any variable say we do not put it in the computer memory. This is why variables are important.

We can keep something in the computer memory using the keyword var

var myName = "oluwaseyi";
var == Keyword setting a memory for a variable 
myName == What we want to call what we are storing in the memory
"Oluwaseyi" == the data or value we want stored in the memory

so if I ask the computer myName, it gives me what is stored inside it.

Let's see what happens in the background

anytime we use the keyword var, the computer create a box in memory, gives it the name myName and put whatever is after the equal sign and immediately it encountered the ; it cover the box off.

var is called var because it stand for variable meaning we can change what is inside it, we can change what is inside the box.

if we execute this;
myName = "Jane";
The computer would find the box called myName, once found, it will open it up and then remove what is inside before and put what is now after the equal to sign inside the box then with the ; cover it back again.

So we can what is inside the box

Note: this second time the word var is not used because our box is already constructed already. We only use it when we want a new box constructed.

Can you use the alert function to display the value assign to myName? Do it.

We can use the promt to request for data and then save the data in a variable. 

    play with this:
var myName = "Oluwaseyi";
var yourName = prompt("What is your Name?");
alert("Hi, I am "+myName+", "+"Nice to meet you "+yourName);

Can You Solve This, swipe the value stored in a and b;
var a = 3;
var b = 8;

/**** Do not change the code above
Do not redeclare a or b
Do not use any number
***/
//Write your code here



/**** Do not change the code below ****/
console.log("a is " + a);
console.log("b is " + b);

Your solution must show
a is 8
b is 3


Note: You can clear the console with cmd + k on mac and ctr + k on others.
This does not clear the information stored, so to clear you can right click on the reload button.

#### RULES OF NAMING VARIABLES
Truly you can name your variable anyhow in JavaScript but that is not good enough.
Your variable name is important. Others will want to use your code or check how you expect other people's code to be easy for your too.

##### Rules To Follow
1. Use meaningful name
Use varible names that deppict the values stored in the variable. Look at how folders are pre-named on your computer -  it shows exactly what should go into them. e.g Document, Video, etc.
2. You can't use a keyword as a variable name. But you can attact something to it.
3. You can't name it a number or begin a variable name with a number but you can start with letter(s) and add numbers.
e.g var 2my is not valid but my2 is.
4. There cannot be space(s) between the variable name
5. The name can only include lettersNumbers$_. Nothing else can be used.
6. Use camelCase, start the first word with a small letter then the next with a capital letter.

#### Strings
You can combine two string with a + sign. This is called concatenation.
If we execute
alert("Hello " + "World!")
Hello World! is displayed.

It is only what we have inside the quotation sign that is displayed.

Your challenge: write a single line of code to combine the variables below in an alert.

var message = "Hello";
var name = "Oluwaseyi";
//write your code here

#### NUMBER OF CHARACTERS IN A STRING

Javascript lenght property is a cool feature of javascript. This can be used to cound number of character and give the number of characters of a string or any other element.
Usage: var.length

/*
var name = prompt("Input Your Name Please: ");
var message = prompt("Enter any message you want");
//const stringMax = 140;
//var inputString = message.length;
//var remString = (stringMax - inputString);
alert("You have written " + message.length + " characters, you have "+ (140 - message.length) + " characters left.");

*/

#### SLICING AND EXTRACTING PART OF A STRING

We can do this with a javascript slice function.

Usage: varName.slice(fromPositionA, toPositionB)
VarName.slice(x,y)

e.g
var name = "Ade";
name.slice(2, 3);

This gives the output: 'e'

The most important thing is to know that programming counts from 0. This means the first character is always at position 0.

run and explore the code below:
alert(prompt("compose your tweet: ").slice(0, 140));

Study this code:
var name = promt("Input your name: ");
alert("Hello " + ((name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase())));
or
alert("Hello " + (name.slice(0, 1).toUpperCase()) + (name.slice(1, name.length).toLowerCase()));

It's always important to test your code for any bug that needs to be resolved.


#### MATH WITH JAVASCRIPT
Working with numbers in javascript is straight forward. (+,-,/,%,*)
There is a rule that guide presidence in some mathematical operation in programming same way we have it in mathematics.

Dog Age to Human Age Calculator:

var dogAge = prompt("Enter the age of your dog: ");
const humanAge = ((dogAge - 2) * 4 + 21);
alert("Your dog is " + humanAge + " years old!");

#### INCREMENT AND DECREMENT
We can increase or decrease the value of x probably by saying x = x+1
In programming this can simply be written as x++. This is called increment while going on the other way round is called decrement i.e x--
To increate the walue of x more than one we can say x = x + 2 which can be written as x += 2.

### FUNCTIONS
Say you have a house robot and you can only instruct it by code. For it to do anything you have to tell it what to do step by step. Lets say you are able to achiieve this for some days, if you keep writting the code everyday you will surelly get tired. This is where functions comes in, with a function you can write lines of codes to achieve a specific activity which you can reuse anytime.

function funcName() {
    //block of code
}

function tells the interpreter that you are writting a function,
funcName is the name you give to the function.
() determines the parameter the fucntion would use. Empty braces means its not taking any parameter.
{ } Everything within this curly braces is the code to be executed when the finction is executed.

the function is called by 
writting the name of the function with the parenthesis --> funcName();

Note: the closing curly braces is not followed by semicolon and all the code to be executed is written within the curly braces and indented.


consol.log() like alert is used to display things but unlike alert which display things to the user on the browser console.log() is used to display things on the console for the developer. It is not accessible to the user.

#### FUNCTION PARAMETERS AND ARGUMENT.
The former type of function discussed is the simplest we can have when it comes to a function. This is a function without any parameter or arguments. But what if we have information say a value that we would like to change within the function.
We can have paramenters that change which we can have as input in the function call.

function getMilk(amount) {
    console.log("buy " + ((amount - (amount%1.5))/1.5) + " bottles of milk");
}

getMilk(10);

#### FUNCTIONS THAT RETURN A VALUE
This is the third category of function, this function, apart from taking a parameter as input also return a value as output.

Say with our robot that goes to buy milk, before now though its able to buy the milk dependingon the amount we gave it but we do not take account of the change remaining after buying the milk. Our robot will work better if it can return our change. This is achieved by using the return statement with a function.

var change = getmilk(4)
//change = 1

function getMilk (money) {
    return money % 1.5; // % is the remainder of any division of number
}

var change = getMilk(4);

This is the most complex of the function types.



#### RANDOM NUMBERS
It is possible to fenerate random numbers using the javascript Math.random() function. This generates random numbers between 0 and 0. to 16 decimals with 1 not included.

Say we want to generates the numbers in a die

/*
This program uses the javascript random number to generates the numbers in a dice.
*/

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

A love calculator using the Math.random

var girlName = prompt("What is the Girl's name");
var guysName = prompt("what is the Guys name");
var loveMeter = (Math.floor(Math.random() * 100) + 1);
alert("Your love score is " + loveMeter + "%.");

#### CONTROL FLOW.
It would be nice if we can give the calculation above a custom message depending on the lovescore.

This can be done with the keyword if. say a train moving on a straigh rail, we can say IF the track is clear go straigh ELSE take the other rail.

IF, ELSE is used as control flow in javascript depending on the present condition.

usage:

if (track === "clear") {
    goStraight();
} else {
    turnRight();
}


if (loveMeter >= 70) {
    alert("Your love score is " + loveMeter + "%, You love each other so much");
} else {
    alert("Your love score is " + loveMeter + "%.");
}

The code above uses the if control flow statement. In addition to that we also have a comaparator and equality symbols used in the consition checking

#### COMPARATORS AND EQUALITY

Examples of equalities and comparators are listed below.

=== Is equal to
!== Is not equal to
>   Is greater than
<   Is lesser than
>=  Is greater or equal to
<=  Is lesser or equal to

We can also have == which is also an equality operator. == is different from === in the sense that == does not check for type whereas === check for both equality in value and type.

if we have this code

var a = 2;
var b = "2";
typeof(a); // number
typeof(b); // string
a == b; // This will give true
a === b; // This will give false because of the type check.

#### COMBINING COMPARATIVE

For more condition checking we can combine comparators by using the following:

&& AND   // will be true if the two conditions are true
|| OR    // will be true if one of the conditions is true.
!   // opposite of the condition. 

#### JAVASCRIPT ARRAY

How do we woek with multiple data. This can be done with array. It is a collection of item that are related and can be stored in the same container.

usage;
var myNumbers = [5,1,9,0,4,4];
var myNumber = myNumbers[2];

This will store the value 9 into the variable mynumber. Dont forget that in programming we start our count from 0.

Also the [] always has to do with a collection data.
Javascript has some array methods which include array.length this gives us the amount of data in the array.

e.g myNumbers.length === 6;

To retrieve item we start counting from 0, we use the name of the array and the number position of the value we want to get out.

myNumbers[2] // 9

We can also check if an element is present in an array or not using the array.includes(item), return true if the item was present and false if not.

#### OTHER ARRAY METHOD
Push i.e array.push(element) It pushed the stated element to the end of the array.

The opposite of this is pop it removes the last element in a sequence.

#### WHILE LOOP
Loops helps in running a code or specific block of code for a certain number of times.

While loop is the most simplest of all the loops.

while (something is true) {
    //Do something
}
The block of code specified will run until the statement becomes false.

usage:
i = 1;
while (i < 2) {
    console.log(i);
    i++;
}

when the first line is executed , the computer store value of i as 1 and move on
when the second line the condition inside the parenthesis is checked i = 1 and its less than 2 so the code in the next code block is executed. 1 is displayed. The at the next line i si increased by 1 i.e i is now = to 2.
The computer goes back to the top of the loop and check the loop condition now i = 2 but 2 is not less than 2 this is evaluated false then the loop is stopped.

note: while loop is error prone because it will keep executing with any mistake with the increament. This condition is called infinite loop and it will mostly crash your console or system or developer tool tab or any code environment you are using.

#### FOR LOOP
Works same with a while loop but instead of just evaluating a condition we state the range or number of time we want the code to run.
usage:

    start end  change
for (i=0; i<2; i++) {
    // Do something
} 

In a for loop the starting point, the ending point and the increment or decreament is included in the condition.

The for loop is what we can call a synthatic sugar.
At every time the code run the value at the begining is checked with the condition for the ending and if true the code block is executed, then the computer comes back to the for line, check the change parameter and use it to increase or decrease the value, it then goes back to check if the value is still withing the begining and the end values, if true it run the code block, it keeps doing this till the value is not within the begining and end value then it stops.

#### CHOOSING BETWEEN A WHILE OR FOR LOOP

While loop checks for a state. It runs while the program is in a certain state. Say if something is true e.g while player one is still alive...

A for loop only iterate. You run a piece of code many time that you define.

Another way to distinguish between the two is that while loop is best when you dont know the number of times the program will run. A for loop is best when you know the start and end of an iteration.

## DOM MANIPULATION

Apart from writing javascript codes and using it to execute codes, there is more use to it. This is using it to manipulate DOM the HTML elements in our web design.

### JAVASCRIPT LINKING PRIORITY
Just like that of CSS, Javascript codes or file follow the same priority order just like css styling. The most being the inline script, followed by internal script and then external script.

#### Inline Javascript
 This creates some problem because it has to be inside a quotation conflicting with the use of alert and other. This is highly confusing to the browser. Though we can use the single and double quotaion mark to distinguish between our writings. Inline javascript is a very hard to debug and a very bad practice.

#### Internal javascript
This can be added by the script tag.
<script type="text/javascript">

</script>
This tag can be included before the close of the body of our html file. Our code will be written within the script tag. This also works.

#### External javascript
We can have a javascript file and link it in our html file.

The javascript code is positioned at the end of our html file because the browser reads the codes line by line and if it encounters a javascript file before a css file, it will execute it first making things to be in disorder.

Just like our script tag above the js file is linked as follows.
<script src="filename.js" charset="utf-8"></script>

Also if we put our script at the top and we are trying to change an html element, it will fail because it has not been created.
It will also fail if we put it withing the head.

So best practice is to put the script at the end before the close of the html. More if it is at the end while your script is excuting, every other element would have loaded which will make it look like your webppage loads very fast. But if the script comes first then it might take some time to load it up.

### DOCUMENT OBJECT MODEL (Dominating the DOM to add functionality to HTML elements)

Initaially we design our website and design it as we want save it and refresh our page but there is more to that, what if the user click on something. We need to respond to that and that on the fly. But once our website is live we cant keep waiting for a user to do something before we respond to it. and what if we now have multiple users at a time. This is the problem that the DOM solve.

The browser converts the html file into content that can be selected. It converts it to a tree structure.

<html>
<head>
<title>My Website</title>
</head>
<body>
<button>Alert</button>
</body>
</html>

This is converted to a tree element and the order of manipulation.

Install the html tree visualizer.
We can tap into the tree document object using javascript.
We can select any of the document or html tag usin javascrip

e.g

document. firstElementChild;
This will be the html tag i.e everything withing it.

document.firtstElementChild.firstElementChild;
This will give or select the title tag.

Once we have successfully selected the object, we can then manipulate it.

We can assign this selection to a variable and then manipulate it.

var title = document.firstEelementChild.firstElementChild;

We can then change what we have within it

title.innerHTML = "You are welcome";

There are many things we can change

We can change the style, innerhTML

We can make it do something too

Like say we have a checkbox, we can click this checkbox with the dom

document.querySelector("input").click;

It simulate the click function.
This will check the checkbox once executed.

#### PROPERTIES AND METHODS

Properties describe something about the object and Methods describe what the object can do.

Say the object is a car, this car will have properties like colour, Number of seats, Numbers of doors and others that describe something about it. At the same time this car will have something that will describe what it can do. This are method drive, brake, park, etc. This describes what it can do.

In javascript we can use use the . to get these properties
Example like
car.colour; //red  (This is the output because the current value of the colour property of the car is red.)
This is called a gettter.Get Property.

We can also set the properties.
Example;
car.numberOfDoors = 0; // We just set the number of door of the car to zero, meaning the car has no door.
This is called setter. Set Property.

The difference between setting and getting a property is whether we assign a value to them with an equal sign.

FOR THE METHOD.

If we called the method drive on our car, our car will do something i.e drive.
Example:
car.drive(); // The car will start driving. It will start moving.
This is a Call Method.

#### DIFFERENCE BETWEEN A METHOD AND A FUNCTION
Though we can use the word functions and methods interchangeably but they have a slight difference. The difference is that a method has to be something that an object can do. It means it has to be related to an object. In our example above drive is a method associated with the object car.

Looking at the button object we use earlier, we are able to tap into its properties and set it. As well as use some of its methods to do things.

The button properties inclueds; innerHTML, style, firstChild and we have been tapping into those by saying .style, .innerHTML, etc. But methods all have a set of parethesis () at the end. This is how you can tell the difference between methods and properties.
For our button,its methods includes; .click(), .appendChild(), etc. So by using the .notation we can manipulate the properties and method of our objects.


#### UNDERSTANDING QUERY SELECTOR OF AN NTH CHILD ELEMENT
It is highly important to clearly understand the logic behind selecting any element in any html file regardless of the depth of the file tree. Though we can make our work easier by using classes and id's but it will be great for any developer to understand a selection even without them.

It is good to note that apart from document.firstElementChild which gives the html content and document.firstElementChild.lastElementChild which gives the body, it might be very tricky getting any html element in the file.

In other to make things easy, the querry Selector() and querrySelectorAll() came to the resque.

How to select specific element
Selection of a specific element further in the element table can be done combining the selections and the querry selector

For example, having the html file below;
and given the task to change the content of the third list. Which is formerly Third to any thing else.

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">

  </head>
  <body>

    <h1 id="title">Hello</h1>

    <input type="checkbox">

    <button class="btn" style="color:red;">Click Me</button>

    <ul id="list">
      <li class="list">
        <a href="https://www.google.com">Google</a>
      </li>
      <li class="list">Second</li>
      <li class="list">Third</li>
    </ul>


    <script type="text/javascript" src="index.js" charset="UTF-8"></script>
  </body>
</html>


Though there are certainly many way to get this done, having the below in my script filealsoget the job done.

Method (1)
var thirdList = document.firstElementChild.lastElementChild.querySelector('ul :nth-child(3)');
thirdList.innerHTML = "Oluwaseyi is a great winner";

Method (2) - Using the parent id
var thirdList = document.firstElementChild.lastElementChild.querySelector('#list :nth-child(3)');
thirdList.innerHTML = "Oluwaseyi is a great winner";


There are also many ways to manipulate html elements in the Document Model.

1. document.getElementsByTagName{"Tagname"}: I check and search for elementby tagname. Say "li" // This will list all the list item in the html file above.
The main distinction about this is that it gets all element with that tag name. It is not possible to make specific changes to them because it returns an array of item. What we do is to select the item in the array using the [] and then apply our changes to it.

Usage:
document.getElementsByTagName("li")[2].style.color = "purple";

We can also use the lenght item on the array.

2. getElementsByClassName("className"); This select element with the specific class stated.

Usage:
getElementsByTagName("btn"); // This will return an array also, even if it's only one item. So the [] needs to be used to pick the specific element.

3. getElementById("idName"); // This is singular, like you would guess, it's because there can only be 1 idName in any html file. A particular Id will only occur once in an html document. Once used it only return one element.

Usage:
document.getElementById("title").innerHTML = "Good Bye";

This change the title to Good Bye

Another way to also get element is with the querrySelector()

document.querrySelector() // This also get a single element because the string you will put is a selector. Selectors are the string we use before the {} in our styling. For the html elements we state them, for the classes we use .className and for Id we use #idName.
This can take a tag, class or an Id.
usage:
document.querrySelector("h1");
document.querrySelector("#title");
document.querrySelector(".btn");

We can also combine our selectors to get something specific.

usage:
document.querrySelector("li a"); //This picks the link tag inside the list. It gives something specific.

document.querrySelector("li.item"); //This gives the first list item that satisfy that selector.

We can also use Id

Usage:
document.querrySelector("#list a"); //This gives an anchor tag inside the Id list. It's an hierarchical selector.

When we use this document.querrySelector("#list .item") // This gives the first item on the list. But what if we want all the items that satisfy this criteria, all we need to do is to fine tune our selector a bit.

Usage:
document.querrySelectorAll("#list .item"); //This will give us a list of all the item that satisfy this selection. This means for us to have something specific we have to use [] to select the specific element we want.

document.querrySelectorAll("#list .item")[2].style.color = "blue";

So which one is to use
querrySelector() and querrySelectorAll() allows for more advance and helps to target the specific element you want. querrySelector and querrySectorAll can be used for all.

/**
  Challenge to change the href to red. All the below works
 
document.querySelector("#list .list a").style.color = "red";
document.querySelector("#list li a").style.color = "red";
document.querySelector("ul .list a").style.color = "red";
*/  

#### CHANGING ELEMENTS WITH JAVASCRIPT: WHAT TO NOTE!
Every properties of a tag can be changed using the query selector but the property name migth look a bit different. Like the querySelector it is camel case. This is standard naming method in javascript.So say you want to change font size it will be camelcase i.e fontSize and you can find all the details in the dom style documentation. They are the same with css but for dom it is camel case. Then to specify any value for any property it has to be in a string.

### SEPARATION OF CONCERNS - Keeping our style in css and using javascript to turn it on and off.

It is very important to understand the separation of concerns in web development.
This means we know what each of out files or scripts is to do.
The HTML is for content only
The CSS is for styling the website
Javascript is there for behaviour.

It is important to follow this rule. This means it is wrong to change style with javascript. But still if we need to change things on the fly then we must still use javascript. So how do we get it done. There is always a way. What we can tap into is what we call class list and its always a part of the DOM. 

usage:
document.querySelector("button").classList;

Once we can access this, we can add a new class to any html tag or element

document.querySelector("button").classList.add("invisible");

This will add a new class called individual to the button tag inside our html.

Say we have already have a styling for invisible as a class in our css.
Immediately that we add that class to the button, the styling will be applied.
By this we can keep all our styling inside the css and use javascript to turn it on and off.

The same way we can add a class, we can also remove a class.

document.querySelector("button").classList.remove("invisible");

Another one like the above is toggle. It switch a class one and off.

usage:

document.querySelector("button").classList.toggle("invisible");

By doing all this we stay true to the separation of concerns. If any error happens it is easier for us to debug our code. So if any element is not looking the way it should, we will go into our css and change it. At the same time if any element does not act the way is should we'll go into our javascript and change it.

This makes our styling and our behaviour to be smooth and easy to manage.

#### Text Manipulation and the Text Content Property CHANGING TEXT WITH OUR JAVASCRIPT SELECTOR
Before now we have been manipulating text in our html element using .innerHTML property. We can also do this with another property called textContent.

For example:
document.getElementById("title").innerHTML = "Good Bye";
document.getElementById(h1).textContent = "Good Bye";

If we run the two example above, it seems they are doing the same thing i.e just change the text of the element that we select. But actually not totally the same.

innerHTML changes all the HTML content in-between the selected tag. It gives all the HTML elements between the html tag including any HTML tags there. This means we can write HTML file on the go also.
On the other way round, textContent property only changes the text between the specified tag without tampering with any other html tags within the selected tag.

Say we have the html file below:
<h1><em>Hello</em></h1>

Using innerHTML will change eveerything within the h1 tag to whatever text or content we specify while textContent will only change the Hello text within the tags. This can help us in properly adding either other HTML tags or just changing the text within our tags.

So if we have this in our html file
<h1>Hello</h1>

running
document.querySelector("h1").innerHTML = "<em>Good Bye<em>"
This will also add the em tag to the text content he Hello text is changed to.
Note that the tags will also be within the quotation and if not it will be taken as javascript code.

#### MANIPULATING THE ATTRIBUTE OF ANY ELEMENT
Apart from changing the style and also the content of our html element, we can also change their attributes. Anything that go inside the tag other than the tag name itself is an attribute.

Say we have a link tag that points to google and we want to make it point to another link, this can be done using Js.

document.querySelector("a").attributes;

The above will give us all the attributes associated with that a tag.

document.querySelector("a")getAttribute("href");

The above will give us the link embeded in the anchor tag.

We can go ahead to change it by using setAttribute. This property takes two (2) paramenters, the first is what attribute you want to change and the second is what you want to change it to. Say we want to change the href to openai - chatGPT running the code below will get the job done.

document.querySelector("a").setAtrribute("href", "https://www.chat.openai.com/chat");

Once this code runs, if anyone click on the link, though it still says google since we didn't change the innerHTML, it will go straight to chatGPT page.

So we can get, set or see what any attribute of our elements are in the DOM.


#### ANOTHER TIPS TO GET GOING
Sometimes it har getting started and keeping the consistency in learning or doing something. This happens to almost everyone but there is a simple trick that can get you going. It is all about tricking your brain to just get started. So you can say to yourself, I will just sit down and work on this for just 20 minutes. Just 20 mins and your body can go ahead and do whatever it wants to do. This is what you say to your body and then you get started. The idea is immediately you get started, their is an inertia that is starting up and will mostly keep you going beyond the 20 mins duration you set for yourself. On the other way round if what you are just able to do is that 20 mins then it is just fine. Go and do something else but mostly an innertial will keep you going beyond this time you set.

### ADDING EVENT LISTNERS TO BUTTONS, INPUTS AND GIVINGS RIGHT RESPONSES

Though we might have buttons in our design if we click on it nothing happens until we add an event listener to it.

Before we go further in our js file we can just add a function to take note of a time our button is clicked.

function handleClick() {
  alert("I got clicked");
}

To go further, we now have to select our button and add an event listener to it whenever it's clicked and when it does, call the function above.

document.querySelector("button").addEventlistener("click", handleClick);


we do this using a method called addEventListener

In general, using addEventListener is as follows
Usage:
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);

target is the object we are calling event listener on, in our example above it is our button. The add event listener method has two usually has two parameter.

The first is the type of event. There are many of them - you can check the documentation to know more. In our example here and for our button we will use a very simple one which is the click.

The second parameter is a listener and this listener is usually a javascript function that is going to be called when that click is encountered or the event is done. So here we will call our function handleClick().


document.querySelector("button").addEventlistener("click", handleClick);

So the code above select our first  button, add an event listener to it and when it occur, it call our function handleClick. This should show our alert "I got clicked".

Running the code. Eveerytime, our first button got clicked, we'll have an alert that says "I got clicked" in our browser.

This is something important to note. This is how we call our function in this program. We use handleClick to call the function intead of our normal handleClick(). This is because if we use handleClick(), the browser will see the function 
and execute it immediately it reads the html file and encountered the function call in the js file. This implies that the alert will come up immediately our browser loads-up.

document.querySelector("button").addEventlistener("click", handleClick()); // This will call the function immediately the browser loads i.e it will display our alert immediately the browser loads up.

But we only want it to trigger when the event happened and that is what the event listener is there for. This is part of the things we need to get acquinted to in writing javascript and manipulating the DOM.

It is the idea of passing an imput so it can be called later in the program.

document.querySelector("button").addEventListener("click", handleClick);
function handleClick() {
  alert("I got clicked");
}

Most of the time many people will write this as an annonymous function


#### ANNONYMOUS FUNCTION
Annonymous function are functions that are annonymous that means they dont have a name. And most of the time they are added directly to where the function would be called.
Let's turn the above to an annonymous function.

document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked");

  // Everyting do be done when the button get clicked goes here.
});

Quick Excercise:
write a the code that wil add an event listener to all the buttons.


Once done look at the code below:
var x = document.querySelectorAll("button").length;
for (let i = 0; i < x; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
  alert("I got clicked");
})};

This does exactly the same thing with what we have before.

The code above, although add an event listener to the button but it is very dangerous. Consider a situation where we add another button to our page. This code will capture it too which is not a good practice. What we can do is to be specific about the button selected. To do this we can use the class drum which is added to all the specific buttons. Take a look at the code below.

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
  alert("I got clicked");
})};

The code above uses for loop and when any button is clicked the for loop is ran assigning the clicked button value to i and that value determine the button the event listener is added to which then displays our alert.

You can also use while loop for the above. The only thing you should not do is to write the code 7 times listening to each of the button. If you seems to be a little bit unconvenient with the solution above or finds it a bit difficult, try and revisit the loops in javasscript.

### HIGHER ORDER FUNCTION
As we have a named function we also have annonymous fucntion.
In our Chrome we can inspect any webpage and use the console to make changes to the page. Though this changes will be removed once we refresh the page but this can help us to understand how the browser works.

$0.addEventListener("click", function() { console.log("I got clicked")}); //This code will pick the first html element content, add a click event listener to it and log the message I got clicked when clicked.

Looking at the addEventListener above we can see that it looks a bit different from the normal functions we used to have. It takes in two paramenter where one is another function entirely.

We can try and observe the code that the browser (Chrome) used to implement the event listener.

Say we want to create a calculator.

if we just say

fucntion calculator(num1, num2) {
  return num1 + num2;
}

if we continue to create this function for all operations, it might be tiresom. Instead of this we can create a function that also take the operations we want to do.

So we can create all our operator function and call them in our calculator function. This means our calculator function will take three parameter, the first is the first number, second the second number and the third will be our operator fucntion.

function add(num1, num2) {return num1 + num2};
function subtract(num1, num2) {return num1 - num2};
function multiply(num1, num2) {return num1 * num2};
function divide(num1, num2) {return num1 / num2};

function calculator(num1, num2, operator) {return operator(num1, num2)};

We can learn more on how this processes works by using the debugger in the chrome developer tools. To get that just type debugger in the chrome console press shif + enter and then type the function you want to call. This runs the function in the debugger allowing us to follow step by step as the code runs. This is very useful because it helps us to catch error in our code instead of us playing computer in our head.

Once the code is in the bebugger space, press the down arrow button by the right panel to see as the processing of the code proceed till it returns the output in the console.

This functions that can take another function as a parameter is called higher order function.
Higher order functions are functions that can take other functions as inputs. This feature is available in many other modern languages and javascript use it a lot.



#### ADDING A SPECIFIC EVENT 
Now we want our buttons in our last work, instead of console.log("I got clicked") to paly a sound. This can be done with the code below

var x = document.querySelectorAll(".drum").length;
for (let i = 0; i < x; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
})};
ML audio element and then call the play method on it to play the sound. At the background this code will create an HTML audio element and we can perform several operations on it. Check the HTMLMediaElement documentation for details.

we an add a background image to any of the button in our css using the code blow and specifying the source.

background-image: url(images/tom1.png);

Now to get the identity of the button clicked, we can use the this method and specifying the property we want to get which in this case is the innerHTML

So to pick the identity of the specific button we can use this.

this.innerHTML

The above will give us the innerHTML of the button that got clicked.

We can also change the color of the button by writing the code below

this.style.color = "#fff";

### JAVASCRIPT OBJECTS Dominating the Web, One Object at at Time.

Say we have multiple items with different properties, In real life the easiest thing to do would have been to put the details in a table.

Say the new enrol students in our school. Now each of them will have a firstname, lastname, age, address, parent job, likes and dislikes. To capture this data instead of writing a long dcument, we can easily do that using a table. This will capture their properties easily and quickly.
In Javascript, we can create an object to perform the same operation.

var student1 = {
  fullName: "Ademola Femo",
  age: 21,
  stateOfOrigin: "Ogun",
  veryBrilliant: True,
  likes: ["food", "game", film]
}

With the above we can quickly get any information about the student. Say we want to know the fullname of this student, we can create an alert that like below.

alert("Hello, my name is " + student1.name)

We are using the . to access the name property of the student1. This makes our data more structured and easy to access. With this we have created a javascript object. We can create any object depending on the data that we want. For different object we can create different properties depending on the object.

if we just type student1, it wil return all the properties of the object and we can tap into any of the properties with the . notation.

var houseKeeper1 = {
    name: "Beauty",
    age: 17,
    skill: ["wash", "clean", "mob", "decorate"]
}

saying housekeepr1.name wil give us the name of this housekeeper.

If we want to create more object of this same property we dont need to start all over, we will only need to change the value of some to the properties.

### CONSTRUCTOR FUNCTION
In javascript we can create a factory that helps create many object of the same type, this is called a constructor function.

It looks like the below

function HouseKeeper (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasworkPermit;
  this.languages = languages;
}

The unique identity about a constructor function is that the firstletter of the first word has to be capitalized or the first letter of the words has to be capitalized and not camel case like we used to have. It also take a number of input and this is what we will supply when creating a new object.

#### INITIALIZING A CONTRUCTOR FUNCTION

var houseKeeper1 = new HouseKeeper("Beauty", 19, true, ["French", "English"]);

In the above, we have the name of the new housekeeper as an object, then we use the constructor function supplying its. The name, age, hasWorkPermit and languages values. This is shorter than creating a new object all the time.

The difference here is the new and the name of the Constructor function.

We can write a constructor function that create a new student

function SchoolStudent (name, age, likes) {
    this.name = name;
    this.age = age;
    this.likes = likes;
}

var student1 = new SchoolStudent("Ade", 17, ["food", "football", "story", "film"])

#### SETTING A NEW SOUND FOR EACH OF OUR BUTTON

To change assign a different sound for each btton, we will need to write a long if statement. A better way to make this easier is using the switch statement.

Usage:

switch (var) {
  case expression;

  break;
  default;
}

Between the colum and the break statement, is everything we want the code to do once the expression is true.

The default is the last statement, it is like the case else in our if statement. It it is always a good practice to set it. We can just console log the innerHTML of the button should incase it happens.

See the full code for the drum skit below

var x = document.querySelectorAll(".drum").length;
for (let i = 0; i < x; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
        break;
        case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
        break;
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
        break;
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
        break;
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
        break;
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
        break;
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
        break;
        default: console.log(buttonInnerHTML);
    }
})};

#### METHODS AND THE DOT NOTATION

We can make our object have a function, this function can simply be added as one of the attribute of our object.

var houseKeeper1 = {
    name: "Beauty",
    age: 17,
    skill: ["wash", "clean", "mob", "decorate"],
    washPlate: function() {
      alert("May I pack the plate for washing?");
      packPlate();
      wash();
    }
}

In the above we just put an annonymous function as on of the properties of the houseKeeper1 as an object.

The function above is a method.

We can simply call the method by saying

houseKeeper1.washPlate();

We always use the . notation for using a method attached to an object. The difference between the calling of object property or method is the parenthesis (). So look out for it.

We can also incorporate the method into the constructor function so that whenever we create a new object it also has the method.

function HouseKeeper (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasworkPermit;
  this.languages = languages;
  this.washPlate = function() {
      alert("May I pack the plate for washing?");
      packPlate();
      wash();
    }
}

var houseKeeper1 = new Housekeeper("Bola", 13, ["waashing", "Bathroom"]);

houseKeeper1.newPlate();
This will give the alert "May I pack the plate for washing?"

The above is just like that of our audio

function AUdio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function() {
    //Tap into the audio hardware
    //Check the fifle at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
}

var tom1 = new Audio("sounds/tom-1.mp3");
tom1.paly();

The above is what the constructor function for our audio play. We initialized it and use the method play on our new audio object.


### jQuery : The JavaScript Library that will Prevent Our Fingers From Breaking

This is like the most popular javascript library. Though there are many of JavaScript library but jQuery is most downloaded and used.

Imagine how many line of code we write just to do something simple to manipulate the dom. This is more painful for John Risik. He decided to create a library that will make all this easy. This is how jQuery was born.

JQuery was born. It was a set of code that you can use in your work. The same way we use bootstrap to make how UI looks nice, jQuery makes DOM manipulation easy.

say we have
document.querySelector("h1");

If we are to use JQuery to do the above, it will be
jQuery("h1")

The shorter way is to say
$("h1");

So document.querySelector("h1") with jQuery si simply $("h1"). This is extremely easier and shorter so we dont have to break our hands by typing a lot of javascript codes.

#### HOW TO INCORPORATE JQUERY INTO WEBSITES

You can just head to jquery.com. Just like our bootstrap, you can just download all the jQuery or you use their cdn. In our bootstrap section we explain what Content Delivery Network (cdn) is. You can go back to read or review it.

The most popular option is to use Googlecdn. The beauty about using a popular jQuery is that if user have visit a site that uses the same channel to fetch jQuery data, it means that it would have been cached on their browser thereby making it fast to fetch when they load your site. They would not need to fetch another one. Check under library, download, Copy the cdn with the script tag and create a new project called jQuery and create all the necessary files.

If you'll use jQuery, it must be linked in the right place in our html. Mostly before the body closing tag and above our main index.js file.
If you place the jQuery cdn link below the js file link, there would be an error because the browser will check the index.js file first, once it encountered the dollar sign since it doesn't have a definition for it, it's sure to return an error.

Also if you put the 2 links i.e jQuery and js in the head tag of you rhtml file. When you load your website there might not be any error because the html element is not even encountered yet. But with this we can still set our script code to be fetched only when it is ready

(document).ready(function () {
  $("h1").css("color", "red");
});

Putting our jQuery and script tag in the head must be done carefully.

The code above will wait until our jQuery library is ready and then access the h1 to change its color.

you can choose what works fro you but it is good to just put the jQuery cdn link and your script tag before the closing of the body. This means all the html element must have loaded before tapping into them and manipulating them.

#### HOW MINIFICATION WORKS TO REDUCE FILE SIZE
If you copy the jQuery cdn link and paste it into the browser, you will only see a reduce page full od some code. It is a minified version of the jQuery code.

The same way bootsrap is for css is jQuery for javascript. If we copy some part of the code and put it in an editor, it is the normal code with all the spaces removed to reduce it size.
You can go to minify.org to reduce your code to a minified version. It makes our code smaller in size and easier to load by the browser since it doesn't care about the spaces, tabs and comments. This will still take some time on the client browser.
So if we download the jQuery, we'll have the main version that is human readable and a minified version for the browser. Also we can customize the human readable version and minified it for use in your project.

#### SELECTING ELEMENTS WITH JQUERY
We already know that we can select html elements with javascript.
document.querySelector("h1"); will select h1. In jquery we can remove many parts there to just say $("h1").
We can also work with the CSS properties.

$("button")
this select all the button. In javascript, we use selecorAll but in jQuery there is no difference bewteen selecting all or selecting one.

We can manipulate the css properties of any elements by using the .css method on any element.
$("h1").css("color", "green");
This will change the color of the h1 to green.

we can also console log any property value.

console.log($("h1").css("font-family"));

If we have one parameter in the .css method, we will get the value, if we have two then we are setting the value.

$("h1").css("font-family", "sans-serif");

But changing our style in our javascript looks dirty and is not too good because we need to keep to the matter of concern.

What we should do is set our class in our css file and then use javascript to turn add it to an element.

$("h1").addClass("big-title");

This will add the clss big-title styling to our h1. If we refresh our page the style specified by the class will be applied. This is a good way of separating our style from our functionality.

The same way we can add a class, we can remove a class. We can also add or remove multiple classes. All we need to do is to include them within the same quotation mark we input the class with spacing between them.

$("h1").addClass("big-title ");

We can also query if a class is used 
$("h1").hasClass("margin-50"); // will return true or false.

#### CHANGING ELEMENT TEXT WITH JQUERY
We can change the text element of an HTML element with jQuery in two ways.

$("h1").text("Bye");

When we use jQuery to select element, it select all element that matches the selected element. The .text method can change the text.

$("button").text("Dont click me")
This will change all the text of the button to what's specified above.

Also, we have used innerHTML, we can also use this to change the text and also add other HTML element. In DOM it is innerHTML but with jQuery it is shorter, it is .html.

$("button").html("<em>Hey</em>");

.html can be used to add other HTML element while .text will just take everything as text and ignore any HTML tag in it.

As we have discussed on methods, jQuery uses methods that helps to shorten the codes we need to write. You can take a look at the downloaded jQuery file to see the codes. The plain javascript - vanilla javascript must be properly understood for one to successfully work with the web development tools like jQuery or any other library.

#### MANIPULATING ATTRIBUTES WITH JQUERY

As we have learnt about attributes. For an image we have src
<img src="drum.png" alt="">
for a tag its href
<a href="https://google.com"></a>
We have a simpler way of setting attributes in jQuery

$("img").attr("src");
We can use the above to get the value of an attribute
Also we can set the value of the attribute with the second parameter

$("a").attr("href", "https://www.yahoo.com");

The code above will select all the anchor tag and set their value to what we specified.

Also note that a class is also an attribute. We can use the .attr to print out the class of an element.
$("h1").attr("class");

#### ADDING EVENT LISTENER TO OUT HTML ELEMENT USING JQUERY

$("h1").click(function() {
  $("h1").css("color", "purple");
});

Formerly if we want to add an event listener to multiple element of the same type, we need to use a for loop.

for (var i = 0; i<(document.querySelectorAll).length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
}

This can be done easily using jQuery

$("button").click(function() {
  $("h1").css("color", "purple");
});

This seems more shorter and easier, no need of any for loop.

Apart from click event, we can also bind a keypress event listener

Let's add an input to our html
 <input type="text" name="" value="">

 we can easily listen for a keypress/keystrokes in that input/textbox

 $("input").keypress(function(event) {
  console.log(event.key);
 });

 This will console.log any key press in the console.

 If we want to do what we do in our drum kit, we can easily do it in jQuery.


 $(document).keypress(function(event) {
  console.log(event.key);
 });

 This add a keypress event listener to the entire document.

 Say we want to change our h1 text to any keypress, we can easily do that with the code below

 $(document).keypress(function(event) {
  $("h1").text(event.key);
 });

 Now there is also an easy way to add event listener, instead of using .click, .keypress etc we can simply use .on

 .on takes two parameter, the first is the event we are listening for and the second is the action or function to do.

 $("h1").on("mouseover", function() {
  $("h1").css("color", ("purple"));
 });

 We can also listen for any event that are listed in the MDN event list.

 #### ADDING AND REMOVING ELEMENTS WITH JQUERY

 While our website is live and running we cna also use jQuery to add element on the fly.

We can use the before method
 $("h1").before("<button>New</button>");

 We have done this without changing our html file.
 We also have after - which create an html element after, we also have prepend and append. The difference between prepend and append is that prepend will add the html element withing the specified html element, immediaely after the opening tag. It will be added before the content of the html element specified. while append is after the html content of the element specified.

 Removing element is almost the same thing. Say we want to remove all element.

 $("button").remove();
 This will remove all the button element insdie our current webpage.

 #### JQUERY ANIMATION
 Just like when we add a click event listener to our document but instead of using .css we can use .hide to perform some animation.

 $("button").click(function() {
  $("h1").css("color", "purple");
  });

  Becoming
  $("button").click(function() {
  $("h1").hide();
  });

  This will hide the h1 when aby button is clicked.

  To make it appear we can 
$("h1").show();

We cna instead of hiding it make a toggle

$("button").click(function() {
  $("h1").toggle();
  });

  Note the hide is so sudden which is not too good, so to make it have some cool behaviour we can use the fadeout

  $(h1").fadeOut();
  or $("h1")fadeIn();
  This two also come with a fadeout or in option.

  $("button").click(function() {
  $("h1").fadeToggle();
  });

  We can also use slideToogle to use slide up and sown, this is vey good for a drop down.
  
  $("button").click(function() {
  $("h1").slideToggle();
  });

  Instead of using all this pre built in method we can use something call .animate to define what we want to annimate to. We cna just include the css.

  $("button").on("click", function() {
    $("h1").animate({opacity: 0.5});
  });

  Note we can only animate to values that or properties that have a numeric value. This means we can't animate to color.
  for other values we can just specify them directly but for percentage we will put it in a string. 

  To include more than one of this, we can just chain the method together.

  $("button").on("click", function() {
    $("h1").slideUp.slideDown.animate({opacity: 0.5});
  });

  This will perform a slide downup and then down and then annimate. Not if all of the chaining are targetting the same thing, then it will do it one after the other.

  This is surely cool.

  Then if you can,t remember all this, it is very fine. Programmin is like an open book exam, no one tries to remember anything only that you understand some things or what is going on. So remember you have the documentation and the whole world wide web. You only need to know they exist and roughly what they are called and you are fine.

  A proper search will give you exactly what you need immediately.

  #### TIPS
  For the human brain, connections are very important. It is good to learn something but it is more benefitial to mix different aspects of knowledge. This makes better connection in the brain. Let's say you learn A and hen B, if you can bring together the two in doing one thing or within the same context, it solidifies the knowledge learnt.

  ## THE UNIX COMMAND LINE

  Some persons have said that you can only call yourself a true developer if and only you can use the command line. The command line is very powerful because other than using the graphical user interface, with the command line you can issue instruction to the computer throug commands.

### SETUP
  You can install hyper from hyper.is either from windows or mac. On mac just download, unzip and moveto the appication folder. On windows go to hyper.is, download hyper for windows and install the exe file. Once done you wil see the hyper terminal.

  Another thing to install for windows is the gitbash because it will allow us to use the bash command line. Go to git-sem.com, go to download and then download for windows oce downloaded double click on the exe file and follow the installation wizrd to install. Go with all the default option once done restart your system.

  The next is to configure hyper, the link is available in the link. Once copied, go to hyper click on the top left button, select edit then preferences, this will open up the configuration file, delete everything in it and past the new copied configuration from the link, click on save and close it. Once done hyper will load and update its configuration close and restart hyper to ensure everything go through.

  To confirm its working well, open hyper and type 
  echo $SHELL
  You should have /bin/bash as the result of the command. If true then you are good.

  ### UNDERTANDING THE COMMAND LINE
  The command line is very useful and also a good friend of any technology developer.

  We will be using the hyper terminal because it allows access to the bash shell.

  #### WHAT IS BASH SHELL
  In order to know what the bash shell is, we need to know what the bash is. Think about an egg, the shell is the cover of the edible part of the egg. This egg shell can represent the shell while the inner edible of the egg is what we call the kernel. The kernel is the program that interfaces with the hardware. It is the core of your operating system. The shell in computing refers to the interactive or the interface for usersto interact with the kernel and in turn with the hardware of the computer.

  #### TYPES OF SHELL
  The first is the graphical user interface - GUI. This is the most common and easiest user interface available in almost all operating system. It is sometimes called the click, drag and drop interface.
  The second is the command line interface - CLI. This is an interface that uses command typed on the command line to instruct the computer. It is always dreaded by many but it can be learnt just like our drag and drop interface. It is very simple and very useful.

  To learn the CLI we will be using the Bash - Bourne Again Shell. The Bash is named after Mr Bourne who is famous for working on the UNIX. The bash shell is the command line interpreter for the unix operating systems. You will find a unix like system everywhere. Example is the linux and even the mac os 10. These are all different from the windows operating system which uses the DOS file system.

  #### WHY USE THE COMMAND LINE AT ALL
  The simple answer to this question all boils down to greater control. To become a better deveoper or in any technology, you will need to exert more control over the hardware which is what the shell gives you ability to do. Doing common day to day task is much more easier and faster using the command line.

  Unlike on the GUI where to make a music folder one has to take different or multiple clicks, on the CLI making a music folder is just as simple as typing the command below on the command line.
  mkdir Music
  To make another folder say Music2 is just typing 
  mkdir Music2
  This would have take another long process on the GUI.
  So it all about speed and control.

  Another thing to note is that the GUI is that they tried to hide many things and any complicated stuff either useful or unuseful to the user. An example is the configuration files, GUI will always hide things like this from the common user. The idea is that unless you know how to deal with it, then you shouldn't even see it.
  On the other hand the CLI give a lot of flexibilities.
  For example files are easily hidden on the GUI while all files can be seen by using the command below on the CLI
  ls -a
  Also the command line make using git and version control very easy which is very useful and important for all developers.

  We will be learning some command and using the CLI for all operations.

  #### COMMAND LINE TECHNIQUE AND DIRECTORY NAVIGATION
  The first step is to open the termial. Your configuration or colour and appearance might be a bit different. This happens depending on what you think is good, like the green text colour can be used because its good for the eyes especially in the night and also makes you look like a badass haker when it is used.

  You can go to hackertyper.com to make you look like a hacker while in a major public  place. You can basically just bash the keys and it will display like a hacking session. You can use this to wow your friends.

  #### SHELL COMMANDS

  ls - It list all the file in the present directory you are in.
  You can know the present directory you are by what shows by the left after the collon and before the $ sign or you can also use a command to see what directory you are in presently.
  pwd - it display your present working directory - pwd

  You can confirm this from your GUI.

  You might see the name of the directory start with the ~ sign, this shows your root directory. This means the directory that is used as the base or starting or default directory for your operations.

  If you want to go into another folder, how do you do that.

  Say we have some folder/directory in your present directory, to go into any one you can use the command
  cd directoryname - change directory

  If my directory exist then I am now inside it, to go back to the previous directory by using 
  cd ..

  I can keep using cd direcotryname to navigate and keep entering one folder to another and also cd .. to back out from one foder to the other.

  To type a folder name faster, you can always tap the tab button, this will complete the direcotry name or suggest those available.

  we can go to the root directly by using
  cd ~
  We can type a full path of a directory if we know where it is.

  cd Document/tutorial/web_development 
  If I type this while in the root folder that has Document folder and all this folders exist in order, this command will take me directly into the web_development folder.

  Dont forget to always use the tab button to complete your typin on the command line.

  We can also re use a previous command by using the arrow up or down button on the keyboard. This takes you through your command history.
  You can always confirm your present folder using ls to ensure you are in the right folder.

  We can go up multiple level and back multiple level

  if I am in wed_development folder

  I can go back to my root folder by
  cd ../../ 
  This takes me back twice

  With much power comes more responsibility. Some commands needs more carefulness while using them on the CLI.

  Another thing is changing the position of the cursor, say you want to correct a typo somehwere at the back in your command, The CLI only allow you to type where the cursor is while we can use the arrow right and left to move the cursor, a quick trick is holding the command or alt button and clicking on the position you want the cursor to be for the edit.

  Also control + A takes you to the beginning of the line while control + E takes you to the end of the line. Control + U clears the present command so you can write a new command.

  #### CREATING, OPENING REMOVING AND FILE MANIPULATION
  Say we want to make a new directory, 
  wecna use
  mkdir direcotoryname
  Also say we want to create a file
  touch Text2.txt

  To open a file we can use
  open filename or start filename
  In the above command, dont forget the extension or just use the tab button to see suggestions or what is available.
  You can also specify the application to use in opening the file. Say we want to open the file we create above with Atom

  open -a Atom Text2.tx or start atom Text2.txt on windows

  To delete files inside the present folder
  rm filename
  rm = remove

  Say we want to remove all files in a folder
  rm *
  This removes everything in the current folder.

  NOTE!

  FILES HANDLING ON THE CLI MUST BE DONE WITH CARE AND ULTIMATE CAREFULNESS. THIS IS BECAUSE THERE IS NO RESTRICTIONS. THIS MEANS THAT ANYTHING CHANGED IS CHANGED AND ANYTHING REMOVED IS GONE. THE WHOLE OPERATING SYSTEM CAN BE REMOVED i.e DELETED ON THE CLI which is not permitted on the GUI.

  BE WARNED!!!

  Always check your present working directory before doing anything.

  To remove a directory, we need to add the option -r
  rm -r directoryname

  Once done, the whole folder is gone.
  The -f option means force

  sudo means root user permision

  all this options can be considered dangerous and to be used only if you know what you're doing.

  The command below can be used to wipe the whole hard disk empty
  sudo rm -rf --no-preserve-root/

  ## TIP

  It has been said that you have to cut on sleep to perform better but this is extremely dangerous.
  Sleep helps your brain to function more and reboot and refresh and perform better. So in your learning journey, ensure you get a good sleep.
  You might have an alarm before sleep that helps to remind you to quit everything and wind down and get ready for sleep. There is nothing or drug or medicine that helps you better than sleep. So try it and keep going.

  ## BACKEND WEB DEVELOPMENT

  Having looked at many technologies for front end wed design. This inludes; HTML, CSS, Bootstrap, Javascript, jQuery. It is time to learn the backend technologies too. The combination of this two makes you a full stack web developer.

  ### FULL STACK DEVELOPMENT
  Full Stack = Front-End + Back-End
  A fullstack web developer interacts with both the front end and the back end. Having learn the technologies for the front end, it is time to learn the technologies for the backend, this includes nodejs. This helps us to interact with databases, have business logic on the server, etc.

  ### WHAT IS THE BACKEND
  Backend consists of the following:
  A server: which save and serve your files - HTML, CSS and js.
  A Database: which store your user data - login,password, etc
  and Application: which perform specific task or operations for your users. It handles business logic and get things done as regarding the user.

  Look at the eventbrite. It is a web application because it does not just display things but does things for the user like find events, register a user for events and many more.

  When a user register, this data is stored on their database. With this user data saved on the database, if the user comes back later, it can get this data and use them to serve the user. For example it can retrieve this user ticket because it has been saved.

  If web development is a restaurant, there is the beautiful front space where customer sit and attended to. At the same time, there is the kitchen where the cooking is done and then the larder or cupboard or shelf or store where the cooking material and resources is stored. This is the client side

  The front space is the user interface, this is the UX/UX.It is the where the user interact with the restaurant. It is what the user see in the browser.
  Then there is the kitchen which represent the server, this is where allour dishes get served from. When any order is made from the client, the order is sent to the server - the kitchen, the order is prepared and the fulfilment or the response is sent back to the client.
  Now the Larder/cupboard/shelf/store is where all the ingredient is stored is the database. This is where all user data, event data, ticket data or everything that makes our app work is stored.

  The point where the divide happens is between the client side (FrontEnd) and the server + the database (Backend).

  It is not compulsory to have the separate, this will just means you bring all your ingredient before the user, prepare the order and serve it all in front of the user. The only thing is that doing this will expose your recipee and other can easily replicate it.
  
  In the same vein, this is where we have a separation of logic, you dont want the user to have access to your api key, and codes. At the same time,it will be time consuming to make the dish in front of the client, because you have to bring the utensils, ingredient and other tools one by one. For a website this translate to a long loading time. So if you have a lot of code that is run by the browser instead of it coming from the backend then it will mean a longer loading time for the browser.

  The alternative just like in our kitchen we receive the order, we take the ingredient from the larder and prepare the dish in the kitchen then serve back to the client. Our server recives the the request from the client, get the necessary data from the database, the server interacts with the data, run some code on the server using the data from the database and then create the application which is then served to the client.This means we dont have to transport all the ingredient or code or tools for making the response. This increases speed and ease.

  On the backend a lot of technologies are used. This incudes php,ruby, java, nodejs and more. Also each of thses technology has framework such as laravel, ruby on rails, spring, express which speed up development.
  
  These frameworks helps to reduces a lot of repetitive works a developer has to do. And just like we dont want to keep writing html boiler plate every single time, a lot of these frameworks make a developer work much easier by cutting on the ground work and saving a lot of time.

  So we'll diving deep into one of this which is nodejs and express. And in doing this we dont need to learn a new programming language to use it because it runs on javascript.


## NODE JS
WHAT IS NODE JS

We now know why we nee a backend and which technology can we use, we can use java, php, ruby on rails, python or nodejs but we will be using Nodejs.

WHY NODE JS
This is because we already know some things in Javascript and node allow us to create a backend using javascript so we dont have to spend a lot of time learning a new language. We already know how to use javascript. Also we are not the only one using node, we have companies like wikipedia, ebay, uber, twitter now X, netflix, trello etc are joining in the usage. In the last few years node has gain a great popularity and we will soon see what it can do. It is also very fast.
Furthermore, fomerly we hava always written javascript codes that get run by the browser. Up until now that javascript code has been kept and locked behind bars inside the browser. We have written codes that does things on the browser but has never gone beyond that. Like getting into the user system, network detup and others. Also your site becomes endangered and also dangerous to user if hackers can see your codes just inspecting the pages. Also if you will have to build a desktop app like atom, you will need to be able to have aacess to the user file system to load the code the user will edit. So writing code that access the file system or listens to the network request, you will need to write code that interact directly with the user computer without the browser and this is what nodejs allows us to do. Nodejs helps us to take our js out of the browser and put it on our browser and use it to give functionality and others. So as we use javascript to create functionality, we use nodejs to interact with the user computer. The atom file eidtor we use is written with nodejs. So node allow us to write full application that runs on our computer.

WHY IS THIS IMPORTANT
We cannot only write application that runs on our computer, we can use it to run javascript codes on another persons computer. That is a server. Just like google, once you search google in your browser, your browser send requests to google and this will be directed to its server, the server run javascript code to find the query and this will be sent back as responsed to the user through the browser. All this heavy lifting happens on the server rather than on the browser. This makes a browser a lot more secure and fast.

### THE POWER OF THE COMMAND LINE AND HOW TO USE NODE
Using the command line requires a little bit of immagination. On the command line we can know where we are by using the command
pwd - This shows your present working directory.

You can also manouvere to any directory using the command
cd direname - change directory where dirname is the directory name you want to move into.

We can use the command ls to list the content of the present directory

We can create a new directory with the command mkdir

mkdir dirname - make directory

We can create a new file with touch filename
touch index.js

The command line gives a great power and with that the saying "with great power comes great responsibility"

we can open the above file with our editor. Before now we can only run the file inside our browser console but now we can run it in our computer using node.
node index.js

### READ EVALUATION PRINT LOOP REPL

Just like we are able to run command in bit within the chrome console, we can also write line of code and press enter to run it using node REPL. By installing node we also install node REPL and to access it we just use the command node

We can just write console.log("Hello world"); This will display hello world.
we can execute 2+3 or any other mathematical operation directly. We can also use tab to complete our command. If we tap it once it will complete what we are writing and if once doesn't work we can tap it twice to it all suggestions that follows with what we type.

We can use the command .exit or use ctr + C twice. You can also clear the console by using the command clear. 


### USING THE NATIVE NODE MODULE
When we installed node it already comes with some native node modules bundled into it. This are reusable code written by node developer that are provided for our use once we installed node.

The full details of this is provided in the node documentation site nodejs.org/api
Here we can see all nodejs native module and how to use it.
We can now use nodejs to interact with the computer directly. On of this is file system. It elps us to interact with the local file system and we can use it by requiring it.

We can do this in our index.js file.

#### DIFFERENCE BETWEEN VAR LET AND CONST
Before now we have been using var. This is because we can vary the value we assign to it.
var a = 3;
var a = 5; //this can proceed without any error

Const is just the opposite of var, once we assign a value to it we can't change that value.

const a = 3;
const a = 5; //this cannot proceed without any error

It will tell us that we can't overide a because it is a constant.
Const are important for variable that doesn't change value in our code. e.g pi which has a constant value of 3.14 dependending on the decimal places.

Let is used to create a variable withing a specific scope. It means the variable can only take effect within a specified block of God. This variable won't be accessible outside that scope of code. An example is a variable for iteration.

### CONTINUATION

const fs = require("fs");
This gives us access to the module fs - file system.
Sometimes the linter can complain that we are not using ES6 but we can correct this by outting the below comment at the top of our code

//jshint esversion:6

Once we have require this module then we can use it. The documentation show us all this.

lets say we want to copy file1 into a new file 2

In the documentation we can see
fs.copyFileSync(src, dest[, flag])

where
src = source filename to copy
dest = the destination filename to copy into

we can now have
fs.copyfileSync(file1.txt, file2.txt)

This code we check in the current folder for the file1.txt if exits, it will copy the content  and put it inside file2.txt. If file2.txt is not existing, it will be created and if existing it will overwrite its content.

We can now run the code with the command
node index.js

Now we can run code and manipulate file on our computer using node.
In the next lesson we will use node external module.

### THE NPM PACKAGE MANAGER AND INSTALLING + USING EXTERNAL NODE MODULES

Apart from native node modules that comes with node, we can also use external node modules built by anyone in our node project. This is managed by what we called NPM - Node Package Manager

#### NODE PACKAGE MANAGER - (NPM)
It is currently the largest package manager.
WHY USE NPM
Lets say you are building a lego house and you have already did a lot of work to put the house together. Let's say you want to have some tree in the house, intead of working strenously to create the tree, you can just go to npm to find a tree and use it in the house. This is exactly the same with code. The packages on NPM are bits of reusable code which you can go ahead and use through npm to save some work and time in your project.
NPM already get bundled with node so it is available when you install node.

In our console we can intialize npm in our new project.

On the terminal and in our project directory we can set it up using the following.

npm init

We can follow the prompt and put in the required details.

Once the whole prompt information is filled and we press enter at the end. The package.json file is generated wihich contains information about the project and any module we are uding in the project i.e npm packages.

We can install npm packages
Go to npmjs.com
Here there are more than 650,000 packages which we can search out and use in our project.

We will search and use superheroes. This module generate ramdom superhero name. To use it we have to install it. This can be done with the command npm install superheroes on the terminal and in our project directory.
Here we must spell the package name correctly. We can ignore all warnings for now.
We can look at the documentation to see how to use it.

If we run this code
var superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

console.log(mySuperheroName);

it will console.log a superhero name. Here we require the superhero name, then we assign it to a variable to create an object, then we use the method gotten by the module on the object and assign this to another variable. Then we console.log the variable.

So once we have initiate npm in our project with npm init, install the modules we need, then use the module following the documentation. With this we can build different stuffs with ease.

Let say we want our project to give us a superhero name and supervillain name.
We can just checkout the supervillain module on npm site, install it and require and use it in our project.
see our new code below

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();

console.log(mySuperheroName);

var mySupervillaineName = supervillains.random();

console.log(mySupervillaineName);

console.log("Who will win " + mySuperheroName + " vs " + mySupervillaineName + "?");

This is making our project more intersting.

Once we install any package, it will be added into our package.json file.

NOTE: In our project folder and the subsequent folders, it is possible to have several package.json file in our installed packages, this is because the packages we installed also depends on other packages. This means that those guys that built this modules we use also use some modules in their project. Most times this is how the development ecosystems operate, we can have projects over project depending on another and that one depending on another and another all over. All this can be found in the node modules folder in our project. All this depends are called dependencies for our project.


## TIPS
Most of the times we get required to do some big tasks that looks insurmountable. At this point we sometimes have doubts and some voices saying we can't get it done. But in this same moment, if we can just ignore this voices and take a step ahead to learn, do and put in our effort, it is this moment that we have great growth in us. So next time you doubt yourself, step up and keep going.

## EXPRESS
Express is a node framework. The same way we can add jQuery in our javascript to make things easy the same is express for node. Express allows or enable extra feaure in node which we dont need to code from scratch. It helps to provide ease and functionality and helps to structure your code especially for web app.

NOTE: we have said nodejs helps to liberate javascript from the browser, it means node is broad because it is a low level technology that allows us to interact directly with the computer and its hardware. That means we can create desktop app with it. This means it is broad. Express is more specific.
Imagine you have a pilip screwdriver and you can screw any screw you want anywhere, that is node. But lets say you do a lot of DIY and have a lot of screwing to do and you might need a motorized screwdriver - that is express. It was built to make you write less repetitive code when you developing for the web. Using express than using node is like saving your self ten times of work, effort and time in your web development.
Note: we programmers hate repetition.
If you go to npmjs.com uyou will see that the most dependent upon packages is express. Developers use it and are still using it. And we will be learning it in this module.

We will go ahead and build a server using node and express to make our code run on the server.

### CREATING A REAL SERVER USING NODE JS AND EXPRESS.
Having talked about the backend and its cool technology. It's time to create our first server.

For a challenge, go ahead and create a new project called my-express-server initialise it with server.js

To do this we will

create a new directory
cd into the directory
create the .js file
sitll on our terminal and in that folder we create
use the command
npm init
fill the required information
then press enter

Once we do this our package.json file will be created and this is the process we will go through anytime we are creating a new web development project.

Open that project in your editor.
if atom use atom . in the project folder.

The next is to install express. The information on how to do this can be found in the documentation express.com sepcifically express.com/en.starter/installing

Here we see the command
npm install express --save

the --save was added in other for express to be added to our package.json file but as from node version 5 this has been done automatically.

so we can simply use the command
npm install express

Once installed we can now require express in our js file server.js

const express = require("express");
//we require express
const app = express();
//create a new object variable to hold express. app is used because it is the common used for express ecosystem.
//app.listen(3000)
//here we are telling express to listen on a specific port for any request sent to our server. Here we shoose 3000. This is the backbone of any express server.
// If we go to our command line and our server.js file we don't see nay feedback or error but we will notice our cursor is hanging at the beginning of the next line. This is because it has started listening as we instructed in our code. This is just like oning your radio and tunning it to a certain station but let's say the station is not saying anything at that time. Everything will surely be quite. We can always stop the server with ctr + C.
// If we wants to see when or hear something when our server run we can add a callback function that just console.log a message say "server running on port 3000".
app.listen(3000, function () {
console.log("server started on port 3000");
});

// if we go to this server address on our browser. say localhost:3000 This because our server is running locally

//We will see an error cannot GET. This means when our browser makes a request, it doesn't get anything back from our server. So how do we write some code that give a response to our browser?

### HANDLING REQUEST AND RESPONSES THE GET REGUESTS
From our last stop, our server is listening and not giving any response so our browser making a reguest do not get any response from our server. This result in the error cannot GET.

The localhost:3000 is the port our server is listening on and locahost:3000/ is the root of our page. It is like the root folder. Our homepage. It is the same equivalent in going to www.google.com/  in your browser. If we send this link, it will be directed to google server and google server on receiving this request will send a response back to the browser. This is done by sending some file including html, css and javascript file for the browser to render or display to you.

For our own, our server is not sending back any response and we cna specifiy that in out server.js

In our code we can add just above the app.listen

app.get("/") // this specify what is to be done when a request happens on this route and we can trigger a callback function to do something.

app.get("/", function(request, response) {
console.log(request);// Here we console.log the request that was made.
}) // This specify what to be done when a request is received. But we will still have an error because no data is giving to the browser but on the console i.e our terminal.

We can tap into the response method to send back a response.
The code above will now become
app.get("/", function(request, response) {
response.send("Hello world");
}) //This will display Hello world on our browser. This means our server now handed a response to our browser to display on the route "/"

The locahost:3000/ we type into our browser is a command for our browser to go into that location and make a request. Once the request is made the server is triggered and send back a response which is the Hello World displayed.

We can also send html element or a whole html file as our response and we can have as many route as possible.
app.get("/", function(request, response) {
    response.send("<h1>Hello world</h1>");
});

NOTE: In the express world, the request and response is always shortened to req and res.

app.get("/", function(req, res) {
    response.send("<h1>Hello world</h1>");
});

To understand this codes more, we need an understanding of callback function which we have talked about before.

By adding more route we can create a multipage website.

### UNDERSTANDING AND WALKING WITH MULTIPLE ROUTES
Let say we want to add a new route say contact, we can just add this codes before the app.listen line of code.

app.get("/contact", function(req, res) {
res.send("Contact me at: idowuseyi22@gmail.com");
});

This is all about envisaging or thinking ahead what the user might type into the browser. So we can respond to as many possible route as much as possible.

For a challenge add a new route about and send some information about you. This should display your quick bio.

If the user goes to any of the route we have specified, then there is a response waiting.

NOTE:
It should be obvious that it is a bit painful to stop and start our server. A way to go about this is using nodemon. If you go to nodemon.io we can use the command npm install -g nodemon to install it. Then we run our server.js with nodemon. This will constantly automatically restart our server anytime we make any changes in out server file. The -g will make it available anywhere regardless of where we install it in our file system.

If we add a new route

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Food</li><li>Code</li><li>Helping people</li></ul>");
});

immediately we save our server file, nodemon will automatically restart our server to load the changes automatically.

### Creating the calculator app

Set up everything with the folder name calculator-app with calculator.js and npm init

Then install express in the folder
and require, create a new app and then have a route "/" that send "Hello World" and make the server listen at any port you choose. The most used is 3000 when people use when developing locally.

Watch out for errors which might be due to typo's and others
The error with specific line number and code position will be stated. This information can quickly be used to correct this error at any time.

### RESPONDING TO REQUESTS WITH HTML FILES

Before now we have explore how to work with html, express and node, we are going to put that together in creating our calculator app.

Create a new file inside the calculator-app directory.
In the body include a form with action = index.html ans method as post. Add an input with attributes type=text, name as nu1, placeholder as first number. Then add another input as num2 and placeholder as second number.

the name attributes is what we will be using to call the data inputed into this form.

Then add a button with type=submit, name as submit and labelled Calculate.

Once the form is created. We will need to send the entire index.html. To so this we will do it differently. If we check the documentation expressjs.com we will see the method and usage for doing this.
res.sendFile(path [, option][, fn]) // This transfer the file to the browser as a response.

Before now we have been working with relative file path like just specifying "index.js". This works differently once we are working with a server. We can do the above because we know specifically where our file is located but in the future we would be working with external servers where our app is deployed to. On this computers we cannot know where our files are located. But we can do something by using a method.
__dirname //This will show our current folder if console.logged.

Now we can just do

(__dirname + "/index.html") // This will find our present working directory and our file path completely.

If this __dirname is mysterious to you create a new file called path.js, in the file console.log(__dirname) and run it. Then you can move this path.js file into different folders and run it to see how it works. It gets the present working folder it can be located at any time. So we can use that location and add anyfile name to find the file full path regardless of where it is located.

### PROCESSING POST REQUESTS WITH BODY PARSER
Can you imagine what happen when we press the calculate button on our calculator page.

If run our calculator.js file with nodemon with our port listening on por 3000 and we loead it in the browser. Then lets open chrome developer tool and go to the network tab. We will test what happen when we click our calculate button.

A lot of networking request package is listed and at the top we get on with a status 404 and everything is in red. and in the browser we have the error cannot POST /index.html.

where does this comes from, if we look into our index.html, our form has a method and this method is post. It means we are sending the data somewhere and that is what is described by the action which is specified as index.html which is not what we want but instead our serverat the route "/". If we dont have an action specified it is fine and by default the form will send the data to the current page where its on which is an equivalent of "/". So let's put this there.

This time when we load our page we are still getting the error but this time with a lot of information on the haader section when we click on the error. This including some data from the num1 and num2 from the name attributes of the input on our form.

You might have come accross, this error some certain number of times and a lot of company pride themselves on how this page looks for their site.

SO what does this codes means.

HTTP return codes cheat sheet
1** Hold on
2** Here you go
3** Go away - redirected
4** You fucked up
5** I fucked up

You can go to wikipedia to see the full list of http return codes.

The two most often is 200 - success and 400 - which means you're requesting the file that does not exist.

The issue with our error is that ourserver does not have a way of processing any post request and its not allowing anybody to respond to any post request. Let's fix that.

app.post("/", function(req, res) {
res.send("Thanks for posting that request.")
})

Now if we go back to the broser and reload the page and input the parameters then click on calculate. Now on our locahost we have status code 200 which means success, everything is going great. The only problem is how do we get the input data we need. We can do this by installing an npm package called body parser.

The first thing is to
npm install body-parser

This will allow us to parse the information we are getting from the post request.  So we need to parse the long data we are getting from our post request to have access to our variables we need for our calculation.

Now we've install body-parser then require it in our project. Then we make our express to use it.

app.use(bodyParser)
Body parser has a few modes. we have

.text - parsed as text
.json - parsed as json()
.urlencoded - which will allow us to have access to data's and variables from the html elements file.

So to use data from html form we use body parser called bodyParser.urlencoded()
and in it we will add the option extended: true

bodyParser.urlencoded(extended: true)
This will help us to have access to nexted objects. This must be added as required by bodyParser to use it.

WHY DO WE NEED BODY PARSER
Body parser helps us to tap into req.body to access the body data of an html file. We can console.log this to see what it contains.

This will show a dictionary or an object with key and value containing the parameters inputted into the form with the submit button. Or it is basically the parsed form of the http request.
 So we are able to parse our form data, using the req.body and then use the req.body.parameter to get any parameter depending on th input name specified in the name attribute of the input in our html file. 

 so we can do, req.body.num1 to check the paramter. This means with body parser with ca tap into this form data as if they are the body parser property.

 Note: The name of this parameters num1 comes from the name attributes of the input in our html form.

Now that we have access to our input values, the next thing is to use them in our calculaion and log the result.

 app.post("/", function(req, res){

  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = num1 + num2;
  
  res.send("The result of this calculation is " + result);
});

Note with this our result get presented as a concatenated string because the values are parsed as string by body parser. What we can do is to convert them to number.

Note we can name our variable anything, it is a matter of changing the name attributes of our html input in the form.

The body is all we got after we parse the form and num1 and num2 are our input values.

One important thing to note here is that when a client inspect and try to see our codes, all they see is plain html file and all the calculation are done at the backend. The dynamic and logic parts are hidden in our server. Now we have a dynamic web application. Now we have a frontend and backend for our web app.

For a challenge, add a page and server codes for a BMI calculator.

This will have an html file and server file

The html file is named bmiCalculator
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
</head>
<body>
    <h1>BMI Calculator</h1>
    <form action="/bmicalculator" method="post">
        <input type="text" name="weight" placeholder="Input your Weight (kg)">
        <input type="text" name="height" placeholder="Input your Height (m)">
        <button type="submit" name="submit">Calculate BMI</button>
    </form>
    
</body>
</html>

The server code for this added to our former calculator.js in our server.

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = (weight/(height ** 2)).toFixed(2);
  
  res.send("Your BMI is " + bmi + "kg/m2");
});

You are all a search away from the solution also.

## TIP

One of the way you can solidify your knowledge is to have a way to explain it out. It is easy to follow along and get things done, but how do you make another person understand this exact same thing. One of the things you can do is come out with your own analogy of any concept that you learn. Once you undersand, come up with your own analogy and explain it out to someone. The funny thing is, your explanantion might be what is the most applicable to others too and will make that person picture things better because you imprint it in their mind.


## APPLICATION PROGRAMMING INTERFACES - (API)
In your small dev journey, it is almost impossible you wouldn't have come accross this term somewhere somehow. It crop up so often. So what are API and what can we do with it. In this lesson we would be interacting with some API, weather and email collector and we would be building with them.

Email collector API is very useful if you're building a landing page or a newsletter, preorder, etc. Before this we must understand what are API and what are they useful for.

If you go to yahoo.com, on this page you would notice a section that display the weather parameters of your rcurrent location.

If we want to create our own website and we want a module like this how do we go about this? Notice we wouldn't be able to set up a weather station, take measurement and then integrate this on our site. The problem is that we can't even set up a station in all location that exist.

So where do we get the weather anyway? We will use waether system interface like weather API. Weather API have collected all this pieces of weather data, do the forecast and all complex stuff, so all we have to do is to use their API to tap into that weather data just like yahoo do it. The same too when you go to tinda and you see their share friends and shared interest section. Where are this data coming from, its coming from facebook using the facebook API. They use those data to populate that section.

In over the internet we have tonnes of API that we can use for anything we want to do. In the UK we have police API, that provide data on crimes and other data and people have used it to build interesting stuff. One of this is murdermap. This paltform uses the police API to map out murder and classify based on different metrics especially for london supplied by the API. SOmeone can use this information to decide where to live and where to avoid.

There are API's that provide prices, and several other stuffs and you can use this data to built anything you want.

#### API DEFINED
According to general accepted definition, An API is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.

What does this mean
say you go to a restaurant they have menu but at the same time you can go into the kitchen where we have the ingredients and recipee and probably some surprised chefs. If you go in and start eating this raw ingredients, certainly the restaurant authority wont be happy about it. Though there are things they sell that they will allow you to buy but there are other things that are off limit. The same way for websites that take and have their own data be it facebook which has data on users or police API which has data on crimes. There are data they would allow you to access but there are others that they would never want you to see. It is none of your business. So how do these website tell you what data you can access and how you can access them. If we take the case of a restaurant they will do it in a menu may be cakes, cookies, cofee, etc. Then same way for sites. Like weather map, we can have temperature, weather condition, weather image, pressure etc. An API some people consider to be a contract between a data provider and a developer which says these are data the data provided provides, the one a developer can use and the ways, protocols and how to use those data and that the website that host this website would ot change any of this agreement without notifing you.

Our definition now makes sense, set of data programmers can use to create or interact with an external system.

We have seen the ones that allows you to interact with an external systems, But we haven't seen any that allow you create a software.

Yes we have. Remember jQuery. It is something that gives you access to object and mehtods that allows you create software easily other than writitng vanilla javascript. LLok at tindal, facebook API is used to interact with an external system when you're on tindal.

In this module we are going to focus on API that allows you to interact with an external system most importantly an external server. We are going to access some data from some website and we will do that through their API. We will read their documentation to see what we can do with them. We will make requests from our server to their server and get responses all through their API. Their documentatin will serve as a menu for what we can do with their data.

### API ENDPOINTS, PATHS ANS PARAMETERS

In the last lessons, we have learn about API all in the theory. In this episode we will be going practical. We will access and you API's from some website.

When you thing about API you need to be thinking about things like Endpoints, Paths, Parameters and Authentication. These are the four thing we will cover and we will see what each of this do.

#### ENDPOINTS
Every API that interacts with an external systems will surely have an endpoints.

Let's quickly look at kanyewest API at kanye.rest for random Kanye West quotes. This data is hosted on kanye west database and on of the endpoints is
GET https://api.kanye.rest
whenever you are using a different API they would probably have their own endpoints.and the details of this will be included in their documentation. Most of the time each use case or functionalities of an API will have an endpoint. If we copy the link above - endpoint and paste it in our browser our browser will make a request to the kanye.rest server and they will send back a response which is a quote by Kanye.

Let's say we create a website and everyday you come to the website, you get a Kanye quote. We can probably do that using this API. Mostly websites that have API has more data than just a random quote.

In addition to an endpoint, there is also API paths and parameters.

#### PATHS AND PARAMETERS
These are things that you can use to narrow down on a specific piece of data from an external server. To illustrate this we will use an API from a joke website. Through the use of paths and params we can narrow down on the kind of jokes we want.
There is a link to the jokeAPI. This joke API is more complex than the Kanye West one because it has more option for you as the programmer. You can select the kind of joke you want based on category, flags to blacklist, response format, joke type, string. The first thing we need to do to use it is the starting point which is the endpoint. If you scroll down, you will see a bunch of endpoints. You will see one that says GET joke. If we jsut copy the url and paste it in our browser you will see you get an error - no matcing joke found, no category selected. So what is going on here, though we have the endpoint but there is something missing which is the category. If we try it out at the top, you will see we have any and it is set to category any and if you select programming it changes the link to /programming. So the difference here is that we need to select a specific path after the endpoint. If the endpoint is the main tree, the path is the branch.
 So here we have seen a path specified here. The endpoint is the main API link and the category is the path e.g programming or dark or any or any other one.

 Remember when we are learning node, when we are creating a new path we need to plan for it so that when a request is made to our server we need to be able to catch and filter through to get the specific parameter we want and want to use.

 Sometimes we might want to get a piece of data that is specific say a programming joke that contains the word debugging but they wont probably have thought of this before hand so in order to allow the API to respond to things like this, we have parameters that can be attached to the end of the url after a question mark. It is sometimes a key value pair e.g /?contain=debuging. The key is the contain string and the querry is the debugging which is the value. It is waht is tried out. Other things are added to the link as we select some options in the category. The more we change the default selections, the more the parameters that are added to the link. Now notice if we have more than one querry, the first querry follows after the question mark, and the subsequent querries follows after the & symbol.

 When you want to specify a parameter remember that you need this symbols to use them, it comes after a question mark, then the key then followed by an equal to sign, followed by search string any other parameter or key value pair which is an additional query will come after an & sign.

 If we use this link in our browser, we will get a joke with the options we specified.

 Now with the addition of a parameter we are able to get something specific and a precise thing that we want.

 So we have seen an API in action, how to use an endpoint also how to use path and parameters.

 So take some time and play with this API adding some path and parameter in your browser making some request and getting responses. Ensure you know what is going on when you type out those long url's in the browser.

 In the next lesson we will talk about authentication and what will have in our responses. 

 ### API AUTHENTICATION AND POSTMAN
 In the last lesson we see how we can interact with an API using the jokeAPI. We see how we can work with endpoint, paths and parameters to narrow down on the data that we want and we make this request using a formated url to get some pieces of data. The two websites we have interact with only has just small pieces of data.

 We can access some API that is more monetizable. This is because this website have data that can serve millions of users and they might want people to pay to use it or limit the threshold of access to their data. In other to do this, they use authentication. So everytime you make a request to the website as a developer they have to track how often you use their website to get data and charge you or limit your access.
 
 To properly see this concept of authentication we will use the OpenWeather API. If we look into their API pricing, they say it is ok to use their API as long as you dont make more than 60 request per minute. So every single time we use an API link to make a request, that is a single request and for OpenWeatehr API if you make more than 60 requests per minute then it will be limited until paid for. But for most developer to get started building this is more thatn enough but as you get more revenue through users and your requests increases then you have to start paying for the data also. But the way we will use authentication in any of the available category is quite the same. So lets work with an API wit an authentication like the openweathermap.org API.

 The first thing is to signup if you have not. Then sign in to your account, then navigate to the API section then create a new API key if you have not. Once the key is created then copy it and you will be using it whenever you make a request to the API.

 In the documentation, there are several ways you can get data from the website. Either by city ID, geographic or log and lat and others.

 If we click on the example API call. You will see that you have the endpoint, and some parameters which we can see after the questio nmark. In the first parameter, we a key q with the value = London,uk then another one called appid = our API key we got when we signed up. So this is the structure of the sample of the API call with an temporary key.

 Now in order to make an actual API call, we need to look at the endpoints and our personal appid. If we use this to make a request we will get a response which contains the data that are sent back to us.This is the actual data for the current weather in London. and if we cross checked we will that it is the current weather data of London. If we change the location to like Paris, we will get responses with the current data. One thing to note is the unit of there measurement. To get data in celcius and others units, we need to include another parameter as specified so we can get the data we wanted in a way we wanted.

 Since we know the first parameter get added after the ? and subsequent parameters will be added after the & sign so to add another parameter, we will just add an & the parameter name or key and = the value which is the unit/metric. Now we have our temperature in celcius. Remember that the order of this parameter do not matter, we can have the parameters in any order as long as they are started with a ? and separated by an & 

 Notice how it starts to get our API using the browser as we have more parameters and editing the url. SO very often we use a tool call postman to do this. Go to postman.com/download to download it.

Once insalled, open it, on the interface, click on the small + button at the top to make a new reguest. Copy the api endpoint and paste in the GET space, add your parameters. as you add them it update your url. Once you send it you will get a result which is the response. You could see that the resulting data is structured other than what we have on our browser. What happened here is that the data we get back is in a json format.

So what is a JSON or what is JSON

### JSON Javascript Sobject Notation

A JSON format stands for javascript Object Notation. The data we get back from the postman looks like how we will create a javascript object. When we open up a set of braces, we have our key and values and we can inject an object inside another object. Though it has a little difference from the one we have created before. The Javascript object we have created before has var, not string and the key value pair are not all string.

The reson why we use a JSON format to pass around data on the internet is that not just that it can be readable by human but it can be easily collapse down to take a little space as possible. So if your javascript object is a wooden wardrope, when transporting it you can flatenned it up into a single line object as long as you maintained all the curly braces and at the later stage when we've received the file as json we can expand it to its original object.

JSON id not the only format we can receive data from an API. Very frequently API's provides various format you can receive data from them. As we have JSON, we also have XML - extensible markup language, and HTML - Hypertext markup language. JSON is most favoured format because it is light weight and is very easy to turn back into a javascript object.

If we want to turn our raw data into a pretty JSON format in our browser we can just install a chrome extension called JSON VIewer Awesome. It is free and add to chrome as extension. Once used if we refresh our last result on the browser we will have a well formated tree structure output or a chart or the riginal JSON output. Also the JSON viewer allows us to copy a specific value and some other function we want to get. We can collapse and open it up also. From here we can see at what level a data is existing in the object. We can then use this to get hold of any specific value in the browser.

### PUTTING OUR APIs INTO PRACTICE

Now that we have seen how to get data with API, we will then need to put into use on our site.

This is how it will look:
The client browser will make a request to our server which is a get request to our server, our server should return a response with some data, Now in other for our server to be able to give this response that involves another persons data, it will make a GET request to the other server via their API to get the data. We will then send back our response with those data we get from the other server to the client. All this is an high level overview.

We want to display to the user the temperature of their location and a wether symbol for the weather condition there.

Now create a new project in the terminal.

All set up and the server running. But how do we make a request to an external server in node. Remember we are just a google away. On stack overflow we will see a response to use npm request package and all we'll do is just to require it. But as of 2020 this module has been deprecated. So we need more search in one of the top responses, we have a blog that explains 5 ways to make a request on node. The first here is the http standard library in Node. There are other 4 with the how to but it is best to use the native https node module.

Let's search for it in our documentation. We founf it somewhere down with the how to's. Now all we need to do is to call it, then call the get method and then use the data anyway we want.

Note: we dont need to install it because it is native node module.

Let's get it running in our code.

All we need is to set it pu, then test our api link in postman ensure its working and then copy it into our get method. Dont forget to add the https:// at the begining.
Due to the lenght, we can just use a constant to hold this link. The we pass that variable url into the get method. In the next lesson we will see how to use the values from our api data.

### HOW TO PARSE JSON

In the last lesson we saw how to use the native https node library and its GET method to get data from API using a url and we logged the result.

Note: we can log just the status code.

You can always check the status code on the documentation. and learn more about them. 200 is success.

Most times the error that is often obtained is 404 that is the server cannot find requested resource.

This can easily be possible if we make an error with the paths like a typo instead of weather we put weatheer. We will see 404 meaning the server is saying it doesn't have the resource requested.

Another common error is one with the authentication say an error or type in the app ID, with this we have a 401 error which means unathourized.



## TIP

Remember the time that you have to complete a code challenge or code a solution and it feels like you didn't learn anything.

You feels like this because the actual learning comes from practice. When you learn something try to use it to do something rather thatn just learning passively.

The Dunning-Kruge Effect:
where when you first learn something you feels like you know so much but as you gain more knowledge you realise there is a lot more you dont know and you fell into the pit of dispair which is also called imposter syndrome. Even though you have spent a tonne of hours learning something you still feels like an imposter, that people will still find out that you dont know anything. The most important fact is you are always in between this two conditions or switching between the two at different intervals. The most important thing is you are going to get there if you can just keep going. So keep going.


## GIT, GITHUB AND VERSION CONTROL
Git and GitHub
Here we will learn about how git and github works.
CLonning, fork, pull, push, make pull request, etc.

### VERSION CONTROL in its simplest form
Say you create a file with code and put it on a version control and gave it a version 1. Then you add more code and save it as version 2, Then let's say you now mess up the code and you feel like burning the whole code. This is always possible but what if you can just role back to the last save point. We can do that using git. You can either compare the present with the previous version or just role back to any of the previous version you want. You can go back to any version or save point as long as you know the version you want.

### VERSION CONTROL USING GIT (commandline)
The first thing is open your terminal, and navigate to the desktop.
cd into your desktop, create a new directory call story, then cd into it.
Now create some textfile, touch chapter1.txt Then open it and make some sensible input inside it.

Then on the command line and inside the story folder initiate a git repository using the command
git init

run the command ls -a to see the new files and folder added to the story folder.

### Explaining the git terminologies
In our order to start tracking our file we need to add our file to where it can be tracked the staging area. This is where you can select the files you want to commit. To see files inside your staging area, use the command git status. It will show you unstracked files in red. To add it to the staging area and to start tracking it, we need to use the command git add filename i.e git add chapter1.txt

If you run git status again it will show you this file in green. Now its in the staging area and we can now commit it.
Use the command
git commit -m "commit message" 
The commit message is very iportant, it is to tell us what changes were made between the last version and the present. For our first commit we can use something very simple like "initial commit" or just say "complete chapter one"
It is always good to put our commit message in the present tense.

We can use the git log to see the details of the commit. It shows the author, date/time and an hash which is a unique identity of the commit. It will also show the commit message.

Let's create two more chapters. Chapter2.txt and chapter3.txt
Then add some content within them.

If you use git status you will see that this files are still in red meaning that they are untracked. They are just only present in our working directory and not yet in the staging area.

Let's add the two files
Now adding them one by one, it we have a large number of files can be tedious. This is why we can use a signle command to add all the file in the pwd
git add .
If you use git status then you will see that these two files are now in the staging area.
So go ahead and commit the two file. We can check out our commits by using git log
we will see that we now have two commits with different hash keys, time and different commit message.

Head here means this is where we are currently at presently.

So in a nutshell 
we have our files in the present working directory, then using git add we move the file(s) to a staging area then we can then push them to our local repository. We might wonder why all this steps or process. Why not just push our files to the repository. It is because there can be times we dont want to push all our files to the repository. The staging area is where we check if everything is okay and intact before using git commit to push it to the local repository. This means if we messed up anything we can still use git checkout to move back or revert back to the last version or position in our local repository.

Let's say we have been working on our files and say we messed up with chapter 3. Now since we have version control we can use to go back to a good point in our file.
If we run git status, we will see we have a file which has not been commited or added to the staging area. Before we do that we can use a git command to check the difference between our last save point in our chapter3 file and the present.
git diff filename i.e git diff chapter3.txt
We can see the part that has been deleted  and the ones added. Seeinf the difference you might just want to copy some things over or probably you dont ever want the present file again. So you will need to go back to the previous file.
You can do this by using the command git checkout filename
git checkout chapter3.txt
Immediately we hit enter our file will be returned back to the last state when we last commit it.
So we have talked about using git locally. In the next lesson we will talk about Github and creating remote repository.

### GITHUB AND REMOTE REPOSITORY
We have seen how to use git on our own system for version control but here we will talk about how to handle version control using a server i.e somebody else's system. For this we will be using Github.

Create an account on github.com if you have not done so and sign in.
Then we will create a new repository in this browser based github. Click on create new repository. We can give it a name of the local repository we created earlier i.e story the add a description.

By default, every git repository is public meaning that people can see whatever you commit to that repository. You can make it private but this requires a subscription. If you are doing something which is a secret or what you dont want people to see then this is needed. But setting it as public allows people to see your codes and also allow you to see other people's code. This is the benefit of open source. You can help contribute to open source.

We will leave the README.md to set it up later. Then click on create repository. It will show how we can setup this remote repository. Depending on the device you are using, we have two option, set up on desktop or use HTTPS/SSH.

For us since we have an existing locl repository we can just use the push method pushing our code from the command line.

We will go into our working directory, i.e story
Then we can check the status of our commit with git status.

The command we will use is 
git remote add origin https://github.com/idowuseyi/story.git

git remote add origin https://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@github.com/idowuseyi/todolist-app-v1.git

git branch -M main
git push -u origin main

git remote is to tell your local git that you want to add remote server, origin - is just what you want to name it and by convention origin is used, it can also be anything. But it's good to keep with the industry standard, then after that we paste our link of our remote origin on github. Now we have add our remote origin, then we can now push to the remote origin
with
git remote add origin https://github.com/idowuseyi/story.git 
git push -u origin master

We use master because that's what our HEAD is set to.
The last line of code push your code to the remote origin master branch. The origin is what our remote branch is named.The master branch is the default branch or the main branch of all our commit.
Once we run the line of code above, some works are done in the background and our code is pushed to the remote origin. It will upload our code on our local repository to the remote github servers. If we refresh our browser still on the github tab, we will see that all our files are now hosted on github and its complete with all commits. If you click on isights, graphs and you select network, you can see our master branch which only has two save point or commit and you can move them around to see the commits. Now as we work we can see the progress of our file in our repository. Now we can see all the codes or our documents. Many people write a lot with github because it is good at saving and tracking our files or changes made in our files and we can see the details of each savepoint in case we want to move back in time.

A guick run over, Working directory -> Staging area -> Local Repository -> Remote repository. Using version control we can track the changes in our files in time. For us the local repository is our git handled by executions from the .git folder while our remote repository is handled by GitHub. We have different commits on our local repository and when we git push all of those commit, changes and code pieces are move to the remote repository on GitHub.

2019/01/07 github announces unlimited access to free users for private repositories.


### GITIGNORE
Here we talk about setting rules to keep sensitive files from bein pushed.
During development, it is possible to use sensitive files, documents, codes, local settings, passwords or APIkeys. Many people have mistakenly pushed this to public repositories and have suffered doing that in many ways. So how do you not fall into this same issure or how do you avoid this? 

One of this files is .DS_store files which holds the settings on how you want your files arranged in your project folder. This file is a hidden file but as a command line user, with ls -a it is not hidden in any way. This file wont be of any use, so we can just add it to the .gitignore file.

To use gitignore. We can create and new file and name it .gitignore
Remember this file naming is case sensitive, the git environment will be looking for the specific file with this name. Now that the file is empty if we create some files in the same folder, initiate a new git repository and run git add .
All our files will be moved to the staging area ready to be commited but we dont want all the files to be commited. We can undo any git add . by using the command git rm --cached -r filenames or we can just use . in place of the filename to represent all the files in the current directory. The -r option means recursive. Now we need to use our gitignore files, the go into our gitignore file and add the files we want to ignore.

In our gitignore we can have the following, each on a new line
.DS_Store
secret.txt

or any other files we want to ignore.
Using gitignore has some rules to follow, 
We can use # sign to comment.
We can used wildcard say *.txt - this means to include all the files ending with .txt in our current directory.

Now if we run git add ., all our files are added except those we include in our git ignore file. You can check using git status to see the files that are added. Then we can commit our files using git commit -m 'initial commit'. So only the files we allowed are commited and this are files that will be pushed to our remote repository if we push it.
Let's say you are creating a new project and you create the gitignore file, if you go to github.com/github/gitignore you will see a collection of all gitignore template for different project types. You can check for the one that relate to your project, copy and paste in your gitignore file. You can test this out by adding, commiting and pushing your files to the remote repository. With this your API keys and all secret files or unneccesary files are now kept saved and only in your computer and are not pushed to GitHub.

### CLONING a remote repository to pull it into your machine
git clone
This process is called cloning. It is a way for you to pull down and pull all commits or files in a particular remote repo into your local working directory.

If you go to github and you search for open source project, you will see diffrent contributors who have contributed to the project with their different commits. This means they would have had a way to look at the codes and add, remote or made adjustement on their local machine and then push it back to the remote repository. This is achieved with cloning. Let's say we found a project we would like to clone and contribute to. On the repo page and by the right you will see a green button that says clone or download. Git cloning is better than downloading the ZIP version of any project. Now if we copy the url giving for that repository, we can go back to our terminal on our computer and clone it. We will use the command git clone then paste the url then press enter.
Once done, you can see that project folder in your pwd. If you open if you cna see all the project files. You might want to change some few things and run this project locally. Once you cloned a repo, you can use git log to check out some of their previous commit to see what this commit is about. We will be talking about forking, and other advanced stuffs next.

### BRANCHING AND MERGING
Let's say we have been commiting our file but we want to try something different, a new build, feature or mess around with the present build. Now instead of commiting to the master branch and suffer the headache of reverting back if thing get messed up truly, we can create a side branch as much as we like. This new branch continues fron where our last branch stopped and continues on its own almost parallel to the master/main branch. We can commit to this new brach while we also continue working on our main branch. This two branch can be worked on simultaneously at a time. Let's say our experiment turned out to be great and fruitful, we might want to merge it to our main branch, we can simply do this by placing a merge request and we can bring all the changes made back to our main project or branch. If we have no conflict or resolve all the conflict we have successfully add this new feature to our main branch. Then we can continue working on the main branch or have more branch as the need be. In a big project there are always many branches going side by side, the reson for this is because bug fixing and new features are going on side by side. This is because if all were to be done on single branch there would be multiple bugs or issues with the project.
Let's see how this work in reality. Let's go back to our story directory. To create a new branch on our terminal, we can just say git branch branch-name
git branch code-war

You can use git branch to see the existing branch and the branch you are on presently. Here you will see we are still on the master branch. We can easily use git checkout code-war to switch to the code-war branc we created. We can then make some changes to our files using this branch. After this changes, let's add and commit the files.
If we run git log we will see the new commint we have made. We now have one commit on our code-war branch. Let's go back to our master branch. Anytime you dont know or not sure of the branch you are on, it is always good to check with git branch. The * always point out where you are. So let's run git checkout master to switch back to the master branch.

Now back to the master branch you will see that our master branch is not changed it is still exactly the way we left it. Let's create a new file say chapter 4 and add something in the file. Let's add and commit it.
Using git log, we can see the commit particular to the present branch i.e the master branch.
Now something quick to note here; using git log we can see the different commit on this master branch including the one we just made now. But you'll notice the recent one has (HEAD -> master) while the previous one or there is another that has (origin/master) in front of it and in red. What does this mean, the one in red that says (origin/master) is the last commit we pushed to our remote repositry. That is the last version we have pushed to our remote repository while the other one that says (HEAD -> master) is the last commit in our local repository.

If we switch between the two branches our files also change. Let's switch back to the other branch code-war
Let's say we are happy with our experimentation or the new features we have brought up in our code-war branch and we will like to merge the branches with the master branch. To do this we will need to switch back to the master branch and while here we will erge the changes in the code-war branch. We will use the command git merge branch-name to be merged with the master. This will open a text editor which will allow you to add a merge message if you wish. You can leave it empty. if the editor is vim you can use :q! to exit. You will notice that the changes in of the code-war branch has been absorbed into the master branch. Our changes in the code-war branch is now present in our master branch. If we run git status, the code-war branch still exist by the way. Also if we run git log we can see the previous commit on the master branch, but most importantly the merging which is now our most recent commit. We should now push to the remote branch git push origin master -u. If we go online and check our remote repository, you will see that we now have the sum of the commits in both branch If you go to insights, graph, network you will see the process we have gone through. The whole thing is presented in a graph.
You can do all this inside git itself.
Create a new repository, say story2 and initialize it with a README. A readme is a text file that contains all information about what your repository is all about. This file can be formated heavily to make it really presentable. It is always found as the first thing below the files list in any repo. It can also contain information about how to use your file or code or project or any other useful information for people cecking out your project. Now back to the readme file, you can make some edits if you wish, just click on the readme file and click on the small pencil icon.

Now click on the repo name, click on create a new file, let's name it chapter1.txt Just put any text in it, make a commit and commit it. Create a new branch call experiment branch. This create a new branch copying over everything you have in the master branch. Now in this experimental branch, make some changes in the chapter1 file and then commit it. Note always check where you are commiting to in other to know exactly where you are commiting to. Go back to the master, you will notice a yellow coloured message or notification. It says you can compare the changes and pull them to the master branch. It's basically saying you have got changes and would you like to pull them to the main/master branch. In our master branch create a new file called chapter2.txt put in any reasonable paragraph. commit and save. Go to insight, graphs and network to see what the projects look like. Let's merge the changes in our gold-story to our master branch. Always ensure you are in the branch that you want to do the pulling, then click on new pull reguest. This will open a page to compare. It may load the branches involved but if you have more branch you need to select your main/master branch then the branch you want to compare it to. If you scroll down on this page, you will see details on the changes between the two branch, how the gold-story is different from our main branch. If its an addition, it will show a + sign and what is added in green and if its deletion, a - sign and what is deleted or removed. If you are ok with the changes then clikc on create pull request, merge, confirm merge and everything will be merged. You can add some information in the space provided. If all goes well, you will see merged and a successful message. (It might look easier on the terminal but this is not so complex too). If you go back to look at our graph, you will see that the gold-story has been merged. You can go back and practice more both using the terminal using git and github on the browser.

### FORKING AND PULL REGUESTS

In the last lesson we look at how to branch anc merge because this is how we contribute to other projects and work in teams. We've seen and familiarize with the working directory, staging area, local repository and remote repository.

We will be taking a step further. Say we now only have local repo and the remote repository. Say i own a local repo and I've pushed it to the remote repository. Now say I have a twin brother that wants to work on the code also, he might want to have the code in his own remote repository. This process is called forking. It is different from cloning. It is copying over the codebase or the entire repository to the his own remote repository. So that process of copying over a remote repository to one's personal remote repository on github is called forking. This person now own it and is now able to do anything with it. Say you own a project, it will be hard to grant everyone read and write access orpermission to make changes in the project except for the specific people in your team. This is why it would be good for anyone to fork a repo by this they now own it and can do anything they like with it. If the person wants to push their satisfactory changes to you, then they can make a pull request. Once a repos is forked, the person that forked it now have the repo on their personal account, they can then clone it and make changes with full permissions. They can commit and push those changes. Now if they want the owner to incorporate those changes, then they can make a pull request. This is like a suggestion saying I've been working on some changes, you can look at it and accept it into the main project.

The reason why it is call a pull request and not a push request is because the owner of the repo, is the one with the full write access to accept the changes into the repo. He/she can pull the changes over. If the after the review the changes pass and are okay to be on the main repo, then the owner of the repo will accept the pull request and can then merge, the repo with the main repo.

Let's go practical.

Let's go back to the story repository. This is the original repository with commit and all othe activity. We will need to log out and log in with another account to go on here. So let's say we log in to another account. On this new accoint, let's search for the story repo once it is found, we can go ahead and fork it. SO it will make a copy of the that github repo and put it in your github account. say before the repo link is idowu/story once forked it will be newaccountname/story. It put the repositroy on your account name, including all the files and previous commits that was made.

On github in the browser there, we can make changes to the files. Some improvement were suggested, committed to the master branch. We can view what it looks like on the graph. Now it has the previous graphs and now with a new one, with commit made by this new account. Let's say we open an icongnito window and logged in to the main account, the new changes would not reflect on the graph on this main account. But will be shown as a graph going up by another member who have forked your repository. This is a great way to collaborate. What you can do is say we go back to the other account we use to fork the repo, what we can do is to make a pull request by clicking on new pull request. It will present the changes and others, then clikc on create pull request, then tell the original author what you hav found and why your changes are worthy to be merge to the original repository. Once done click on create a pull request.

In the original repository those changes whill not show up, this is because the other account does not have write access to the original repository. The access it has is the same with the general public and not the one of the trussted inner circle so any changes can only be a suggestion. If we go back to the origninal account and click on pull requests, we will see a new pull request. It will show the details and if you click on it, you can see the changes his commit message and review the changes, You can give a review to the account that make the pull request and approve the changes. Once that is done, you can then click on merge pull request and then give a commit message and then confirm the merge. If we then look at the graphs now we can now see that the last commit was the one during the merge and it came from a forked branch including the user details which is then merged.

Some people use github for version control for there projects but it also a way to learn to contribute to open source project and learn how to walk in a team which is a really an essential skill while working in a startup.
If we open any useful open source and click on the contributions, you will see that there are many other users who have contributed to project. They have look up the code, done things and contribute to make it better. If you check the pull request section, you will many pull request that have been made and many that have been closed. Some can just be an edit of the readme and others can be actual coding or refactoring or improvement or a new feature entirely.

So you can go in on github and find cool projects, especially those that you have been using and take a look and see what other things you can change in it, you can build ontop of it, make an improvement and most importantly if you improving someone's work for your use, it is good to fork, improve, fix bugs, create new feature and make a pull request.

## TIP

SPACED REPETITION IDEA
This is all about human learn. Such that if you learn something only once, you will surely forget but if you learn something and you come back to it in a week or month to review it, you own it.
Let's say you learn about if else statement, if you dont use it at all you will never be able to use it when you need it. It is important that when you learn something, repeat it as much as possible. Many great teacher will do this in their lessons but you can also do this yourself. If you feel that there is too much repetition by an instructor, you can make them speed up say increase the play speed or something. On the other way round you can set intervals personally to your own taste to come back to concepts you have learnt over time and let your memoery grab it and turn it to a skill.
Remember when you cram for exams. You write the exam and pass but you forget completely. It's all gone. So reiew the topics you have learnt, review it and use it. Build something no matter how small with it. The most important thing is you doing the work and writing the program yourself.


## PARTIALS Making A ToDoList


res.send is the last command that should be used to send data to the browser.
res.write is like writing in a messanger. You write line by line and send. But res.send is like writing an email. You write all and then send.

In other to not keep writing a bulk of res.write we can just send an html file instead.
Let's say we want different html content for each day, do we create different html and send different ones for each day to present our output. No

This is why we are programmers. As a programmer the more skilled we get the more we hate repetition. Our skill is inversely proportional to our tolerance for repetition. So how do we do this easily. This is why we use templating. We will use a template to serve different part of the html.

### CREATING YOUR FIRST EJS TEMPLATES
We already know the reason why we need a template i.e when we want to serve pages with the same content.

So say the for the weekend we send a weekend file and for the weekday we can just send the workday file. This will work if we only have two if's but what about the if it is each day of the week or we are serving a blog page? Are we going to keep sending different file for each page?

This is what we'll be handling here. This is why we need EJS

EJS Embedded Javascript Templating
As usual the best place to start when using  a new technology is there webpage.
Go to ejs.co

You will see the documentation on how to use.
If you scroll down you will see using ejs with express.
There is also a github page that explains how to use it with express.
github.com/mde/ejs/wiki/Using-EJS-with-Express

There are many tool that can help us do this but ejs is easier.

We need to install it. We just need to tell our app to use ejs engine and this should be just below our app.express.

With ejs the res uses a new method called res.render. The view engine we set up there uses the res.render
We also need to have set our views folder. This where the template engine looks for the file it uses to render. We can name the file list.ejs
Inside this file we are only writing html. Anything valid for html is valid in the list.ejs file.

Let's say the below is what we have in our ejs file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
</head>
<body>
    <h1>It's a weekend</h1>
</body>
</html>

The idea is to change what we have in the h1 to say present day we are. So today is wednesday, it should say It is wednesday and if I load it tomorrow it should say It is Thursday.
In our app.js file we need to take the result of our logic and place it in the h1 to give us the current say. In the documentation, we can see they are passing over a variable. This is done by using a marker and this is achieved with <%= varName %> -- This is a marker that tells the ejs to replace whatever is in the marker with the value of the specified variable.

We can create a variable day that holds the weekend or the weekday and send it over to the ejs.
We can name the variable in the marker anything we want. Then in our app.js we are to use res.render
res.render("list", {key}) // when we write this, express we look into the folder called view and find the file called list with the extension ejs. If the folder is not present then the code will not work. The we will pass in a javascript object having a key value pair res.render("list") // when we write this, express we look into the folder called view and find the file called list with the extension ejs. If the folder is not present then the code will not work. The we will pass in a javascript object having a key value pair.
The key here must match with what we have in our ejs file (It is good to just copy it over). This is saying render a file called list and with key kindOfDay and value of our current variable which is day.
We just need to put our res.render in the if and the else block but wait, it might just be better we let our if logic run completely first then we use the res.render after it. This will make the value of our day to have been set before it is rendered on the page. This means we can do all our logic before passing the result to be render on the page.
Sometimes in using ejs many people use the same key and value for the parameter inside the marker in the ejs and the variable name in the server logic.

It's good to start a different name to know what is going on.
Challenge, try and return the name of the current day. We can use an if statement or switch case but when the condition is more than five you should use switch instead of if. 

### RUNNING CODE INSIDE THE EJS TEMPLATE
If already seen how to variable in our html using the ejs marker. Here we will consider how to run code in our ejs template.

Let's say we want a different output of h1 when it is weekday or weekend. Say we want to check what the day is and then apply different colour to our h1

If we are to do this in plain js

if (kindOfDay === 'Saturday' || kindOfDay === 'Sunday') {
  <h1 style="color: purple"><%= kindOfDay %> ToDo List</h1>
} else {
  <h1 style="color: Blue"><%= kindOfDay %> ToDo List</h1>
}
The above might not be totally possible in the ejs file. What we can do is this, if we check the documentation, there is a tag that allow us to use a control flow in the template. According to the ejs documentation the tag to use is the scriplet tag. Because our javascript code is not html therefore we have to use a tag that correspond to it and this is the scriplet tag. <% %> This scriplet tag work on a line by line basis. Using it makes our code to become

<% if (kindOfDay === 'Saturday' || kindOfDay === 'Sunday') { %>
  <h1 style="color: purple"><%= kindOfDay %> ToDo List</h1>
<% } else { %>
  <h1 style="color: Blue"><%= kindOfDay %> ToDo List</h1>
<% } %>

So the scriplet tag allow us to run some javascript code depending on value from our logic variable on the server that we passed in.
In most cases, it is good to keep our logic inside the server and only have some code in our template to make variable changes.

ejs is still a content file, so we only use it for content.

### PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
We have seen how to use variable from our server logic in our template and also use js to change what is been rendered using the ejs scriplet tag.

Here we will be refactoring our logic. Instead of using switch or any other long logic we can just use the javascript inbuilt time object.

Having done the above, we can go ahead to add some list to our to do.
For a challenge create a form in the ejs file to take an input to be added to our to do list.

Once this is done. The next is to add the code to handle the post request once the add button is clicked. Once done.
We have been able to take data from the user, Now the next challenge is to find a way to send back the data to our page. We can do that in our ejs template.

We might think that we can pass it using res.send or res.render in our post request. If we do that, we will have an error. It will say what we are passing is not defined. This is because in our home route, when the server get into our get block of code, doesn't see us rendering this new data so it doesn't have a value to use in the ejs file.
So what we will do is add this item we want to render to the list in our get and then in our post we will use res.redirect("/") . What this will do that when the post request is triggered, the new value is from our form is saved in the variable name and then redirect to the home route and then trigger the home route in our app.get thereby rendering all the items in our res.render
Still we have an error, which says our added item is not defined. This is because the variable was created later on in the code in the post route. We are trying to use it before it exist. This error is related to something called scope in programming. What we can do is setting our variable at the top of our program. We can create it and set it to an empty string. var newTodo = "";

With the above we are able to add the input to the list but there is a problem, the new added replaces the one previous one, How do we resolve that. This is because our item only allow us to store only one pieces of data.
To resolve this, we need to store our items in a collection. We can use an array. Then anytime a new item is added we push it to the array.

We now have a new problem anytime we add a new item it only render it next to the previous one using a comma. But what we want is a new li for each of the item. We can do this by replacing the li with a for loop with the help of the ejs.

We can improve our code by puting all our items in the array and let the loop write them out.

In summary, when our server is started, it goes into our app.get route, we render two object and then follow the process step by step.

Here we are able to populate our website with dynamic contents.

### SCOPE IN PROGRAMMING
This is an important concept in all programming language but used differently in dfferent languages.

Let say we create a function called a
function  {
  var x = 2;
  console.log(x);
}
if we run the above, there wont be any problem. Having the variable inside the function is like having an orange tree in your fenced compound. You can go ahead to pick the orange. This is how it is if you have the orange in your compound. Let's say 

function  {
  var x = 2;
  console.log(x);
}
console.log(x); // this will not work

If we run the above, it will not work. This is like your neighbour trying to pick and orange from outside in your tall fenced compound. There is a wall that blocks him from picking the orange in your garden. This is where scope comes in.
If we declare a variable withing a function, the variable is local to that function say function a, the variable is only accessible withing that function a and not outside it. You can do anything you want with it only withing the function and not ouside.

function  {
  var x = 2;
  console.log(x);
}

function b {
  console.log(x);
}

Say you have two function a and b, you create a variable inside function a and you try to use it inside function b, it will not work either. It is like your neighbour standing within his backyard and trying to pick oranges within your compound. 

This variables that are only accessible withing a specific scope are called local variable. They areonly accessible within a local i.e the block of code where they are declared.

Let's see another scenerio

var x = 2;

function a {
  console.log(x);
}

console.log(x);

Here we have a variable x, declared outside the function. This is like an orange tree planted outside and not in any compound. In this case not only will the variable be available in the function but it will also be available outside the function. or anywhere in the program. For this orange tree, not only people in the house can pick from it but everyone in that community. This is waht is called a global variable.

There is a guick peculiarity about javascript variable when it comes to scope.

if (true) {
  var x = 2;
  console.log(x);
}

console.log(x);

Here unlike function the wall here is like a soft wall, people can still penetrate. This is how a variable in many place other than a function is in javascript. SO the var x can be accessed.

OTHER TYPE OF VARIABLE IN JAVASCRIPT.
We have seen and use different types of variable in Javascript. Let's look at them

function {
  var x = 2;
  let y = 3;
  const z = 4;
}

The one that is very different is the variable declare with const. This variable can be used aywhere but can never be changed anywhere in the program.
The var and let can vary in value and depend on where it is being declared. If where any of the three is declared is inside a function then it can only be available within teh function. They have local scope. But if they were created outside i.e directly in the program then they are global and can be use anywhere. If it is inside and if or else or for or while or anything that hava a pair of curly braces then if it is var, it is globally available, For let and const they are local variable they are only usable withing the block. It  very important to avoid using the word var anywhere within our program and instead stick with const for constants and let for variables.

### ADDING PRE-MADE CSS STYLESHEETS TO YOUR WEBSITE
We are able to make our app functional like adding a todo on the go. Now we now want to add a pre-made css. Once we add this css, and reloading the server, you will see that nothing happens unlike before that it will be loaded instantly in our html file. Even in our console we will see an error that says refused to apply style from styles.css. The reason is because our style.css lives in a folder which lives in a folder in our root. Express does not primarily serve up the folders in your root folder. In fact, it only serves up the main access point which we define in our access point which is the app.js. and the views folder and ignore everything else. So we can no longer go into the folder css because we are no longer operating a static site. Even though the file exist at the specify path in the href link we cant just use it in a server based website. Formerly when we are working on a static website you can just copy the file path and put it in the browser and it will show you all the files that are there. When we are there we can go into the file and manipulate the file or the path to give us any of the files. Unfortunately, we can't just attach localhost:3000/ to the beginning of the file path and hope to find the file at the location.
In order to serve our css, we have to explicitly tell express to serve up the specific files and we need to tell it the location of our files and tell it to use it. In the future we might want serve other files that are not css. For example some javascript which we want to run on the browser, images, sound or other assets or other things. Normally developers will create a new folder called public and inside this folder, you can have your css, js, images folder and tell express to serve up this public folder as a static resource. 
To do this, we can go just below where we have our bodyParser and tell express to use the public folder
app.use(express.static("public"));
Once we save our changes and reload our browser, we will see that our css has been applied. (If you don't see any changes try and check if you have done the needful and use correct path in your linking)

Although we have added the css, not all the styling has been applied this is because the various classes involved has not been used. So we have to change our ejs file to use the divs and selectors in the css.

In using a pre-made css many things might look new, the best option is to check them up in the documentation at w3schools.com or mdn sites. We might not have ogne through or use all this selector before because it will take a lot more of time doing that. And that's also because that is not the way developers work, your learn, understand and when you have any problem in using or working out a feature you ask in the diverse developer channels available like stackoverflow. ChatGPT and other AI is also available this days.

### UNDERSTANDING TEMPLATING VS LAYOUTS
So far we have been using ejs to create template that let's us create lot's of pages that are similar to each other. Like a list with different titles. Like in our todo app, anyday we load the page we have a new title at the top of the page. Say we add route to our link and we want our title or heading to also be like that we can do that with ejs.

In our server ejs file we can just pass in listTitle and also change it in our server too.

Let's add another route say work route so that we can provide work to do list.
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: wor});
});

In our post route we will have the below
app.post("/work", function(req, res){
  let items = req.body.newItem;

  items.push(item);
  console.log(req.body);

  app.redirect("/");
});

Having done this, we have localhost:3000/work route accessible. But there is a little bit problem, if we try to add an item, the previous items in the list of the / route is added and the new item appended.

We can change that by getting some information back from our post request. of the / route. 

If we console.log where our new item is being pushed to, and what it contains we will see that there is a key button and this is coming from our ejs file submit button in our form. What we can do is assign a value to it and then change it dynamically

Then in our server we can set a condition that checks where the request is coming from cchecking it dynamic value we have set. Once we confirm we can then direct the where the new added item is pushed to and then redirect.

app.post("/", function(req, res){
    let item = req.body.newItem;
    
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
}); // The new post request in our / route

By the above we have set some logic in our post of the / route that checks where the item is coming from whether it is from the work list or from our workitem.
This allow us to use our template for as many template we want to create. 

Another problem arises when we want to create pages that is totally different from this one we already have. Say we want to add an about page or contact me page, This page will not have the same content as the other ones. But we still want it to have the same style and we dont want to rewrite all the ejs file parts. It is very possible to create a new html file and get it rendered but this seems not the best. What if we have many pages we want to make and having many of the same content like footer and others. There is a better way to do it.

ejs allows to create layouts or partials. You can look into the section called layout in the ejs documentation. It was stated there that EJS does not specifically support blocks, but layouts can be implemented by including headers and footers.

This is very common in many sites, there background colour, headers, footers and others. Let's see how to do this. Now in our view folder we will create a new file called header.ejs and footer.ejs This two new files are going to be added to all the other files we create. So instead of having all the parts of the header that will show in all the pages, we will put it in the header.ejs file and also all the footer that will show in all the pages we will put in the footer.ejs.

We can easily add the two files on all of our webpages specifically the way they specify it in the documentation.

### UNDERSTANDING NODE MODULE EXPORTS HOW TO PASS FUNCTIONS AND DATA BETWEEN FILES

Before now we have been using require to use all the modules in our code. But how does it acutally work. If we go into the file pannel and check out ejs, its possible we find some varibales or items we already know about. But we also see a lot of export. We can understand this by creating our own module. We can also take our own code and packaged it in a module. The first thing we can refactor in our code and package in a module is the date logic. The code that get the date in our server. Let's remove this and put it in a new file say date.js

How do we get this logi back into our server or how do we use this logic? Let's say we wrap it in a function function getDate and it return day

function getDate(){
    let today = new Date();
    // var currentDay = today.getDay();
    // const weekday = ['Sunday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var currentDayName = weekday[currentDay];
    // var day = "";
    //console.log(currentDayName);
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);

    // if (currentDay === 6 || currentDay === 0) {
    //     day = currentDayName;
    //     //res.write("<h1>Yea it's the weekend</h1>");
    // } else {
    //     // res.write("<p>It is not the weekend.</p>");
    //     // res.write("<h1>Boo! I have to work!</h1>");
    //     // res.send();
    //     day = currentDayName;
    //     //res.sendFile(__dirname + "/index.html");
    // }
    return day;
}

How do we get this function back into our get route. How could we make it available else where. This is where Node comes in. If we check the node latest version docs, then the modules documentation. The modulw object is a reference that gives you the object representing the current module. That means that inside this module date.js, we access to this thing called module.

We can go ahead and log the module, and if we want to use it, we can require it. In doing this since it's not installed with npm then we have to access it with its full path using __dirname

const date = require(__dirname + "/date.js");

if we then console.log(module); in our date.js, it logged the details of our module. Most of the details here are information particular to this function or module we have created. like its id, path, filename, loaded, children, etc. Export seems to be a javascript object and for us it is empty. It means our function is exporting nothing. If we look at the documentation, we can see module.export. It is also a javascript object that we can use to make our module available elsewhere. 
If we remove the console.log and we have this instead in our date.js
module.exports = "Hello World";
Then in our server we can console.log it to see what its emmiting.
We will see Hello World on the console. This was because we are only exporting a single string from the function. Now if that we have access into the date.js module, what if we want to get access into a function instead? What if we want it to access the function instead, we can just set our exports to be egual to the function.
module.exports = getDate;

If we log date, it will just tell us that it is a function.
const date = require(__dirname + "/date.js");

console.log(date);

We do not run the function from the export because we want the running of the function to be determined at where it is being required.

so in our our code to make the function run, we will use the variable whhere we require the function as a function call.
const date = require(__dirname + "/date.js");

console.log(date());

The above gives us the output of the code from the return statement.

So by binding the function to our export module, we are now to able to require it anywhere using its path anywhere we like. We don't have to run it but we call it where it needs to be used. We can just set it equal to day which is rendered in our res.render on our / get route.

Finally we use it like this where it needs to be used
let day = date();

Now our server is now using the date module we write in it logic. This our module is now totally reusable.

But if we want our module to do more. Say we want it to return more parameters. Like return the date, day, and other values separate.
We can do this by checking the documentation, remember our module is an object this means it can take more data. So instead of binding the whole export from our function to the entire function we can split it by using
module.exports.getDay = getDay
we will write its function and down in this same file we can have another function
module.exports.getDay = getDay;
with its function and return too.

Now if we console.log(module.export);

Our module now have two functions tied to it, getDate and getDay. 

Now in our server we can specify which function to use in our module using the . notation.

Instead of let day = date();
we now have options
let day = date.getDate(); //to get the Date or
let day = date.getDay(); // to get just the weekday name.

If we want with our new module we can use the date from it using the getDate or just the day of the week using the getDay function in our module. We can add more to it. If we run our server, This works fine as before only that we now have more options in our hands.

This is how we create a module and make it reusable.

How can we make our code shorter. We can remove the returning variable and return the logic directly.

Looking at the different ways we can describe a function in javascript. There have been six of them which you can read about in this blog. We've been using the simplest form all the way. One of them is we can set our function to a variable and them use the variable anywhere we want. This is using our function as an annonymous function and binding it to the module.exports. If we look into the ducumentation further under module, we can use the shortcut exports instead of module.exports.
All this makes our code shorter and succint.
We can also change all the variables declared with let to const since they are not changing in the program.
In javascript we can make array a constant, this might seems surprising but it is peculiar to javascript. We can push an item into it but we can not reasign the array with a new item. Array is one of those thing that do not stay constant. Another one is an object, we can declare it as a constant and we can change the value of any of the keys but not change the entire object. It is important to remember this in Javascript. If you make an item a const say array or an object its still possible to vary what we have inside it you can't just re assign it. SO we cna change all our lets to const.

## TIP

Using public judgement in your favour. If you set a goal and it is only known by you, then you can easily give up on it. But what if you make it public, you will want to avoid any judgement for not achieving the goal. So one of the ways you can use public judgement in your favour is to make goals public. Just go ahead and make those your aspiration public. Do that on facebook, twitter, linkedin and all other social medias. You can say you want to do this and you will come in per day. The funny thing is you will have people cheering you up all along the way. this is because they know that it's hard and you must be going through a lot sticking to it and making it happen.


### EXPRESS ROUTING PARAMETERS
Blog posts are usually long and having them all clustering together on the home page is somewhat not too good. For amny blog you can click on the blog title and it will take you to the full page where the blog can be fully read.

In many site we will always see url/something/something for their different topics. We can do this by creating them as route and we render a custom page for each of them. Creating route for many paths can be painful that's why express have what we call request params.

Carefully read the documentation at express.com/en/guide/routing.html

You can play with it at katakoda.com

app.get("/news/:topic", function(req, res){
  console.log(req.params.topic)
})

hyphen sepatation of worlds in a url is called cabab case.

Node uses lodash to make ease in working with javascript.
Its a utility library that makes it easy to work with javascript within node. You can check their documentation at lodash.com

For example its _.lowercase('--FOo-bAr--') gives us a foo bar removing all the dashes and also converting it into lowercase.


## DATABASES
Before, anytime we rerun our server, the previous data is lost since we use an array to store the data. The reason being that the array is emptied when declared at the begining of our program and when this line of code is executed when our app is restarted then it emptied the array.

We will need a way to handle this. It is not just our site that is generating data. If you check intrnetlivestats.com, you will see records of data being generated or transfered in seconds. All this data needs to be stored somewhere. This is why we need databases.

Now that we know we need a database, we now need to choose one that will work for us well. There are lot of options even the ones that works with nodejs. Casandra, MongoDB, CouchBD, Redis, Riak, HBase, Couchbase, OrientDB, Aerospike, Neo4j, Hyperable, ElasticSearch, Accumulo, VoltDB, Scalaris, RethinkDB and many more.

Choosing might be a prety difficult thing. The reason for this is that depending on the type of data you need to store and te structure of that data, you might favour one of this DB over another. Regardless of the one you choose, whether they are SQL based or No SQL based.

SQL - Structured Query Language
Very old school, businesses have been using it for a long time.
NoSQL - Not only Structured Query Language
They can be any format so far they are not SQL.
These are the two type of databases that we have.
If you check google we will find many example of databases. The few example of SQL that we will use here for SQL databases is MySQL and PostgreSQL while good example of NoSQL is MongoDB and redis. We will see how to work with the two. You might have heard about them but which one do you use for what and why and when to use and when.

Let's see the differences between SQL and NoSQL
The first thing to note about them is there structure. Say you're making a lot of sales and you are shipping a lot and you need to keep the details of the customers. Now if you are use to excel, a SQL database will serve you well. You will put the customer data into tables such as MySQL or PostgreSQL. You might find out that SQL databases are not so flexible. Let's say you have one anoying customer, and didn't want mail sent to his address. Saying deliver the product but send all other communication to my email address. Now since you don't have a field for email in your table then it would be hard to fix this details in. No email column and not email entry in your table. What if there is another customer that doesn't want to give you any information. Say there address or email, then there is a gap in your table and that doesn't sit very well with your databases.

For SQL, what will be done is to square up this database, creating all the columns for any it of data available. The missing information will be filled with null. and this null can be very dangerous. If you are trying to send out a marketing mail to your list, the null mail will be included.

If you are working with NoSQL database like MongoDB, all this data will be representd in Json objects. So you will have key/value pair and if we have an extra data it will be added at the end wich will not affect the other data. This data only need to be arranged in the same way.

Consider a pc guy SQL with a mac guy NoSQL. The old guy is old and reliable. also very structured, follow rule, specify structure before hand and any rule and stick to it. For MongoDB it is flexible, easy to adapt. This is easily adaptable to startups that does not have fixed data. Say this data or product today and another tomorow i.e no fixed data yet. NoSQL database can be flexible, flashy and nice. The problem about this type of guys is relationships. The rarely have a way to relate data. That is why you might often heard them compare SQL and NoSQL as Relational and Non-Relational databases. SQL databases are good about establishing relationship among data in the database.

In our former storage we have our data in our a table i.e SQL. But say we have multiple records and related data. What we will do is we can group related data in a table. Say we have customers table, products table, orders table, etc. And in your databases you can relate all this databases using a customer ID. and you can relate the products table with the orders table using the product ID.

At the same time, since the tables has an ID that join them to one another, we can join them using this ID's. We can know which order, which product and which customer bought it. If we use a NoSQL like MongoDB, You have to think of how to organise the data. In this case we might have a document, where we have the order ID, customer has its details and values and the product that has its owm embedded object in order to represent the order object. This might led to repetition of some data. We might also have our data in different document, say we have one for customer, one for order and one for product. We can link this data by using refrences. In the order document, the customer references the person document with person_id: person_01 and in the order document the order references the product document with the id products: product_01. This is how you might implement relationship in a NoSQL database like MongoDB. The only down side to a data like this is that it might not be very structured like SQL DB.
If you want to use any database, You must know what you want to do clearly. If it is tabulated data like customer inventory and things that have relationship with one another, ypu might want to use an SQL DB. On the other hand, if you have a website where you have a one to many relationship. Say IG, a person with a lot of data or post array containing different objects. This can be done using Mongo DB. 
SCALABILITY
NoSQL, despite lacking relationship like SQL, it can be over SQL due to its scalability. This is a strong point of NoSQL databases.
If you have work with a large excel spread sheet with a lot of data, if more and more is added to it, it gets slower and later crashes saying 'Excel cannot complete the task with available resources. Choose less data or close other applications.'
It says you need more powerful computer. You will need large and large of server. Scalling had to be done vertically if we add more data. Managing a lot of data with SQL is like scalling vertically. It's like adding a new floor to a building per time till you have a skyscrapper that eventually becomes unstable and collapse. This scalling is also very expensive. This is the advantage of NoSQL,  Mongo DB has an advantage where data is arranged in small chunks, each record and each data is a json object. In this case instead of buying large and large amount of system, it allows for a distributed system. Your data base can distributed between lot and lot of system. This is like having a building and bilding plenty of them all along. You have the system and have the information scored accross them.

So if we have to compare the most popular SQL DB with the most popular NoSQL i.e
MySQL and MongoDB
More Mature || Shiny and New
Table structure || Document structure
Requires a Schema || More flexible to Changes
Great with Relationships || Not Great with Complex Realtionships
Scales Vertically || Horizontally Scalable


### SQL CREATING A SQL DB
We have seen the pros and cons of the main sides of the DB we have. Here we will be having hands-on on a SQL based DB. A great resources to help is w3school.com/SQL
It is a good guide to familairize with this language.

With every single type of DB the main thing we will be doing is Create, Read, Update and Destroy. In database lingo it is known as CRUD.
Let's try out with a SQL based DB
To create, say a new table we can look at the documentation.

#### CREATING A TABLE
CREATE TABLE table_name {
  column1 datatype,
  column2 datatype,
  column3 datatype,
  ....
}

The last thing while creating a table is to set the primary key or specify a column that will perform that function. Let's see an example of our product table

CREATE TABLE products {
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
}

Then we will also remember to set our id to not null. The id is a special key that we can use to assess each role in a table. If it is null then it will be difficult accessing any role without an id. 

We can check for type error and correct.

Now our table has been created but has no data. We need to add data to it. Say we want ot add a new product of id 1, name pen, and price 1.20
Looking at the documentation, this will be done with INSERT.

There are tow way.

INSERT INTO products
VALUES {1, "Pen", 1.20}

The above is a single line statement. Don't forget that our data input follows what we specified as their data types too. Now we have a role in our table.

If you want to skip a field in the record say in a role. Say we have a product call pencil but we dont know its price yet. We can specify the columns we have data for.

INSERT INTO products (id, name)
VALUES {2, "Pencil"}

Our price field will be nil here. But if we try to ignore the primary key, then the new role will not be added.

#### SQL COMMANDS READ, SELECT AND WHERE

In the last lesson we learn about creating and updating i.e inserting data into our table.

But now how do you read data from your tables. We use the SQL keyword SELECT to read data from our tables.

To show all data in a table

SELECT * FROM 'table_name'
* means select everyting. If you want one column or two we can say

SELECT name, price FROM 'products';

What if we only want a particular row?
This is we need to search our database using the WHERE KEYWORD. See the syntax below

SELECT column1, column2, ...
FROM table_name
WHERE condition;

The where is a condition like WHERE Country='Nigeria'; or WHERE CustomerID=1;

SELECT * FROM 'products' WHERE id=1;

The above gives a single row where the id = 1

If we check the documentation, we can also see a lot of fancy operators with distinctive functions.
All this can be used with the where statement.

#### UPDATING SINGLE VALUES AND ADDING COLUMNS IN SQL
We have seen how to Create, insert, Read data in our SQL DB. Here we will be looking at the U in our CRUD which is updating specific data in our DB

In our product table, we will see our pencil price is set to null. If we want to update the price of the pencil then we can use the update statement.

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

This statement needs to be completely used in order not to make it global or setting a value for an entire column. So it is important to include the WHERE condition.

UPDATE products
SET price = 0.80
WHERE id=2;

The above is going to find the particular record and set it to the specified value.

What if we want to change the table instead of a particular record say we want to keep track of the stock of our product. We can ALTER the table. It is used to add, delete, or modify columns in an existing table.

ALTER TABLE table_name
ADD column_name datatype;

e.g ALTER TABLE Customers
ADD Email varchar(255);

In our case

ALTER TABLE products
ADD stock INT;

With this we now have a new column but the all the value in the column will be set to Null.

For a challenge lets set the first two value in our stock table to 32 and 12 respectively.

UPDATE products
SET stock = 32
WHERE id=1;

UPDATE products
SET stock = 12
WHERE id=2;

Now our stock table values are now updated. But we can see how painful it is to update values in a table especially when we dont account for it from the onset.

#### COMMANDS DELETE
We have look at the other 3 letters in CRUD, we are only left with the D i.e DELETE

To delete a record we can simply write

DELETE FROM table_name
WHERE conditon;

Say we want to delect the record of pencil

We can say 

DELETE FROM products
WHERE name = "Pencil"

or for better sake we can use id

DELETE FROM products
WHERE id = 2;

Be careful not to run the DELETE statement without the WHERE statement because it will delete everything in your product table. Always check your statement before running it.

Now we have seen how the CRUD is done on SQL.

#### UNDERSTANDING SQL RELATIONSHIPS, FOREIGN KEYS AND INNER JOINS
Now that we have seen how CRUD is done in SQL, the next thing is RELATIONSHIPS. 

Back in our table lets add the deleted pencil record back

INSERT INTO products
VALUES (2, "Pencil", 0.80, 12)

This add our pencil row back.

Let's create a new table orders with an INT id and NOT NULL, order_number INT, customer_id INT - This will be the foreing key for our orders table. We will include the product_id INT, We can set PRIMARY KEY (id), We can also specify a foreing key.

The foreign key is going to be the key that is going to link our table together.
Say we have a persons table and orders table. The persons table the personID is the primary key.

Now in the orders table, the OrderID is the primary key on the table but in addition the personID id used as the foreign key. So in our orders table we can use the foreign key to get the person details of any order from the persons table using the added foreign key PersonID included as foreign key in the orders table. This is how you establish relationship withing tables.

CREATE TABLE orders (
id INT NOT NULL,
order_number INT,
customer_id INT,
product_id INT,
PRIMARY KEY (id),
FOREIGN KEY (customer_id) REFERENCES customers(id)
FOREIGN KEY (product_id) REFERENCES product(id)
)

If the concept of primary and foreign key are foreign to you, you can checkout more on w3schools.com to read out more on how you establish relationship using SQL using the keys.

By including this foreign keys, we can now create a bigger table using all the relationship among our tables.

INSERT INTO orders
VALUES (1, 4362, 2, 1)

JOIN
This is used to join our tables together. There are many types of join but we will be looking at just few here.
We will be using the inner join to create a new record

SELECT column_name(s)
FROM table1
INNER JOIN table2 ON table1.column_name = table2.column_name;

In our case;
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id

This create a new table from different table. We have searched through all our tables and create a table which is more useful for us using the relationships. With this we can know who a particular order is being sent to.

The above join the order with the customer. For a challenge, Join the order with the product
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id

This are a bit of SQL magic using relationship. This is so powerful and very good in searching and visualizing your data.

## TIP
Sometimes if you are working from or out of utmost convenience, it might make things very difficult. You might found yourself pushing the task away or not really figuring it out the way you are supposed to do. This is why, in order to make things easier, you can found a location or an environment that push you to the limit or that put you in utmost productivity. Doing this might also come in many form which may be a study buddy, local library, commit helper, timeline, etc. The most important thing is keep going.

## MONGO DB

### INSTALLING MongoDB
Go to MongoDB.com, click on get MongoDB. This gives you three options, cloud, servers or Tools. We will go with server and select the current release version. This will detect your machine. Click on the file, extract and install. The next thing is to carefully setup MongoDB on your machine. You can follow specific guides on that...
You can 

mongod starts the mongodb server on a localhost
This do not allow any input, so we open a new terminal
run 
mongo  This starts the mongo shell.
Once the mongo shell is up, if at anytime you dont know what to do, you can always type help as a cry for help.

You can use any of the commands it loads out for you.



show dbs -- list all the dbs

help -- show commands

Create
use dbname -- create a db

db show the current db

collections in mongoDB is similar to tables in the SQL world

You can follow the documentation and examples available to us online.

The only issue is to avoid syntax error.

Inserting rows
db.products.insertOne({_id: 1, name: "Pen", price: 1.20})


Reading
db.products.find() -- returns the entire table

db.products.find({price: {$gt: 1}}) --with condition specified

db.products.find({_id: 1}, {name: 1})

db.products.find({_id: 1}, {name: 1, _id: 0})

the first {} specify the condition while the second {} state the projections. We use this to specify field to be returned. 1 means true and 0 means false.

Update

We can also update data in our MongoDB database.
Let's update some record in our product table.

db.products.updateOne({_id: 1}, {$set: {stock: 32}})
first {} is the field to update and the second {} is the what to set it to. The first parameter is which record to update and the second parameter is what to update it to.


Delete

Deleting data from collection.
We have two methods, that is deleteOne and deleteMany

db.products.deleteMany({_id: 2})


RELATIONSHIPS WITH MONGODB
There are two ways. The first is the most preferred but the general use case will depend on your project achitecture and how it is structured.

If we want our product to have a new product. May be rubber

db.products.insert({_id: 3, name: "Rubber", price: 1.30, stock: 43, reviews: [{authorName: "Walmark", rating: 5, review: "Best rubber ever!" }, {authorName: "Bally", rating: 5, review: "Awesome rubber!" }]})

Say our rubber has review we can embed another document within it. This will help us associate this data. We can always update this data.
With the above we are able to establish a relationship between the single product and review by embedding another documents within the product.

This style of relationship is very suitable when we have one to many relationship. A single product may have many review and at the same time a single or customer might create multiple reviews.

The second way might be to have all the product as a document and then have another document which state which is the order document and contains an array of all the product ordered.


### MONGO WITH NODEJS
We have look at how to use MongoDB on the command line. Here we want to create app that uses databases using NodeJs.

When we are creating a NodeJs app that needed to use MongoDB, there are usually two options. The first is to use MongoDB native driver and the second is to use an ORM (Object-Document-Mapper) called mongoose. The most popular way however is using mongoose. The reason is because it gives room for ease and cut down on the amount of codes needed to so manage data in our database.

#### Using The Native MongoDB Driver
Head over to MongoDB documentation @ docs.mongoDB.com
Go to drivers tab and select the language of your application. For us it is NodeJs. Then latest documentation and then guick start.
We can follow the code to use the DB.

Let's use a new project to demonstrate. Let's say a fruit project.

assert has to do with comfirming. It is to test.

The documentation might have changed greatly by the time you are using this document. The best thing therefore is to stay with the present documetntation to know what to do. or for your usecase.

The code is so wordy and long all the time we want to perform any CRUD operation using the native MongoDB library. This is why we have something simpler called Mongoose.

## MONGOOSE

You have seen how difficult it is to work with native mongoDB. This is why we need something to make the whole thing easier. What does this for us is mongoose. What took just 2 or 3 line of MongoDB shell, took multiples of 10's of codes in our app to do due to validation and others. This is another reason why Mongoose is essential.

Mongoose will allow your app to use the language of javascript object to speak to our MongoDB database which speak the language of documents and databases. The objectives of this framework is to things easier and writing logic and data operation with the database very easy. In few line of code we can do everything we have done before.

Just like in manipulating the DOM with vanillaJs when we have to write a lot of codes and was saved by jQuery. Same is Mongoose for MongoDB.

Once you connect to the MongoDB server.

We are going to cut down on our code by using mongoose.

Looking at the documentation we connect mongoose, then create a schema.

## DEEP WORK

Its a book. Talks about how you get into a deep flow and how you produce deep work.

People think when you just sit you are learning but that's not. But engaging your brain and using, practicing and applying what you have learnt so far. It's about making work to be work and nothing else so also taking play to be play. When at work, be work focused like 95% and when out of work dont think work at all. When you work, work 100% and when at play, play 100%. So dont just waste your time but engage and not deceive yourself.


## TIP
Sometimes it oftens happened that when you are working on something or learning, you have a feeling that the more you learn the less you know and the more you need to learn. Just like when climbing a mountain, the more you climb the fathar the top becomes but here is the way out. What you need to do at this point is to focus and look at every little steps you take. Just like taking a step at a time. You will see that you will find your step at the top. Though you might have a big goal but dont focus on the goal if you do so, it will only make you look like an ant. Focus on one step at a time, 1 hour coding a day or solving on little challenge and the more you do this, it is certain you'll get there. So truly you have a big goal but focus on one step at a time and as the law of physics implies you will surely get there.


## DEPLOYING OUR APP
Before now we have hosted the code on our local system, the same is also our MongoDB database. We have been using the localhost and a port 3000 and 27017 for mongoDB. Their ports are different because for our server we are using http rule while for MongoDB we are using mongodb rule.
http://localhost:3000  and mongodb://127.0.0.1:27017 respectively
But all is hosted on the same laptop i.e our local machine. Unfortunately we are the only one who can access it, which defeat the purpose of it being a website.
From previous lessons we know we can use a server hosted on the internet and accessible anywhere across the internet which can host our node server. This will mean using a server address like https://yourapp.herokuapp.cpm and anyone can access our app anywhere on the internet. This will do for an app without a database but our todolist app has a database. It needs to add and delete data from our database. If this is our system then it cannot work.
Their is a difference between a workstation and a server. So we need a database that will be online always. This means we need a database server that will be available at all time. So we need a server capabale of hosting MongoDB databases. The one fits in this is the very MongoDB server called MpngpDB Atlas. This will allow us to have a web based address and allow our app to serve data whenever it is needed. SO our nodeJs app will be able to make the right query from the MongoDB Atlas cloud server and be able to delete, update and get data anytime. So anyone can use our applink from say heroku and through the app backend access data through MongoDB database.
SO we will put our app on the internet so that anyone can access it.

### HOW TO SET UP MONGODB ATLAS


## TIP - DISCIPLINE
Most of the time a lot of people mistake motivation for discipline. There are day that you truly were excited to work on the project and there are days that you are just like did I need to do this at all. Motivation is you wanting to do something because you want to get something or get to a place or achieve some goals. This are time you might have to look at your goals. In the days that you dont feel like it, you get to have some discipline. It boils down to the discipline to still sit down, do the work and make some effort. The one thing about discipline is that it birth more dicipline and the more disciplined you get the easier it gets. The more you do it, the more easier it becomes. So keep going and you will get there.

## TIPS GO BEYOND YOUR LIMITATION

Getting into a new environment can be a bit difficult. But you still had the willingness to choose. You can choose your response. Sometimes you might want to blame it on someone or something that's easy. But if this thing is something you cannot change then it might be a waste of time.
Instead of playing te blame game or complaining about things that you cannot change. Why not do make up your mind to do something extra to change what can be changed. You can wake up ealier, do extra work, study more and the more you do this the better things get better for you. Have you ever being to the gym before, if you found out, the people that are the strongest are not the people who are strongest at the beginning or people that feels they are strongest but people that consist, those that do something daily to get stronger. This is who you want to be. So you are the master, you are the one in charge, it doesn't matter what you are now, how weak you are but just focus on things you can change. This is what will make a huge difference on the long run. Keep going, keep taking the steps, keep doing something daily, the world is your oyster. Keep learnig and keep growing.


## BUILDING YOUR A RESTFUL API

Before now we have worked on creating a server and doing crud operations. We have also use API's but now we will be building a RESTful API.

What is RESTful API and what does it mean that an API is RESTful?
The REST does not mean relaxation but stands for REpresentational State Transfer.

To understand this we will look at the achitecture, the one that includes the client and the server in which the entire internet is built on. If we use the restaurant analogy, the client will be someone that came to eat and the server will be the server and the restaurant. The client will make an order and the server will check and see if its what he can fulfil then go ahead and fulfil that request. If the client's order is not on the restaurant's menu then the client will receive and error, a classic Error 404 which is resource doesn't exist. When this request is being made it is made through HTTP.

We see this anytime we write the code
app.get(function(req, res))
This is the language you use to make the request. It's like the language you use in making your order and the server uses to understand your request and give you back the correct response. What you need to is that HTTP is not the only language the server can speak. Another language that you might have heard of is
the FTP request. If you use the wrong language, you might get back the wrong response. This means you must use the right language to get the right response. For example if you use french language to make an order in a Yoruba restaurant, it is certain that you might get back a wrong response. So the request must be in the right language.

At this point you might say, what about other things like HTTPs request? The s here stands for HTTP secure request. This means an HTTP request that is secured and cannot be tapped into or hijacked while it travels across the internet. We might use cryptography and other security to secure it. Imagine you and the waiter speak a specific language that is only known by just the two of you. This means even while you are speaking openly and at the top of your voice no one is still able to decode what you are saying.

Let's say the client has made a request and it is what the server can serve, then the server should respond with a response. In the restaurant this might be a pizza but on the internet this might be a resource such as images or secific data.

You have in our code app.get(function(req, res))
the res - result is what we get back from the server.

In getting back the result, the server might do some few things run some computation, run some codes to get the resource you need. Say doing some calculation or going into the server to get a resource.

We know the client must communicate with the server but at the sme time there is only a certain number of things that the server can do. In a restaurant the menu says what the restaurant can serve. The same way a server will have an API that says what it can serve.

So building an API is like building a menu of things our server can respond to when the client make a request.

### So what does it mean that our API is RESTful
REST is an architectural style, just like different building has different architectural styles such as the Barogue, Gothic and Neoclassical. These are architectural style for designing a building the same way REST is an architectural style for designing an API and it's not the only one. The one before REST became dominant is SOAP and we also have GraphQL or FALCOA but the gold standard presently is SOAP. REST can with a man named Roy Fielding as an outcome of his PHD in the University of California. He researched and came with this rule for designing API called REST. He came up with the idea that all websites across the web would use the same structure for building their API's. Such that say all building wre built using the same styles then no one will ever miss his/her way in using the resource in the building. The same goes for API, such that if every API was built using the same common guiding principles then it would be so easy for everybody to work together and be able to use any resource quickly and easily.

### HOW DO WE MAKE AN API RESTFUL
There are truly lots of rules that an API has to follow to be RESTful. Just like you have at work or in school, there are many rules. But the two most pronounced one are Use HTTP Request Verbs and also to use a specific Pattern of Routes/Endpoint URLs. This two are probably the most important parts of making your API RESTful. We will look at each in details.

#### The HTTP request verbs
As we have seen before. First is GET, then POST, PUT and PATCH. Patch was added in 2010. It is a little twist on how we update data. The last is DELETE. We will look at them in details. These are the five HTTP verbs that you should be using in order to make API RESTful. You might realise that they have a lot of similarities with what we covered recently when we look into CRUD. So we will look at the HTTP request verbs and our database CRUD operation and we will see them in practice. 

#### GET --- READ
Get is analogous to READ. We have see this code many times 
app.get(function(req, res){

})
We use this when we want our server to send some resource. We use our call back to pass some request and expect a response back. And if the resource involves getting something through our database then it migth involve searching through our database and returning the data as the result.

#### POST ----- CREATE
POST corresponds to CREATE in our crude function.

whenever we create a form in our CRUD function we use app.post(function(req, res){

})
when the data is posted we create and entry in our database and save that data for a later time. In this case the request will contain the data and the response will simply be success or maybe an error code if there is a  problem.

#### PUT PATCH ---- UPDATE
PUT and  PATCH corresponds to UPDATE in our cru operations. We migth have app.put or app.patch
app.patch(function(res, req){

})
and this two things both go into our database and update some piece of data.

##### WHAT IS THE DIFFERENCE BETWEEN PUT AND PATCH
Say you see a beautiful bike on Jumia, and you loved it and as a boss you are, you clicked on buy. Now all went successful but on the day of delievery, you check and put the bile together and the entire front wheel was messed up. You then make a complain and the issue can be resolved but in two forms,
The first option is to replace the entire bike, This is equivalent to PUT where you update the data by sending an rntire entry to replace the previous one. Here though the front wheel is what is bad but we just go ahead and replace the entire bicycle.
The Second option is to send you the broken front tyre since that was the only thing that was broken and the entire bike was still fine. At least you will save some energy, resources and some carbon emission in lifting this heavy load. This is exactly equivalent of PATCH. When you send a patch request to a server you only send the piece of data that need to be updated instead of sending an entire entry that will replace the previous one. Here you are just updating the data.

##### DELETE ----- DELETE
This is removing or destroying a piece of data in our database.
app.delete(function(req, res){

});


#### USE SPECIFIC PATTERN OF ROUTES/ENDPOINT URLs
Now that we understand HTTP Request Verbs the next is Use Specific Pattern of Routess/Endpoint URLs in order to make your API RESTful.
Same way when you go to Safari there are diffent routes you use to reach certain endpoints say /elephantsmor /camels or hippos etc In our server we can specify certain url in order to reach certain endpoints/resources
e.g www.google.com/elephants for the elephants or /camels for camels or /hippos for the hippos.

We have use routes before in our server but in order for our API to be RESTful we have to use specific patter of endpoints and routes.
For example if our API is the wikipedia and in our database we have a bucnch of articles. Now the route for /articles applies to all the articles. Any operation you do with this route should apply to all the articles. HTTP Verb GET should fetch all articles, POST should create and add a new article to all the article and DELETE should delete all the articles.
The ssame way we specific routes for specific articles, say /articles/jack-bauer. If the client makes a request to this post. A GET should fetch this jack-bauer article. A PUT or PATCH should update this article and DELETE should delete this Jack Bauer article. We will see how all this work in the hands on sessions following.


## BUILDING A WIKIPEDIA LIKE API
Now that we know what a RESTful API entails and the conditions to make an API RESTful, then let's build one.

The first thing we need to do is to create the data in our database. We will be using MongoDB database and also a graphical user interface that works well with MongoDB called Robo 3T. They used to be called Robo Mongo so if you go to robomongo.org you will be able to download Robo 3T for your specific OS.
Once downloaded you will see an interface to connect to  through the localhost. Remember to start your mongo db on the terminal before the collection.

Once connected you can do anything on this GUI.
Create a new database
create a collection. The rule for MongoDB here says to make it plural and all lowercase. So an article collection will be articles. You can know this naming convetion by looking at the documentation. Robo3T in the background is always running MOngoDB command to carry out processes and querries and also do it concurrently with all your operation. All you need is some click, drag and input and it does the coding thereby making the operation easier.
Once our documents were added, we can then use it in buildingour API or fo other operations involving the data in our database.


FOR A CHALLENGE SET UP A SERVER
Create a new directory called WikiAPI
Create a new file called app.js
Initialise NPM and install body-parser, mongoose, ejs and express
Inside app.js add server code (write/Copy)
Setup MongoDB:
DB name is wikiDB
collection name is articles
DOcument has 2 fields: title and content


### GET ALL ARTICLES
Remember our RESTful rule the one of our HTTP verbs.

so we will go step by step to make each of them work for our API

The first is GET for all our articles /articles

we will use express
app.get(route, function(re,res){

})

and behind the scenes in terms of our database we will be READing data. We will be using modelName.find({condition}) to get the right result.
 We will not put any condition, this will give us all data.
By the time this is properly set up accessing the url/articles will show all the documents in the articles collection i.e all out artiles.

Now we have tacled fetching all articles through the /articles route.

### POST a New Article

What if the client make a POST request to our articles route. This should add a new article to our article collection in our DB.

This is tricky because the client is going to send data essentially to our server and presently we don't have a front-end so this data will be sent straight or sent directly to our server. How do we handle this without building a frontend. How do we tidy things up through our API and our server such that the client can be able to work with our server and db. The client can be a lot of things, it can be a browser trying to load up a web page in which case it will make a GET request to ur server via our API and our server will send back the right files html, css and javascript file to be able to render that page in the browser. Also the browser can also be making a GET request to our server looking for a particular resource and we have seen that this can be gotten as we did through the /article route through our API. We are able to do this through the GET request but how tdo we do this through the POST request. To get this done we can use a tool called Postman.

This will enable us to send data and test our API without building any frontend at all.

We need to install postman. Head over to getpostman.com then click on download. Choose your platform and install. You will get a welcome page.

to use express to address post request in our server we use
app.post(route, function(req, res){

})
so we will do this in our server and in the article route. This post request will go to our /article collection.

We can tap into req.body.title and req.body.content to get this fields from the client.

### DELETE All Articles
still on /articles
Here the client will send delete HTTP request to delete all the article. We haven't done this before with express but it is ptretty similar to GET and  POST.

app.delete(route, function(req, res){

})

The above handles the delete request. With the momgoose model delete code.

model.deleteMany({condition});

### CHAINED ROUTE HANDLERS USING EXPRESS
There is something that express allow us to do if we are using the same route e.g get post and delete on same /articles route.
If we look into express documentation at express.com/en/guide/routing
We can see that we have another method call app.route, this helps us use the same route for several operations. This is very essential in helping us reduce redundancy and writing a maintainable code.
We will call the app.route and then use app.get, .post etc under it. 

Chained method is not strange to us because we used it while working with jQuery.

The only thing is that it is easy to messed up.


### GET A SPECIFIC ARTICLE
After we have conclude for our main route /articles, we can noiw go ahead to write our code to make our API handle for specific routes e.g /articles/jack-bauer or /articles/article-name or any other one. Our code must be able to handle whatever single article or article name.

For this we can have another chained route method. Using the "/article/:articleTitle"

we can get :articleTitle to get user input article title then perform a READ operation from our database.

Here we can just use the find on method since we expect a specific result.

First of all we must be able to handle the get method of that specific route.

NOTE:
In querying using a specific article title, the way the browser represent spaces to query is %20. This is what represent the space character

### PUT REQUEST ON SPECIFIC ARTICLE
By this the client can make a put requeswt on a specific article.
We can use the app.put(route, function(req, res){

})
we will just change the put method. We will need to update and just use the update method available to us in mongoose.

mpdel.update( {condition}, {updates} )
Note: Always check out the documentation for the use case.
From the recent documentation the replaceOne method is the recommended option to replace an entire document.

In postman, we will be using the making a PUT request to the /article/articletitle we want to update with also the document field we will need. This includes the new article title and content to be used to replace the former.

const res = await Article.replaceOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content});

This will search all of the article collection to find the specific article to update, if there is a match it will then replace the title and content of that specific article with the new title and content sent in the request. If the article is found then the whole document is completely replaced even when the fields supplied is not complete.

Note: Always consult the documentation for the use case.

### PATCH A SPECIFIC ARTICLE

Unlike in the PUT once the document is found, the whole document is replaced even if the fields supplied is incomplete. We can attend to this using PATCH. Such that if the document is found and not all the fields are supplied, then we can just update only the fields that are supplied in the document.

const upArticle = await Article.updateOne({title: req.params.articleTitle}, {$set: req.body});
The above does it.

### DELETE a specific Article
This is the last in our RESTful API, what this will do it to delete specific article once found in our database. This is to just use our delete method on the chained route. 
function(req, res){

}
with the mongoose method model.deleteOne({ condition })
const del = await Article.deleteOne({ title:req.params.articleTitle }); // returns deletedCount



##
A lot of students just like me might be taking the course to get a job. Most times we worry about your certificates but dont bother about that. A lot of interviewer only care about what you can do and not certificate. Though some company have some blanket rule to see some certification before getting in but many dont care. So show them what you can do. Have a portfolio. Check the job listing for the role you are intending for and based on the requirements and the expertise they are looking for and build something using those skills. Then find a way to help other developers answering questions on those skills. Another really important thing for recruiters is knowing that you work well with other people. Including the seniors and juniors. And someone who will perform well will be one who can work with both well. So start building up your stack or stack overflow reputation or start doing some code reviews with some senior developers. With these not only will you be capable by your skills but also be capable to work well with others. And most importantly to keep going.



## AUTHENTICATION AND SECURITY

### INTROUDUCTION
Most times people see this as ultimately complex but it is not. In this module we will be discussion and building authentication from scratch. This will help us see what it involves and entails.

#### WHY AUTHENTICATE?
As we create our website for our users to use, a lot of data are being generated. This data may include names, messages, recipes including sensitive data. Now in other to associate specific user with specific data, user need to create an account for each user using a username and password and we would essentially create kind of like an ID for them to uniquely identify them on the database and save their data with their ID. This means anytime they come on the website they can easily use their username and password to login and access those private information eg. messages and information.
One of the reason you might want to use authentication is to restrict access to certain areas of the website depending on the status of the user. Say you are on linkedIn, once a user pay, their account needs to be updated to have access to paid content or services.
Also you might want to restric access; this can be done in a number of ways. Signing on on a website can look easy but the difficulty is ow secure will the site be. We are going to tackle this problem of authentication by going through the different levels of security. We will go from basic to OAuth, social loggin including things like sessions and cookies and hashing and encrypting passwords. And it is going to be more.
It is important to learn to build security from the way up but you can also use third party library like passport.

We will create a like of whisper app, where people can share their secret anonymously. The site will have an homepage with register or login button once they have successful been authenticated it takes them to secrets page.

### GETTING SET UP
Once you have gotten the starting file. Init npm. install the right packages and ensure the server is properly setup. / route render home.ejs, /login renders /login.ejs and /register render register.ejs.

Start the server and check to see if everything is running fine.

### REGISTER USERS WITH USERNAME AND PASSWORD
The next thing is to allow users register and log in. We will be keeping their data in MongoDB. Once a user is properly registered and logged in, they can now have access to our secrets page.
This is the level 1 of our security. This is the lowest level of security. We create an account for our user, store them and when they come back we can check once they come back whether they are registered or not and then let them pass.

We will set up a Database of Users and we will do that using mongoose and MongoDB.

Install mongoose and require it, then connect mongoose to our userDB. Don't forget to start mongod on the terminal.

If everything is well set up, if we start our server with nodemon - nodemon app.js then there should be no error.

Then we set up a new user DB. We need to create a schema with the email and password fields. Then use our schema to create a new user. Once a new user is created it should be added to our userDB and this is at the point when a user goes into the register page and input their details follow by a submit.
We will crete a new user with the app.post at the register route grabbing the information the user entered on the page. The data can be identified using their names, one is username and the other is the password.
In the app.post /register we create a new user and then save the details in our userDB. If there is no error, we will then render the secrets page else we send an error message to the user.

Its time to test. Remember to not use a long email or password so that it will be easy to input anytime.
Once the form is filled and submitted and we load the localhost:3000/register, once we input the email and password and click on the submit button, if there is no error then the secrets page is being rendered. If we go into our studio 3T, we will find a new DB called userDB and inside it we can find our newly created user documents.
Presently user can register but cant log in so we have to handle that.

To handle this we will, say a user load the /login page and enter their details, inside our post /login route we will grap the user details i.e email and password using the req.body. Once this details is captured we will scan through our database if these details are present.

First we check using findOne with the email, then save the return into a varible. We will then run another if condition tapping into the foundUser object if the password matches the one entered by the user. If the password matches then this user is real and can then have access by rendering the secrets page for the user.

NOTE:
There is a serious problem because the password of the user is stored in plain text. If there are many users and all of there password is saved in plain text then any of my employee can look through my database and know what everybody password is. This means any employee can found any user login and use it to login. This is pretty bad. At the same time if an hacker decides to hack into my server and locate my DB, this will be a big loot for them. Funny enough, many people will reuse their password across multiple channel, websites and internet places. The hacker can always use this information to login as you on multiple channels.
WARNING:
Dont reuse password, always have a way of generating password specific to different channels.
Also if you are going to make a website never store users login details especially the password in plain text such as we do here.
THIS IS LEVEL ONE, LET US LEVEL UP!

### LEVEL 2 - DATABASE ENCRYPTION

Having seen what level one authentication looks like, its time to step further which is database encryption.

This involves encryption 

#### WHAT IS ENCRYPTION
This is scrambling something so that people can't tell what the original was unless they were in on the secret and they knew how to unscramble it. This is the same same thing when you and your friend are sending each others messages using some agreed codes which you both knew how to decode. On a bigger scale if you ever watched the Imitation Game or read about the Enigma machine, that is basically a form of encryption. And the Enigma machine if you dont know is just simply a machine that was used during the World War 2 when the German will send each other messages they would use the machine to encrypt those messages so that when the messages were intercepted and you knew the decoding Key was or what settings were for the machine, then you wouldn't be able to tell what it is they are trying to communicate to each other.

If you were interested, its really good to watch two videos that were done by Numberphile on Youtube and you can alwyas found the link. It explains the Enigma machine and it talks about the flaw in the Enigma machine that led Alan Turing and other people at Bletchley to be able to crack the code and create what was very much a specialised computer to be able to decode those messages and helped the Allies win the war. And if you ever visit London be sure to go and check out Bletchley Park and they have a computer museum next to it as well which is super fascinating.

Back to the ciphers and encryption. One of the earliest ways of encrypting messages that we know about is the Caesar Cipher. He was one of the generals on the Roman Empire and what he did is he would send messages to his generals and he would encrypt it so if his messanger go murdered along the way, then his messages would be kept secret. This is one of the encryption we know about and it's very simple.
Say we have the alphabet ABCEFG, all the Caeser Cipher does is a letter substitution cipher and the the key of the cipher is the number of letter you will shift by. So if you knew what the shift pattern was then you could really quickly decipher the message.

SO if we are to encrypt the word Hello, there's really a neat tool online that can help us do that. It is called cryptii.com you On the site you can choose the type of cipher or encryption you want to use and then you can specify a shift
say shift of three. So if my word is hello then it becomes shifted into "khoor" and an unknown person and a non cryptographer it can be difficult to see at a glance what this is trying to say.

In modern days this is very simple and it is very easy to crack. But there are other forms of encryption which are a little bit more complicated and it involves a lot more maths to make it more time consuming for somebody to crack.

But essentially, all encryption works exactly the same way. You have a way of scrambling your message and it requires a key to be able to unscramble that message.

So lets go ahead and use encryption and the npm package we will use is the mongoose-encryption. If you look at the documentation it is a simple encryption package that works well with mongoose so it is good for us. It uses an encryption algorithm called AES which is a ralatively modern encryption algorithm and far more secure than something like the Caeser Cipher which is very very easy to break.

Now before we get started find a time to read the documentation. It can encrypt and it can authenticate. We are only going to use it most basic funtionality which is encryption and we're going to leave the authentication for other lesson where we discuss things such as hashing algorithms.

SO to begin let's install the package into our project.
In using the encryption, we will require it, then follow the documentation to recreate our schmema then add the encryption as a plugin which will be using the string secret.
const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

const secret = "Thisisourbigsecret.";
userSchema.plugin(encrypt, { secret: secret });

This is all done before we create a new model from our schema.

Now our schema now have an encryption power enable. This will encrypt all the data in our database. You may or may not like that kind of behaviour. In our case since anytime the user login we have to search through the database for the user's matching email, then we might have to leave our the email field from the encryption. The option to change is to only encrypt some certain field. See the below

userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

The above will only encrypt the specified fields. We can also add other fields we want encyted in the above.

So now that we've added our encryption package to our userSchema, we've defined the secret that we're going to use to encrypt and include the field to be encrypted we're good to go. We dont need anything special to do again. This is because the way this mongoose-encryption work is to encrypt when we call save and decrpt anytime we call find methods.

In our case when we use the save method, the mongoose-encryption we encrypt our password field and anytime we called the find method it will decrypt the password field.

So let's save and run then go ahead and register a new user.

While we are learning, it is good you update yours as well. gwerty the first 6 letters on the keyboard is one of the top five most used password all over the world, along with the actual word password and 123456. If you have any password as this, kindly find a time to change it.

Once we click on register the new user is saved in our database, let's see what is save in there.

{
    "_id" : ObjectId("652f3aa91bf840ad713ea45c"),
    "email" : "a@b.com",
    "_ct" : BinData(0, "YTiloOrEcSwyPYAP5NEfocpnHPV9bZ06.. 25 more bytes"),
    "_ac" : BinData(0, "YYQUUXEMeyo4tNUdvLr3bym0gEnSTeu5.. 22 more bytes"),
    "__v" : NumberInt(0)
}

The above is what is saved for the user unlike the former shown below when we have no encryption.

{
    "_id" : ObjectId("652e97ddd2046d4832d6e38d"),
    "email" : "1@2.com",
    "password" : "123",
    "__v" : NumberInt(0)
}

We can see a huge difference all along. this means if anyone hack in they wont be able to get the details imediately.

Let's see how decrypt work, let's go ahead and login. If we log the what is found we can see everything in plain text on the console. This means if somebody will hack in they can as well use your secret string to decrypt all the encrypted details. This means we have to save this somewhere hidden. The simplest way is what is called environmental variables.

### USING ENVIRONMENTAL VARIABLES

If we are commiting our codes probably in our github repository. This means all our codes including the ones in our app.js would be visible and crawlable by google and visible to anyone. This including our secret like our APIkey and other keys. if anyone have access to that then they can easily decrypt all the encrypted fields in our server.

There was a case of a dev who pushed AWS keys on Github then bad things happened. Same way too, an AWS API key leaked and an the server was used to a very heavy bill within a short time. This is a great warning to keep all your keys, API and any secret keys off the internet where people can search and steal it out.

So how do we do that. For our app to work we will need this secret key expecially when working in teams. How developers solve this conundrum is through using something called environment variables. An environment variables are basically a very very simple file that we're to keep certain sensitive varibles such as encryption keys and API keys.
Here we will learn how to do this using a popular npm package called dotenv.
Once installed, you can check the documentation on how to use it.
we need to use it with by putin this at the top of our code in our app.js
require("dotenv").config();
The next thing is to create the .env file in the root folder. It is important to note that .env is not an extension like you would see in .mp3 or .png. It is a special system file just like .git folder It is a hidden file. It is only seen when the hidden file is hown. Now that we have the file, the way to go is inside the file include NAME=VALUE of any secret. There shouln't be any space between the name and the value or quotation mark. The name should also all be CAPITALIZE. So let's go ahead and cut out our secret and format it to follow the requirement.

You dont need space, comma to seprate files or lines as in our codes. They are plain text files to render anytime.

We can always tap into our .env file anywhere in our code once we have require it at the beginning.

Now that we have access to our secret then we can fix our code.
The new problem we now have is that if we go ahead and commit the changes the .env file is also pushed which defeat the whole secret things. What we can do it include the .env file inside the .gitignore file
It is always a good practice to include a .gitignore file at the start of your project. You can grap a .gitignore file from github. Just searched for gitignore on github or in any search. github has a collection of .gitignore files that can be used as a template for different language, technology and tools. If we copy the template of the nodejs, the .env file is also included in the gitignore file.
Once the .gitignore file is included and properly setup, no one can see the secret keys even if you pushed your files to github. This keeps us and our encryption saved.
Note: git is a version control system and it keeps track of all the changes and save then along the line, this means if we checkout the previous version of our code, it will surely brings it out and in this previous version we have our secret key in plain text within our code which gives our secret key away to anyone. This means it is highly important to include the .env file and the gitignore file at the very start of your project. This keeps all our secrets in the .env and the .env files in our .gitignore thereby keeping our secrets away from the internet.
Next we will be dealing with hashing.

### LEVEL 3 - HASHING PASSWORDS
Before now we have talked about encryption where a password is matched with a key and a cipher method e.g AES is used to generate a ciphertext which makes it difficult for anybody to immediately guess what our user password is.

password + key ----Cipher Method---> CipherText

if we have the key and know the cipher method, we can as well change the direction to and the arrangement to encrypt our CipherText

password <-----Cipher Method---- key + CipherText
This means we can walk our way back if we have every part of the puzzle. Note, since our key is constant and our password we tried to encrypt and our CipherText, it is important note that the most greatest variable is the Cipher Method used. The Caeser Cipher can be compared very weak because once you know the shift key for the alphabet, anyone can easily crack the password. This can even be done without a key.

When you bad cipher method, bad things happens. You can read or checkout this story of the what traspired around the 1500 between the Mary Queen of scotland and Queen Elizabeth the first of England, the two combined locations now called the UK. How one later got beheaded due to use of weak encryption method in their tussle for power.
This is what you dont want happen to you or your users at any time. So weak encryption can end up putting user passwords at risk and your company might end up metaphorically decapitated such as the case of TalkTalk or Equifax where they get hacked and loose everything.
You can read more on encryption from this book called The Code Book by Simon Singh, it contain those stroies we mentioned and more.

The problem we have earlier or the flaw in our authentication method is that we need an encryption key to encrypt and decrypt our password. Now it is possible that if anyone tried enough to hack into your database then it's not that difficult for them to also be able to get your encryption key whereever you saved it.
How so we now solve this problem? This is where hashing comes into play. Whereas before we need an encryption key, hashing takes away the encryption key.
password ------Hash Function-----> Hash

Some might ask that if we dont have an encryption key how we do turn the password into a hash or versa. The idea is that when a user enter a password, we use something called a Hash function to turn that password to a hash and store that hash in our db. Now the problem is that Hash functions are mathematical equation designed to be almost impossible to go backwards. It is almost impossible to turn a hash into a password.
But how is this possible? How is it possible that you can turn a password into a hash very easily but makes it impossible to turn it back into a password.
Here is a question for you, what are the factors of 377 other than 1 and 377? Now its not a prime number because there are other two numbers that you can divide it by, so what are the numbers, this means you will start dividing it by different numbers say 2, 3, 4, etc without finding the factors. In this you're really consuming every bit of resources you have including your time which is your life. This is tedious already. But let say you found it which is 13 and 29 which are the only factors of 377. Consider the time spent to finding this factors and the time it will take to multiply 13 and 29. The time takes for the two are extremely large apart. This is a very simplified version of a Hash function. So going forward multiplying 13 by 29 is easy while going backward finding the factors of their product 377 is very time consuming. This is an example of how the hash function works, just add a bit of complexity and you will end up with a real hash function. Very fast to go forward but somewhat impossible to go backward. Impossible in this case means if it takes milliseconds to make a hash then it is taking like two years for the hacker to decrypt the passowrd. This means it will be pointless for any hacker to do this considering the level of available resources including his time. 
So on how website, when the user register, we ask them for a password, then we hash it and then store it in our database. Now when the user try to log in, we again hash the password to produce a hash and compare it with the hash we have saved, if the hashes matched then that login password is the same as the registration password. In this case their time we stored their password in plain text at all, neither any information about the password. The only person who know their passowrd is the user themselves.

Previously we saw in the use of the Enigma machine that as long as I know the settings that I can decode it by setting it to the same encryptio key. With this we retriever the original text. If we try hashing the same text and we try to decode it, we will get an error saying the hash method is not defined. This is the interesting security about the hash function.

Let's go ahead and implement it in our code.
First we need to install md5 package and then require it, then use it.
When the user input the password we use the hash function to turn it passoword into an irreversible hash.
password: md5(req.body.password)
Let's run our code
Using hashing the below is what our password has become
 {
    _id: ObjectId("65310eacf18cef7e95524ef8"),
    email: 'user@hash.com',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    __v: 0
  }
The email is still same because we only hash the password.

The important thing to remember is that if you run hashing on the same string it will always be the same thing. If our password is 12345 and we store the hash in our db, if we console log the hash of md5("123456") it will be exact same thing making it very dangerous.
e10adc3949ba59abbe56e057f20f883e 

This makes it subseptible to hacking using rainbow table and complex algorithms.

Now to log user in we have to hash the password they entered and compare that with the hash in our db. We successfully login because our hashes matched. Now when someone try to hack into our db, then they only have the hash which makes it a bit difficult.

At the same time, hashing has it own problem because many hackers have found a way to solve this puzzle. We will explore this the more.

### HACKING 101
Now that we have learnt about all this level of security and keeping users data, we are already at the levelof security many websites are.

Since most of us are quick to get a job, we can head over to a site called plaintextoffenders.com. This is a website that shows emails that come from various companies where the users are requested to reset their password and they are sending the user a plain text version of their password. At this point we know that for them to even be able to get the user's password in plain text it means they are doing some horible things with securing the passwords. Either it is encrypted and they are using somewhat of some encryption key or they are just storing the whole thing in plain text somewhere. SInce you already know more than the people who run those sites on this sites we visited then you can just email them and let them know that you are a web developer and you know about authentication and securing users data. And then that their website seems it needs some help, would they mind you helping them. You can try this out. If we are not keen on getting a job, you can just check them out and be sure to delete your account.
This is the reason why a lof of companies websites get hacked because they dont continue beyond this point. This is why it is good to learn about how websites are hacked.

#### HACKING PASSWORDS 101
Here we will talk about how a password might be hacked. On a side not, hackers are not supposed to be hated but pitied because they are passing through a lot of stress. Now as a website owner the word YOU'VE BEEN HACKED! will be the last thing you want to see on your website. Funny enough this has happened to many big companies like Adobe Creative Cloud in 2013, linkedIn in 2012 and there is a lot of password that get leaked and many people are still selling this data and using it to hack into the paypals of password reusers accounts and other similar payment portals.
If you dont learn anything in this lesson learn this, take some time and go to this website haveibeenpwned.com, put in your email and if any of your password shows up then change it immediately.

But why is it that all of this company are getting hacked and leaking their users password. Are they not encrypting and hashing their users passwords? Yes they do. Now consider you are an hacker and you have managed to get into the linkedIn user database. Though they didn't store their users passwords in text, you can't access their data right away. But looking at the data closely, you will see that like 3 of the hashes are completely identical. Now remenber that the same string will always give the same hash and that's a core part of the hash function that we rely on in order to validate our users as well. So that means an hacker would look at this table and realize that Sunday, Wilson and Susan all have the same password. What they can do is begin to construct what we called an hash table, they will take most of the commonly used passwords and use the same hash function to hash them and put this in a table. Now this are the most commonly used passwords, 123456, qwerty, password, 111111. Generate this hash in a table and compare there hash with that of the user. If it matches then you have discovered their password. So you search by their hash value, once matched then you have landed on a password and find that many of them has the same password qwerty. What if they dont use a common password, probably their date of birth or their pet name, let's see how we will make an hash table if we were an hacker. First we take the dictionary and make their hash, this is where dictionary attack comes from. That would only be about 150,000 tables, then all numbers from a telephone book about 5,000,000 then all combinations of characters up to 6 places 19,770,609,664 and then you add everything together and you have like 19.8 billion combination which admitedly sounds large. So how many time would it take my computer to alculate those hashes. Well, let's go shopping, so we go buy the latest GPU and graphic cards which are very suitable not only for bitcoin mining but also generating hashes. Now with the lates GPU's you can calculate about 20,000,000,000 MD% Hashes/Seconds. That means with all hash tables of 19.775,759,664 it will only take one of these GPUs 0.9 seconds which is nothing. It's not a lot of time to invest in order to hash so many people's password. Worst enough, a lot of hash tables have been build already from previous hacks such as the adobe one, or the linkedin one or talktalk or equifax. So we know what are the common passwords people use. Every year many companies like splash data will compile what are the most common passwords say the top 25. This is where those hash tables came from. To go a step further, there are pre built hash tables that people have already created for the top 10,000 passwords. And MD5 is very easy to calculate, this is why it is easy to find MD5 hash tables and you can use Google as a basic hash table. You can paste in the hash you found from the hacked database and you found the right password. If at this point you are extremely scared and you're wondering well what exactly can you do about this. COnsider that in our user table, there is an hash that is extremely hard to find and it didn't match up to any any of the hash tables we've built. What if we put that into google to search on a larger scale and see if it matches any of the hashes in the hash tables already generated. This is because this use Wilson when creating his password have many combination of Letters upercase, lowercase, numbers, symbols but most importantly a long password. When you think about hashing as a mathematical formula, this means that as the length of your password increases, the computation time that it takes to crack it increases exponentially. So it doesn't matter if a company or website you're involved with was cracked. As long as you have a strong password they wouldn't be able to work it out from an hash table. As an example there is a website called password checker, you put in your password and it'll tell you not only the strenght but how long it would take various machines to crack it. So let's say that I create a 6-character password composed of a random set of characters right? For this even for a standard desktop it will only take just 3 seconds to successfully complete a brute force attack to crack that password Now if we add 6 characters to this, now it will take like 31 years for a standard desktop PC to crack the password and even a fast GPU takes two years to crack that password. So even though, you're encouraged to add upper, lower case letters, numbers and all, it is still not the most important. So the most important thing about creating a strong password that is almost uncrackable is just to increase the length and number of characters. And also to prevent yourself from being a victim of a dictionary attack just make sure you dont use anything from a dictionary or any booking anywhere. SO in the next lesson we will address this vulnerability and learn how to combact hackers who might want to hack our website data using a dictionary attack or hash taable.

Bonus if you want to trick your friend as an hacker, you can checkout the website called hackertyper.net you just smash any random key and it puts something that looks like real codes on the interface.
Warning: Don't try this on an airplane or nay government building unless you want to actually get investigated.

### LEVEL 4 - SALTING AND HASHING PASSWORD WITH BCRYPT
Now that we know what the vulnerabilites were for our last level of security, it is time to step up and learn about a way that we can prevent these types of dictionary attacks or hash table cracks. In order to do that we need to know about salting. We alredy know what hashing is so what is salting? For a hash we take a password through a hash function and then store the hash. And as we saw earlier password that are generated by humans are extremely insecure. They tend to be very short or look up in the dictionary and get hacked. Now salting takes the hashing a little bit further, such that in addition to the password we randomly generate a little bit of random characters and it to the password before it is hashed. The random characters is combined with the user password and then pushed through the hash function. So the resulting is created from both the password and the random unique salt. This random characters added increases the number of characters and we make our user database a lot more secure. Consider the previous problem we saw in the last lesson about hacking where 3 users have the same hash, now if we added a little bit of salting this randomly generated characters will ultimately make their password hash distinctly different.
The salt is different each time, it is not what the user has to remember it is stored in the database with the hash. So for the login once the user supplied the password the salt is added back hashed and compared to the stored hash. Note we dont store the user password but the salt and the hash.
Now consider our previous statistics, You can imagine about 20 billion MD5 hass table in a seconds. Even if we added a salt and we made it harder to generate a hash table, with some of the latest GPU's you can still generate some hash table really quickly. Where do we go to handle this. Well we can still use something other than MD5. There is another hashing algorithms that is the standard algorithm. It is called bcrypt. It is regarded as standard because it is slow. It times at 17,000 bcrypt hashes/second with latest GPUs. This is one of the industry standard hashing algorithms that developers use to keep users passwords safe because while you can calculate 20 billion MD5 hashes in a second for bcrypt even the best GPUs are timed at 17,000 bcrypt hashes per seconds which makes it very harder for a hacker to generate its hash table. For a salted hash table, instead of taking something like 3 seconds if it was hashed with MD5, if it was bcrypt it will take like 8 months which is not worth it. They would probably go and search out a company that has less security enabled. And to make our passwords even more secure when bcrypt it has a concept called salt rounds. How many rounds you're going to salt your password with. The more rounds you do the more stronger your salting and the more secure your password.

So what a re salt rounds
Let's say your user password is qwerty and you generated a ransom set of characters as the salt. Now we add it to the password and pass through the hash function and we have our hash. This is one round of salting. Let's say we want two rounds of salting, then we will take the hash that was generated in round 1 and we add the same salt from before. And now we run it through bcrypt the hash function again and we end up with a different hash. And the number of times you do this is the number of salt rounds.

The reason wy you do this is genious because computers get faster over time., Remember according to moore's law which says that every the number of transistors in a computer chip almost doubles and the cost of that faster computer halves. So every year you get faster computers with less money. This is where salt rounds comes in. When you're hashing your passwords using bcrypt, you can set the number of rounds to salt your password. That means maybe in 2019 you salted 10 rounds but in 2023 you can increase it to 20. Now for each increase the number of time taken to hash your password doubles. This means you dont have to change anything or your code other than a single number to keep up with times.
So we store the user email, the salt and then the hashing at the end of our the salting rounds. So when it comes to checking their password when they login, we take the password they entered combine with it with the salt and run it through the ssame number of salting rounds and then compare that with the one in the database to see if they match and if they have entered the right password.

Let's apply this, implement bcrypt and salting rounds into our website's authentication.
The package we will be using is bcrypt and it's available on npm. bcrypt is sentsitive of the node version you are working with. Here I have v18.17.1
bcrypt is compatible with only node stable version. The documentation shows the supported node versions. To change your version you can always use nvm. Go to their github repository and follow the installation guide. Your version should be back to the right one.

Now in case you face any issues while installing the package, How do you fix this? On any page of any package, there is always a link to the code repo and when the github page of the package, you can explore the issues section and see how others are able to fix the same issues you are having.
if you would be installing a lower version you can use 
npm i bcrypt@3.0.2

You might not have a warning or error at all, but if you do, you can know how to go about it.

So let's swap md5 with bcrypt
require bcrypt and setting a specific number of saltRounds.

Look at the documentation to see your best use case.

SInce we remove the md5 package then comment put or remove any code using the package.

We use the auto generate salt code of bcrypt.
If we run our code and check the hash saved in our DB, we will findout that it is mostly very long. If you copy this and paste it in google or any hash or rainbow table, it will bring out no result. This is very good.
What if the user wants to login, we will be hashing the password they input with bcrypt then compare this with what we have in our DB. Check the documentation to see how to do this.
Once all is done right, we are able to log in with our user details. Now we have a good level of security but we can still level up more.


### LEVEL 5 - COOKIES AND SESSIONS
Other than the yummy cookies you have in mind, the cookies we are talking about here has everything to do with web development.
Remember when you go shopping online say at amazon, you searched for an item and then you add it to the basket and then, you completely go to another url from that same browser tab. This is a real crime against any ecommerce website because you are just a click away to paying for the product. What will amazon do, immediately you added that item to cart, amazon has created a cookie and stored that cookie on your browser. How do we find this cookie? In your chrome browser, go to settings, then search for cookies, You will see it under content settings, if you click on the cookies. You will see there's this option to see all cookies and site data. And now you will see that Amazon do not just add one cookie, just by that single act of adding a Nitendo switch to an Amazon basket, Amazon has told our browser to save a lot of information about ourselves. Now if you click on the amazon.co.uk, you can see there's the session-token, the session-id, this cookies does not necessarily contains any information saying this user want to buy a nitendo switch but what they do contain is an ID number. And this ID number will be used to fetch all of those things that you added to your cart during this browsing session on Amazon. This is why even if you close down your browser and later you decided to load that or any Amazon page again it loads back everything you have added to your basket. SO they haven't forgotten this. However, if go into those cookies for amazon and you delete those cookies and site data and we remove all of this, we have forced it to forget whatever we have done before. Now on the internet, cookies are widely used to save thsese browsing sessions and it goes beyond just saving your last session on your browser. Now when Amazon adds those cookies to my browser, it also means that when I go and visit another website say Facebook, faebook will also know who I am and what I tried to buy on Amazon and even remind me of this. It is creepy but this how ad retargeting works. Say a user comes to your website and try to buy something and then they decided to abadon it, then you save this data. It means when they go to any website or come back to your website you remind them about that thing they wanted to buy. And this is all done through cookies and sessions. So if we review this from a web development point of view, it means that say on day 1 when I go into chrome i typed in Amazon.com, my browser will make a get request to Amazon server requesting for their home page, Amazon server will then respond to that request and send over the HTML, CSS and Javascript files that are for my browser to render the Amazon website. And then let's say that we decided to add a computer to our cart, that is equivalent to making a post request to Amazon server saying that I would like to buy a computer and at this moment in time that Amazon server will create a cookie that says "This user wanted to buy a computer." And when it responds to the request that cookies get sent along and the browser is requested to save it. So that means that if I now get distracted and I decide to go onto Facebook or whatever it may be, if I come back tomorrow that cookie is still saved on my browser. So the next time that I make a get request to Amazon server, that cookies get sent along with my get to allow the server to be able to identify who I am and see if I had any previous sessions on Amazon. And it is the equivalent of cracking open that fortune cookie revealing what are the previous things I had wanted to buy and in this case it was a computer. And they could then respond with the HTML, CSS, Javascript and also render my cart so that the computer is already added in the cart. So there are lot of types of cookies but the one we will be looking at are the ones that are used to establish and maintain a session.
A session is a period of time when a browser interacts with a server. Usually your session starts when you log into a website. This is when your cookie get created and inside this fortune cookie you have some information that says this user is looged in and has been successfully aunthenticated. This means as you continue to browse the website, you wouldn't be asked to log in again why you tried to access a page that requires authentication because they can always check against that active cookie that you have on your browser and it maintains your authentication for this browsing session until the point when you logged out which is when this session ends and the cookie that's related to the session get destroyed.

We will be implement cookies and session on our website using passport. Now if you are good on Node.js and authentication it's impossible to not mention passport and it's something that's very very flexible and allows you to authenticate your users with either a local strategy like what we're doing right now which is username and password or use a whole bunch of other services such as Google, Facebook, LinkedIn, Twitter, etc. And it makes it a lot easy for you to plug in these different ways of authentication into your website.

So let's get started learning about Passport and learning about how we can implement cookies and sessions. 


### USING PASSPORT.JS TO ADD COOKIES AND SESSIONS
Let's get started to put into practice what we have just learnt. We need to install the following packages: npm i passport passport-local passport-local-mongoose express-session
Note: express-session is not express-sessions

People are allowed to come up with the names of their packages without any restrictions. That's why it's easy to mistakenly get a package installation wrong. So beware. But if you are installing package, ensure you get the right one, you can do this by typing in the name of the package, from the ratings on the package you can know the popularity score, quality score and also maintenance score. This can help you pin point the right packages even admist the plenty. 
Once installed. We remove all bcrypt and hashing and empty out all the code withing the app.post login and the reister route.

We will authentication using the packages that we just installed. The first package we have to configure is express session. It is important to follow the steps in order and where you put the codes. It is really important and easy to mess up.

Let require express session and the others except for passport-local because it just one of the dependencies that would be needed by passport-local-mongoose so we dont need to require it.
The next thing to do is to actually set up our session and anytime we refer to it we will use the word session. We've install, require it, then the next is to use it. You should pay attention to following the documentation. We will place the use code just above the mongoose connection and just below all the other app.uses. It's important you do it that way. The secret is what we keep in our environmental variable. Once we have initialize our session, the next thing to do is to use passport. The first thing is to initialize it. The initialize methid come bundled with passport. This set up passport so we can use it for authentication. The next thing is to tell our app to use passport to also set up our session. You can check out passport documentation under the configure section. After we have set up session and passport, the last thing to do is to set up our last package passport-local-mongoose. We've installed it and in order to use it we need to add it to mongoose schema as a plugin. Remember the schema needs to be mongoose schema and not just an ordinary javascript object. SO we tap into our userSchema and add a plugin to it and this is passportLocalMongoose. This is what we will use to hash and salt our passwords and to save our users in our MonogDB database. It's going to do some heavy lifting for us. So let's go ahead and use it. Now to configure the very last thing which is passport, we will need to follow exactly what the documentation tell us to do which is to create a strategy which is going to be the local strategy to authenticate users using their username and password and also to serialise and deserialise our user. Now the serialise and deserialise is only neccessary when we're using sessions. What it does is that when we tell it to serialize our user it basically creates that fortune cookie and stuffs the message namely our users identifications into the cookie. And then when we deserialise it basically allows passport to crumble the cookie and discover who the user is and all of their identification. If we are using passport alone we're going to be writing a lot of code but passport-mongoose does that for us. All we need to do is just add a three lines of code right below where we create our new mongoose module and now we're ready to run our app. Let's fo over and run our app with nodemon. Probably you come accross a deprecation warning in the console, copy it and paste it into google or any AI interface. Most of the time, people would have faced the issue, so it would have been raise as an issue on the package repo. Once you check it our, someone would have provided a solution. So when using any third party library it is important that all sorts of things happpen but just remember you are not alone because other people have faced the issue and someone would have solved it. If you are having any issues always review where in the code was it and if you're not having any typo.
Quick one there, dont forget the order of setup here. It should follow in order as it should. If you dont have session, you can't serialise or deserialise, also if there is no passport initialization, then there can't be a strategy. This is why the order is important.
The next thing now is set up the register and the login post route and we're going to be using passport local mongoose package to do this, We can see the example in the documentation.
The most important thing is to clearly follow the documentation and in there, there is always a bad way and difficult way or a good and easy way. Just pay attention.
We use passport-local-mongoose to store our user, if error, we logged it then no error, we use passport to authenticate the user then redirect them to the /secret route. This is why we should have our secret route setup. In our secret page we will check if the user is authenticated and render the secrets page, and if not redirect them to the login page. This will force them to login first before they can view the page. Let's get ahead and register a new user. If the user gets to the secret page then everything was successful, if not the err is displayed on the console. We can check our new user on Studio 3T, we can see a new document containing the email, with the salt and the hash. This is what passport mongoose local does.

{
    "_id" : ObjectId("653460815f3b6385fa731036"),
    "username" : "user@passportlocalmongoose.com",
    "salt" : "1844099f6b0c496a6e5e8aa0016c913c69b809416e5029fa4866c083cc8ac844",
    "hash" : "40254ea5b73285b1dce35d698883441489d57b83ee9a2679b0460d080f662d1d607f67eef131aa7b7cc3b18d477e71c25189be22f63b1766458e48d23f73e0cf6f062f37bb9dffdd9f7c84940d39ebd4b5d0f9341d7c182b0d04ba74e81497b2728e54c0e8ff5f0430d70f7cceb960f6e0594445729c02ec46cd9cbc25cd196dbc58b2701ed6430cb023058250d823b2d273e5e9b413f49b9d0192212c183687c137f469aaa7ec3d455b2a24a6efea619c797d268219a9e24986b3e73337c9383f084107de7b2a0e9a5e94a6625b466c3852610df4ef9b60cb937f85bd36a69b297f0195f3d8f8bdaa5f99d48f93ae87894a0bf5eb51bb8747e55fa5494568852071aafbab63610eea7832985f00fdd6529085b0a7fc3f9b8d14e2e839fa7d838d2b35c4b5c2a406c61c117abfbc9ae15b6c842a95538a7ac2a3bda9e957569f71654142afad818ece95b54a71ce83a74518a02b2b5eb6ee52a3821c501b867dc51c9c19f4fdfa7350e572b72bfc9b783b55d4d0bde0939ef19a9061b0f422025eaaa66bdcd995809ceb70bbec7518628fbca3c13307d844f4903a6c3f8614767fd4e4ba497198ba28835a5e8379fa14815a7ca3e5076dfbc34f8f7c21b4fe1948d5b7b2b020510dda518224a8d9c87302c7d17ce09aa68f78366cc1af57dec797355343c5e7e16d160de782292e20b1ffebd4e91f315912e2b9bf180a4383ee",
    "__v" : NumberInt(0)
}

You can see this is a step up level security. Passport mongoose local did this automatically. In addition, in case the user get distracted to another page, once they load the secrets page then the secrets page loads immediately without then needing to login to access the secrets page because they are already authenticated. Thanks to the cookies that got the session ID saved. And we can even see it if we go into our chrome settings, search for cookies, select Third party cookies, then see all data and permissions. Then scroll down to localhost and you can see the saved cookie. It is created by the session and is set to expire once the browser is closed. If the broser is closed and the same user tried to access the secrets page again, they are redirected to the login page instead because they are no longer authenticated, same way we specified in our server.
So let's handle our login route. In our login route, we grab the username and password through the req.body. Then since we have create our user, then we can use passport to log in this user and authenticate them. We will use the passport login method. You can check this on passport documentation page. So either they are registered or login, once they are authenticated, we create ask passport to create some cookies that holds some information about the user and this tells our server about the user, namely that they are authorized to view any of the pages that require authentication. If we tried to login then it went sucessful.
Lastly let's add our logout route. This is where we deauthenticate our user. we can see the how to do this in the documentation. Once they are logged out we then redirect them to the home page or the root route. If they tried to see the secret page then they are forced to log in. And if they are logged in and authenticated, probably they tried to go to any other site and they later come back to view the secret page then it is rendered because they are still authenticated according to the cookie created.

Note, whenever we save our app, and using nodemon, the server is restarted which delete all the cookies. This means no session is saved. If the user tried to access the secret page, they are redirected to the login page because the cookies holding the session info has been deleted once the server restarted. The content of the session are meaningful to the server.
The next level of our security is OAuth. That is Open Authorisation. 


### LEVEL 6 - OAuth 2.0 & HOW TO IMPLEMENT SIGN IN WITH GOOGLE

FIRST OF ALL IT IS GREATLY EXCITING TO BE LEARNING THE LIKES OF THE ALMOST THE LAST LEVEL OF AUTHorisation SO CONGRATULATIONS.

Here we are talking about third Party OAuth.

#### WHAT IS THIRD PARTY OAUTH - Open Authorisation
It is simply a open standard for token authorisation. What does this means? You have heard of facebook right? Let's say we are building a new social network that is going to be the new facebook, say we called it bracebook. And bracebook is an awesome social media for people who have braces. Now when you are a new user who's signing up for bracebook you probably won't have any friends in the beginning and nobody likes a social network where you have no social connections and nobody wants to feel like they have no friends. So what can we as the developer of bracebook to make users joining of our social network a little bit easier. 

Well we can ask the user for permission to access their Facebook account and see which friends they have on facebook and are already users of bracebook. So now once a user sign up they'll already see that three of their friends are already on bracebook and ready to get started in a new life of socializing with their be braced friends.
How will this work exactly? Well on our login page we can ask the user to sign in either manually where they don't get the benefits of instantly connecting with their friends who have braces or we can get them to login with Facebook. And in this case what will happen is we would make a GET request to Facebook asking then for this user's friends on facebook and facebook would return with a POST request with that list of that users and emails. So this migth be a really simplified version of that. Name & Email. This is astraight up table of this particular user's friends on Facebook and all of their emails. This gets passed over to our server where we can comapre it with against our database of users and and see if we have enough of users having any matching email addresses. There can be many or few or none. Let's say we have three match we can automatically add them as a friend onto bracebook. It is also a similar scenenario if you are adding friends on linkedIn, if you think it is too stressful to type many details, you have the option of using your Gmail, LinkedIn will search through your Gmail contacts, see if they are on linkedIn and then add those found as connection. By using OAuth we are able to acess pieces of information on these third party websites such as their friends email or contacts on Gmail. In our case we're talking about authentiatio and leveling up the security of our authentication. Another really big benefits involves delegating the task of managing passwords securely to these companies like facebook and google. Though each day a new company get hacked, this company are kinds of low tech companies, companies who are not facebook, google, amazon who have great engineers and are able to implement all of these levels of security for the authentication on their website. And they have thought about hashing and salting passwords or other data they're storing. But there's more. There are things such as not only salting the passwords but also peppering the passwords. Some comapanies also encrypt the entire database containing the hashed passwords and have a wide array of complex mathematical solutions to keep their user passwords under lock and key. Now as a web developer, we could implement all of those things that I just spoke about and address all the of the edge cases but it will take us a lot of time and a lot of development hours. So why not simply delegate this task to a large comapny like facebook and google, so anytime we log in our user we simply ask them to login on facebook and facebook will then authenticate them using the own authentication method. Once that is done, facebook will sends us back a message saying "This user is authenticatd. They are real facebook user, they have their real username and password, so go ahead and authenticate them as well." And that will make our life a lot easier and lot less liability. This is the way you see a lot of website having a lot of third party login; facebook, twitter, google, github. But in other for us to be able to do all this we need to learn about OAuth that is the glue that binds all of this together and makes it actually tick.
Now what exactly is special about OAuth, because their are a lot other Open standards that does something similar to this? But OAuth is quite special in three ways.
1. Granular Access Levels
This means that when your user logs in with Facebook, you can request specific things from their facebook account. You can say for your website you only need their profile and email address. But say you were tindal and you wanted to know who their friends are so that you can rightly match them up with friends then you might want to know also their list of friends.
So this is what granularity means. The app developer ca determine what kind of data do they need from the user's facebook account and request those accordingly.
2. Read/Read + Write Access
 It allow for read only or read and write access. In the case of facebook, you can ask them to just retrieve their information say name, email, friends or ask for write acess. Say if you want to post on the person's account then you need to ask for read and write acess.
 3. Revoke Access
 This means the organisation used to authenticate should give access for the user to go into their account and revoke acces. In the case of facebook, it means the user should be able to go into their facebook account and revoke the access they granted to your website.

#### HOW IT WORKS IN REALITY
 1. SET UP YOUR APP
 The first thing to do is to tell this platfrom about your application because they dont know you. So we have to setup our app in their developer console and in return we get what's called an app id or a client Id. We here are the client which will then use the ID to auhtenticate our user. Once that is set up the nesxt step is when the user try to log on to your app.
 2. Redirect to Authenticate
 So we when the user hit up our app bracebook and they want to authenticate, we give them an option to log in with facebook. 
 
 3. User Logs In
 When they choose facebook we take them to the actual facebook account so that they are seein a familiar interface, a trusworthy interface and they'll log int to facebook using their facebook credential. And with that OAuth what we'll ask the user is what is their login credential for facebook. OAuth makes this a lot easier because it gets them to log in on the website that they actually trust and they've been using.
4. User Grants Permissions
Here they review the permissions that our website is asking for. So say we want their profile and email and we ask for permission to get this information, they will review it and grant this permission.
5. Receive Authourisation code
Now they've grant this permission and they are authorised, our site will receive an authorization code and this allows us to check to make sure that the user has actually successfully signed on to facebook. They had the right username and password. So we are now able to authenticate them and log them on to our website. If we want to go a step further,
6. Exchange AuthCode for Access Token
We can also exchange our authentication code for an access token and we receive token we will save it in our db. This is the token that we can use if we want to request for pieces of information subsequently. This token is vald for a lot longer than the authentication token.
So the auth is like a ticked, A ticket that you are going to use once to enter the cinema. But the access token is kind of more like a year pass and it comes with benefits like backstage access where you get to request pieces of data from facebook including their friend list or that unsername or their password or anything that gave you permission to access. So the OAuth code is what we need to authenticate user that they successfully managed to log in through through facebook and the access toke is what we'll use to access pieces of information that are stored on that are stored on these third parties website for example their email or their friends list.

Let's go ahead and actually put it into practice and in our case we will be implementing it with google OAuth and passport. We will be adding log in with google to our website.
First is to go to passportjs.org to find the strategy that we need. And if we check well, we can see passport-google-oauth20. It is important to choose the right one and the latest implementation. So we've gotten our strategy. NPM package passport-google-oauth20. In other to use it we need to install it, The next thing os to create a project on google console.

click on create a new project,
once created clikc on it
click on credentials
then setup oauth consent screen
input the app name, the developer mail and other compulsory details.
Then select the data scope you want. You might need to add certain google API libraries and google has a lot that might be useful for some specific purposes.
You can ensure to add your custom domain name, privacy policy page and other details later.
Clicl save and continue to create credential. The one we will choose is OAuth client ID. At the en of this setup we should have our client ID and client secret. Then we save those in our .env file in our project.
Now we can continue setting up our project.

In our code once we click on login with google, the google auth reguest for the user email to use and use that to authenticate the user. The secret page is then displayed. Note since we are using the findOrCreate a new user is always created anytime this user sign in.

The next thing is to save their their googleId so the findOrCreate will find this user using their googleId and authenticate them without creating a new document in our DB.

In doing this, in our DB we only have the user unique googleID and nothing else, this makes it saver for us and more secure. We have nothing to bother about and this is a great idea. Google do all the work to keep the user safe. 

Also note that since we already save the session. The user can aesily get authorized even when they log out and log in again.

#### LETTING USERS SUBMIT SECRETS
So far we have enabled all forms of security an we are left with adding the functionalities that is needed i.e letting user add secrets.
We need to add a route for the /submit

## REACT

JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
its a frontend framework. Faster and easy to build user interfaces. Very useful to build repetitive user interfaces. It helps to break doen a very complex UI into components. The whole app can be break down into tree with different branches to the last item. It also break the app down into a beautiful strucutre. With Bootstrap we use a long code to create just a navbar this makes it hard to know wht's going on but with react we have different component. Like we are creating our own custom HTML elements defining the styling and defining the functionality of each of them. Then we can slot them in thereby keeping the code for our web app incredibly clean and reusable and modular. This are all greate things for keeping it clean and reusable programming.
Our app is now a burger where we can make all the pieces separatelly and chnage or use any as we want. You can customize the component depending on what you need.
This is achieved partly through mixing of different types of files. Before we had always keep our HTML, CSS and Javascript separately but what react does is actually combining small amount of this files into a single component so each component have it's pwn styling and its own functionality that it controls and you can create several of these components so each perform different functions and have different appearance.
For example, this is what enables the twitter website to be able to load some update without the whole website refreshing. Updates or posts or comments can update itself without affecting the whole website. This is one of the greatest thing about the React framework.

Now the really awesome thing that it does is it's ability to re-render these changes really efficiently and does this by comapring this changes. This is what we might called diffing. So whenever a change happens, say a new piece of data comes in or the user does something, then it's going to compare the new version of the new DOM tree to be render with the already showing one and it will do this kind of spot-the-difference thing where it spots that oh, the only thing that's changed is that this input has gone from empty to checked. So this is the only component that I'm going to re-render. And this obviously is more efficient and will make your web app seem more interactive and much faster.
Though React is not the only frontend framework out there. So why React? In today's calender, google, stackoverflow, React is one of the most popular web framework and it is used at many company like Airbnb, Uber, facebook, Netflix, Instagram, medium, pinterest, Twitter, reddit and others. There are many frontend and full stack role with React as the requirement.
So let's go ahead, build and explore this important framework.
In this module we would be making few projects like registration screen, real time clock app, dictionary for emoji's and a beautiful To-Do list. Also a big project called keeper which is clone of google keep. It function such that whenever you have any idea, you can just make a note and add it to your won keeper app. So we will be using a lot of tools apart from REACT such as JSX, props, Components, Containers, how to work with virtual DOM, state management and declarative programming including the use of React hooks such as useState. And the other big thing teaching how to use ES6 or ES2015 concepts. We will go further into javascript using destructuring, spread operator, map and filter, import export. This is another packed module in which at the end you will be very versed in REACT and ready to build some beautiful front end using this framework. Let's write some codes.

We can start with codesandbox.io

We will use code sandbox  to introduce new skill and practice. We will do a lot of skill practice to learn react. Once enough skill then the keeper app, and application of the skills.
We will then setup our local environment and working on the local machine.

### JSX
We will be using codesandbox.io and the giving link. Once here we will not be touching the html file but the javascript file using react.
Our html need to include a div with id root and a link to our js file.
For the dependencies, before we usually install through through the terminal but here we will just search and use. The one very much needed are the react and reactdom. The next is to require it.

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root')) // what to show, where to show it and a call back function

This above is already a react code especially line 3. We've used the reac-dom render method to display an h1 inside the root div. The above display hello world on the browser.
The remarkable thing here is that we've been able to write a plain HTML inside our javascript file. This without any angle brackets or the ejs template. This is jsx, react works by creating this jsx file where we have html withing a javascript file. Behind the scenes what happen is that the html is pick up by the compiler and get converted or compiled down to javascript. and the compiler comes from including the react module at the top. If we comment it out then nothing works. Now if we go inside the react, it has something called Babel. Babeljs.io
Babel is a javascript compiler, its able to take next generation javascript like es6, 7, 8 to a script that every browser can understand. This includes conpiling JSX down to plain old Javascript. So on babel interface we can write crazy next gen javascript and in the split interface it will be converted to old plain javascript even the old Internet Explorer.

So instead of the code below

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);

The above code gives the same output as the line 3 of the react code above. The one of JSX does the work with 1 line of code what is done with 3 lines of code by plain javascript.

But Babel goes further than just interpreting, it allows us to use ES6 OR ES 2015. and we can use some new construct that are available through this new version of Js and it's able to compile it down into bog standard normal Js. So the map function, arrow function are converted down to standard Js. This means when writing our code with the React module in place, we can write ES6 code without worrying about if our grandma who has Internet Explorer 5 will actually be able to see our hard work rendered, Babel will tax care of all that for us. This means we will be learning a lot more of ES6 javascript because we know that it wont break anything. Ando one of the latest features to come to Js is the import keyword. So instead of requiring and setting react to a variable, the new way is to import React from a module or a location. and we can do the same thing for react-dom.

import React from 'react';
import ReactDOM from 'react-dom';

 With this we are able to modularize our code. You can take some time to learn more about this ES6 feature.
Now that we have render the h1. what if we try to render another HTML element, the code will crash. This is because the method only take one HTML element as an argument. But we know their is a way to combine two HTML elements. This can be done by including it within a div element.
ReactDOM.render(<div>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
  </div>, document.getElementById('root'));
SO it is as wasy as this to start using React.

### JAVASCRIPT EXPRESSION IN JSX & ES6 TEMPLATE LITERALS
We've already seen that we are able to embed html element  within javascript through JSX. But to learn more we need to go a little further. 

say we have a variable that we want to insert.

say we have a
const name = 'Oluwaseyi';
if we insert this directly into the html element then it will just be interpreted as a string within the html. So what do we do. Note we are already inside within a Js file and then use the react-dom to inject html. Now if we want to embed a javascript within the html all we need to do is put the variable or the Javascript within a set of curly braces.

ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

With this JSX knows we are using a variable call name and not just an html content. We can input another variable
import React from "react";
import ReactDOM from "react-dom";

const name = "Oluwaseyi";
const luckyNumber = 5;

ReactDOM.render(<div>
  <h1>Hello {name}!</h1>
  <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root"));

We can also go further within a set of curly braces and include some maths, or generate a random number

    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>

We can add any Js expression within the HTML element but we can we can't write javascript statements. Like

if (name === 'Oluwaseyi'){
  return 5;
} else if (name === 'Blue') {
  return luckyNumber;
}

This is a statement and it would not work.

The big difference between an expression and a statement is that an expression will be evaluated to a value, it will end equaling something after the code has been executed. While a statement instead is actually asking the computer to do some work to evaluate the statement and work out something.

Say we want the h1 to say first name and last name.

const lastName = "Idowu";
const luckyNumber = 5;

ReactDOM.render(
  <div>
    <h1>Hello {firstName} {lastName}!</h1>

But note there are plenty of ways to achieve this using javascript. We can all the following which are all valid

<h1>Hello {firstName + " " + lastName}</h1>

So we are not limited to a single curly braces.

So in ES6 we have something called template literals or string interpolation in other language. So basically injecting string into a piece of Js. The way we do this is to add a set of backticks and in-between the backticks we can add a dollar sign and another set of curly braces containing our literals.

<h1>Hello {`${firstName} ${lastName}`}!</h1>

In the above line of code, we have the content withing the backticks interpreted as a string using the ES6 template literals, then we got that string inserted in as javascript within the curly braces as JSX and then it's being inserted as a string into our h1 and then that's being inserted as Javascript code into a javascript file. Seems this is getting too deep and might be confusing but it's good to know the different options available then you go with the easiest one. So we will be practicing more JSX adding HTML to javascript and adding javascript to HTML and getting grips with JSX. So try and practice with the different methods and go ahead to learn more.

Can you work on the below;

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

Note: functions are not valid as a react app.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Oluwaseyi";
const lName = "Idowu";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created By {fName} {lName}
    </p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);

### JSX ATTRIBUTES & STYLING REACT ELEMENTS
Our website is ugly because we dont have a styling yet. SO we will be looking at styling with while working with JSX.
Note if we just write some styles and use the class in our JSX it migth works but we have a warning in our Chrome developer tool, we have have a warning that says Invalid DOM property 'calss'. Did you mean 'className'?. This is because the the JSX file is compiled down to Js file. and in Js the properties to access all the class that exist is Element.className. Now react does a lot behind but yet it is not the best, so what we will do is chnage our class to className.

It is important to note that
does not work
.heading {
  color: red;
}

but this work
.heading {
  color: #cc0a0a;
}

then our javascript source link in our HTML file should be change to text/JSX instead of text/javascript.

Also in HTML global attributes we dont use camelCase but because this is compiled to Js then we stick with Js convention - camelCase. Even for HTML global attributes.

contenteditable is an HTML global attribute but when we want to use it in JSX HTML tag we write it in camelCase - contentEditable and if this is set to true we can edit the content of the element on the browser. Also spellcheck HTML attribute will be spellCheck and can be set to true or false to make the browser do a spell check or not.
In all the most attribute we will use more is the className.
Also, because we were writing JSX does not invalidate what we already know in HTML or CSS, No. We can still write our pure CSS styling. We can target any HTML element and style it as we want or use any class or id as the case may be.
Let's add three image and style it with CSS. In the same way we can inject javascript within our in our JSX
we can have. Let's pick an image from https://picsum.photos/

const img = 'https://picsum.photos/id/237/200/300'; // specific image

const img = 'https://picsum.photos/200'; // gives random image anytime it loads.

Then in our img element we can set the src to the image constant.

<img src={img}></img>

This works because it's JSX. Remember we can't do this in pure HTML. And another thing to note is that HTML can be forgiven in misplacing some closing tag but JSX is not. Any mistake leads to an error.
So we have seen how to use HTML attributes in JSX making them camel case.

<img src={img + "?grayscale"} alt=""></img>
The above is possible because we are in JSX.

You can take time to play with the element and styling to get familiar with it.

### INLINE STYLING FOR REACT ELEMENT
In the last section we see how we can style through the CSS file. So can we style our react components using the inline styling? We already know if it was HTML it is totally possible to add styling inline but this is JSX.
When we apply an inline styling we get an error. This is totally because this is JSX and not HTML. We will need to supply the styling in form of javascript object i.e within curly braces and a key value pair. The attribute as a key and the value as string and each of this key value pair are separated by a comma and not a semi colon as we used to have it in the style sheets.

e.g <p style={{color: 'blue'}}>Cool random image refresh to change it</p>

You might be wondering why do we ever need an inline styling when even the documentation has suggested we use className from our CSS stylesheet to apply styling, this is useful in other to trigger a style change on the run. You might want to make a quick change due to some user inputs or activities. This is where inline styling comes in.
We can also go ahead and put our style object in a constant then add more styles to it.

const styles = {color: 'blue',
backgroundColor: 'pink',
width: '50%'
}

then in our HTML element
<p style={styles}>Cool random image refresh to change it</p>

Notice in the above, normally in CSS we use kabab-case i.e lowercase lowewercase seperated by a dash but to use this properties correctly in JSX we have to change that to camelCase. This means background-color now becomes backgroundColor.
Also our values becomes a string. So instead of writing just 20px as in CSS, it becomes '20px'. The spaces are preserved but it is included within a quotation mark.
This is interesting because once we apply the style, if we want anything changed we can just do it within the avriable and it get's loaded immediately. This is why we might need inline styling.
Take some time to practice with the inline styling using acceptable JSX format. So take some time to play with everything we have mentioned or go through.

### REACT STYLING PRACTICE
Let applied what we have learnt, solve the question below. Solve it before looking at the solution

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.



<!-- import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const dayTime = currentDate.getHours();
let greetings = "";
let appliedCol = "";

if (dayTime >= 0 && dayTime <= 11) {
  greetings = "Morning";
  appliedCol = "red";
} else if (dayTime >= 12 && dayTime <= 17) {
  greetings = "Afternoon";
  appliedCol = "green";
} else {
  greetings = "Evening";
  appliedCol = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: `${appliedCol}` }}>
    Good {greetings}
  </h1>,
  document.getElementById("root")
); -->

// SOLUTION 2
<!-- 
import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
); -->

### REACT COMPONENTS
Up till now we have been prasing the use of react component but never use anyone. Here we will learn all about react component.

Remember in our last styling challenge we have a long code which we have to scroll to see through and reseach has it that the more you have to scroll and the longer a single file is, the harder it is to understand the code that's in it. Components helps us to break the code into small components and we also get the benefit of reusing each of these components when we need the same functionality, which happens a lot on the web.

Say we have the code below, let's see how we will break it into react components.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

The first thing is to create a heading components.
 Though it's a simple h1 but in reality it get's very long and lots of contents.

 What to do is to create a function, the function would have a name and in react convention, we use the Pascal case that is to have the first word capitalize. In this case our function name will be
 Heading

 function Heading(){
  return <h1>My Favourite Foods</h1>
 }

 All that this function will do is to return an h1 element.

Now we can use this custom heading component inside my react code as if it was an HTML element.

So how code will now look as below.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <Heading></Heading>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

The pascal naming convention of react components helps react to differentiate between the custom components that we're building versus the HTML elements we are trying to get hold of that exist in the DOM.
Now that we have created our Heading component and insert it into our website as an HTML element, it shows up exactly in the same position. Behind the scenes is once it gets to the Heading line, it looks for the custom component called heading find it, trigger the function and output the h1. Also for a convention, if the component do not have any child elements, then we can make it a self closing tag.
instead of <Heading></Heading> we have <Heading />
Note the single space.
A good place to check this practices is the Airbnb React/JSX Style Guide: https://github.com/airbnb/javascript/tree/master/react
Though the browser doesn't care but it is good to have a good practice in writing a clean code other developers can look through easily.

Though we have make an heading component but it is still sitting in our .js file. If we have many of them, our .js file we surely get cluttered. So we will use an ES6 feature  where we put it in a different file and then import it just like we do for react and reactDOM but here we will be doing the importing and exporting ourselves.
So we will create a new file with the name of our component with .jsx extension. Like Heading.jsx. So this is how we will handle all our component we will be using moving forward.
Again by convection, we will leave the index.js as a plain JavaScript file even when we wre using some react and jsx in it. Then we will have all our components separated into individual files with the JSX extension. So let's move our heading into the Heading.jsx file. Now to use the file we will import React from 'react'. This is what we will do for all .jsx file we will create.

import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

The above is the content of our Heading.jsx file.

So how do we get the index.js file to use the Heading.jsx file. We will use the ES6 import and export feature. In our component file we will add export default Heading; 

import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;

Now the file is creating an heading function and exporting it to any file that needs it. For the file that needs it that is in our index.js file, we will add import Heading from './heading.jsx' Notice the relative file path. Now in ES6, the extension of the file is absolutely optional so no need to include it. Don't forget that both our index.js file and all our components are to be in the same folder i.e the src folder.

For a challenge, create a List component so that we can have 
<List /> in place of our list in our index.js file.

below is our List.jsx file which we then use in our index.js file

import React from 'react';

function List(){
  return (
  <ul>
  <li>Bacon</li>
  <li>Jamon</li>
  <li>Noodles</li>
</ul>
);
}

export default List;

Now it is important to know that in many of normal React developmennt, they dont have any HTML tag or element in the index.js file. Instead what you will have is a custom component called App. Instead of any other thing.

So we will have a file named App.jsx which will be where we will import all our other components. Then in our index.js file we will only have the App as the only tag present.
See the contents of the files below

import React from 'react';
import Heading from '../Heading';
import List from './List';

App.jsx

import React from 'react';
import Heading from '../Heading';
import List from './List';

function App(){
  return (
    <div>
    <Heading />
    <List />
  </div>
  );
}

export default App;

index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

The index.js has no custom code ahter than rendering the react App component. Then in our App.jsx we have the start of our component tree and all our components and that's where we'll see HTML elements and our custom components.

SO in this lesson we've seen how we can split up a simple page, making our code modular and also reusable components. We can then use the components again and again. We can learn about props to start customizing our components.

In reality we always have many component files inside a React app. In other to avoid a long list of components in our src folder we can create a new folder called components in the src folder and drag all our component files inside there. At the same time we can break down our components folder into sub folder to make things more easier.
Note: As we make folder and subfolder dont forget to always handle the relative path while importing the files.
In further lesson we will work with more react components.

#### PRACTICE

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);


For a practice on React component. Can you separate the above into components using what we have learnt before now.


### JAVASCRIPT ES6 - IMPORT, EXPORT & MODULES.
Wonder what the word import and export we've been using is. This will be a quick dive into modules, import and export. This will help us to understand what we are doing and what is happening behind the scenes.
Let's use this simple project to learn that.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);

All this displays at the moment is three bullet points. In the last section we have seen that we are able to create files that added packaged bits of functionalities which we can then import into a different file.

Let's create a file called math.js and store the value of pi=3.14 within it. Now say we want to lay hold on the value of pi and display it in our tab, we will have to somehow export the value from the math.js file. Our math.js now becomes a new module and we can export whenever we want to use it else where. We can just add export default and add whatever value we want to export in this case it is pi.

const pi = 3.1415962;

export default pi;

Now in our index.js file we will import pi from math.js . Since we have import pi then let's use it in our first bullet. Here in the math.js file we export default, a single value which is the pi.

Now when we are importing anything that is the default, we can name it anything anything at all. Only that I need to be consistent in using the set name of the value. Look at it below.

import React from "react";
import ReactDOM from "react-dom";
import pie from './math.js';

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);


Now say we have multiple things in our math.js how do we export multiple things. Whatever we specify in the export default is what is always imported but if we want it to have more thing  we can add another export specifying all other things we want to export within curly braces.

export {doublePi, triplePi};

So now in our index.js file I can use my default pi whatever we call it. Whatever we call it is what the value is set to during the import. Now if I want to get hold of the other things that are being exported from the math.js file, In our import line, I can add a comma after pi, then add other things I want to import within curly braces,

import pi, {doublePi, tripplePi} from './math.js';

In the case of the names within the braces, we can't just name them anything or name them anyhow else it wont be recognised from the list of exports. There can only be oe default export per file and for the others we have to callled them their exact names. Then we can use the other items exported in our file. We can use them by their exact names and a parenthesis to activate it.  

import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

Now we have all the value of pi.

What the concept of import and export allowed us to do it splitiing up our large Javascript files into individual more manageable components. The react compnents leverage from this and this is not new to ES6 because we are able to use require. We set a variable = require any module. In a way it is good to note that the require is from node and not javascript itself. You an use the stack overflow link below to learn more.

Learn more:
https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export

 So when we are not sure of ES6 compatibility on the browser side then we should stick with require but here Babel does the work at the background.

 Also if you dont want to be specifying every bits of item to be imported in your import statement, you can use the wildcard * instead of setting any names in your import statement.

 import * as pi from './math.js';

 If I console.log(pi) it will be an object and has a default properties pi and others including doublePi and tripplePi. We can slightly adjust our code using the above.

import React from "react";
import ReactDOM from "react-dom";
import * as pi from './math';

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

Uding the wildcard is mostly discouraged because it makes you love the default export. Not using the wildcard allows us to set another name for the export default. And if we want to make things better, we can just put each of the functions in a separate files. This will allow to export them as default and make it easy for error detection at any time. This will help us to have more modularity.

Rmemeber to go through it to comprehend it more.

For a challenge!
Say we have a calculator.js with function for addition, butraction, division and multiplication, how do we re-write this code to properly load all the functions and run without any error.


index.js
import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

calculator.js
function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}


Attempt before checking the solution below

our new calculator.js file now becomes.

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export default add;
export {add, multiply, subtract, divide};


Having our calculator.js file as above makes the two index.js file below to work as the solution.

import React from "react";
import ReactDOM from "react-dom";
import {add, multiply, subtract, divide} from './calculator'

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

//console.log(calculator);

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);


using wildcard

import React from "react";
import ReactDOM from "react-dom";
import * as calculator from './calculator';

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

console.log(calculator);

ReactDOM.render(
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);


## SETTING UP YOUR LOCAL ENVIRONMENT FOR REACT FEVELOPMENT

There are only four steps that are required to start creating react apps on windows.
1. Check Node is Up to Date
2. Install VSCode
3. Create React App
4. Run App

#### 1
Go to nodejs.org
check the latest version, check your installed version using `node --version` if not up to date or not installed. Go to the site and installed the latest version.
You can install the hyper terminal or gitbash.

#### 2
VSCode is a free and open source code editor popular for using with react. You can use any code editor or environment you also like. 
To install vscode go to visualstudio.com and follow the installation guide. It's very easy and simple. Once installed and opened, you can easily have your preferences set up.
Regardless of the editor, you can go to the link below and install all the extension that would be needed for ease in development.
https://babeljs.io/docs/en/editors

Check the specified vscode extension or the one for your editor.

In vscode by the left pane, click on extension and search for the specified extension then install it. You can also install file icon to get your icon to change in our file array.

#### 3.
To create a react app we are going to follow the instruction on their website.
https://reactjs.org/docs/create-a-new-react-app.html

#### 4.
The next thing is to run the app. cd into my-app and then run npm start


### REACT PROPS

Say we want to build a contact app. The contact have name, contact and their pictures.

### REACT PROPS

Same way html element has properties, react components can act as a customized html elements which can have properties.

    <input
      id="fName"
      placeholder="Enter your first name."
      value="Oluwaseyi Idowu"
    />



### MAPPING DATA TO COMPONENTS
The map function is a javascript function that is usedul in getting element from an array.

import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar img="https://media.licdn.com/dms/image/C4D03AQEqO-DCyNzttg/profile-displayphoto-shrink_200_200/0/1558356723329?e=1707350400&v=beta&t=J7a1IAK9yVq_2TemgpIoKx01DZyDDitsNpBY-HWJRqA" />
      <h1 className="heading">My Contacts</h1>

data mapped using
      {contacts.map(createCard)}

former hardcoded components
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

in react each of the map child should have a unique key

In a nutshell, in react index.js render our App.jsx which renders all our component. In a component we can hava a component render another component.

In the root folder, their two folder public & src and our package.json file
public ={index.html, styles}
src={components folder, index.js and also all other js files}


To set properties, first we need to we will need to use the component and then set some custom properties in that component all in our app.jsx
We can give those properties some value. Then we can find this properties available to that component inside our react dev tools. Then we can go inside that specific component and give it a parameter props which will then allow us to use the properties passed down to it. 

Say we have a component call Note.jsx, and in our App.jsx we have add some properties to the component
<Note title="some value" content="some values"/>

These properties i.e title and content added to this Note component is now available and accessible through props in the Note component.

Note(props)

<htmltag>{props.title}</htmltag>
<htmltag>{props.content}</htmltag>

Any typos here can make you miss out on the content that is where the react dev tools can be very useful

The next thing is to make our app render multiple content.
To do this we need a a js files supplying the data. It will contain an array of objects. We will export the variable in this file and now we can import it in our App.jsx

Though we can create many of the Note component in our App.jsx and hardpick the values from the variable we imported but in other to save time and effort, we can use the map function to dynamically pick all the values and render them.

To do this, once we have export and import the data file, we can console log it in our App.jsx. Then we will create a function that returns a component that uses the props we already set.

Then in the App() we will use the map function

let's say our data js file is called notes.js

we can have a function 
function createNotes(noteItem) {
  return <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
}

Now in our App() div we will have
{notes.map(createNotes)}

This should work just fine. We can simplify it further by including our function directly inside the map function using arrow function.

{notes.map(noteItem => <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
)}

The key was included because React demands a key for all entries.

### REACT CONDITIONAL RENDERING WITH THE TENARY OPERATOR & AND OPERATOR
Say we have a user login page. In this we will want to render different interface based on whether the user is logged in or not. To do this we migth need to have some conditions that determine what is rendered considering whether the user is logged in or not. How do we render different react components depending on some conditions? This is what we will learn here.

Say we have a variable say 
isLoggedIn = false 
This can be set to true if some conditions are met and when true or false a different component is rendered on the page.

We can think of using a function

App.jsx
var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return (<Greetings />)
  } else {
    return (<Form />)
  }
}

Then in our App() <div>{renderConditionally()}</div>

Note each of the pages should be in different components.

If we decide to place our function within the position where it is called then there will be an error. This is because our code has some statement 

TENARY OPERATOR
CONDITION ? DO IF TRUE : DO IF FALSE

isCloudy === true ? bringUmbrella() : bringSunscreen()

imHungry === true ? findSomethingChop() : continueWorking() 

if isLoggedIn === true ? greeting() : form()

So instead of statement, we now have three expressions, the condition, what to do if true and what to do if not true. This makes the whole thing an expression.

SO now we delete the renderconditionally function and used tenary operator to fit it in where we call the function.

{isLoggedIn ? <Greeting /> : <Form />}

What about when we dont want to render anything at all.

{currentTime > 12 ? <h1>Why are you still working?</h1> : null}

THE && OPERATOR
The easier way is to use the && operator

EXPRESSION && EXPRESSION 
Checks two expressions if they are true and then do something.

If one of the expression is false, Javascript do not bother about the second. The whole expression is evaluated to false.

React leverage on this a lot

(CONDITION && EXPRESSION)
true && EXPRESSION
false && EXPRESSION

This does the same thing with the tenary operator above.

{currentTime > 12 && <h1>Why are you still working?</h1>}

Why is because the first condition is checked and since it is true then next expression after the && is executed and this for react means to render something on the screen. But if the left handside operator is true then there is no point in looking at the right side this for react means nothing is rendered interpreting to null.

### STATE IN REACT - DECLARATIVE VS IMPERATIVE PROGRAMMING
So far we have learnt how to buld components using React, extract those components into smaller pieces and pass properties to reuse them. What we are yet to do is make our app more interaactive. To do that we have to understand the concept of state.

UI = f(State)
What the user sees is a function of the state of your app.
Consider this analogy, think about the difference between Ice and Water, they are basically the same thing like same React component but they will change state based on the temperature. If the temperature goes up, then ice turns into water and if the temperature goes down the water turns back into ice. In this case you could think of the Ice as the User Interface (UI), and depending on what the value of that state is, if the temperature was minus 10 degrees both in farenheit and in celcius then we will have ice and if we change the temperture to say 60 degrees, then our ice is going to turn into water. So the UI changes based on the change in state.

With code, we will keep track of a variable say temperature and change the state of our UI based on the value of that variable. Say we created a todoList and a list item with a single paragraph of text. What we want is to for the text to have a linethrough or a strike out when clicked. In this case we might have a state variable called isDone initially set to false. But when the user clicks on the to-do list then we switch the value of that variable from false to true. And what we want our paragraph element to do is to change its appearance in the UI to reflect this and to have the strikethrough styling.

Say we have this in our App

import React from "react"

function App() {

var isDone = false;

  return <p style={{textDecoration: "line-through"}}>Cook food</p>
}

export default App;

since we dont want a line through all the time we but only when the variable is true. We can put the style in a variable.

function App() {

var isDone = false;

const strikeThrough = {textDecoration: "line-through"}
  
  return <p style={isDone ? strikeThrough : null }>Cook food</p>
}


In the above we use the tenary operator. We can also use the && operator like below.

function App() {

var isDone = false;

const strikeThrough = {textDecoration: "line-through"}
  
  return <p style={isDone && strikeThrough}>Cook food</p>
}

The important thing here is that we have a user interface that is dependent on a state variable.

This type of programming is often known as declarative programming. We're declaring when we're writing our code how our user interface should look under different conditions depenedent upon the state.

#### IMPERATIVE PROGRAMMING
This type of programming is what we have been doing all along when using Javascript and and any DOM manipulation technique or library like JQuery. When we say document.getElementById() and we tap into its properties and then set it equal to something. This is us imperatively telling this element to do something different.

document.getElementById("root").style.textDecoration = "line-through";


function App() {

  
  return <p >Cook food</p>
}

we can leave that as it is above and go into our index.js

and taap into the document DOM, get element by Id and tap into the style property then change it.

document.getElementById("root").style.textDecoration = "line-through"

Once the line of code above get executed the style is applied.

And very often what we've been doing is effectively creating some sort of listener. We can do that in our App.jsx component.

import React from "react";

function strike() {
  document.getElementById("root).style.textDecoration="line-through";
}

function strike() {
  document.getElementById("root).style.textDecoration="null";
}

function App() {
  return (
    <div>
    <p>Cook food</p>
    <button onClick={strike()}>change to strike through</button>
    <button onClick={unStrike()}>Remove strike through</button>
    </div>)
}

if the button is clicked then the style is applied. At the same time we can have a button that change it back. In this case when I click the change to strike through button the line-through is applied and when I click the Remove strike through button the style is removed. This is very imperative. This is getting hold of an item and setting it to a new value each time we want the change to happen.

If we go back to our former style where we keep track of a variable, we can just change the variable value and the style is applied and removed. isDone to true or isDone to false. But this does not work until the components are re-rendered. This is why we need something called hooks. React hooks are functions that allow us to effectively hook into the state of our app and read or modify it. The most commonly used state management in React is the Use-state. We will learn this in the next lesson.

### REACT useState

we can have a button and onClick we call a function that change a variable. The changes in this value though we can see it on the console but do not render on UI. One way we can do this is to call our ReactDOM.render function in our increase function.

index.js

import React from "react";
import ReactDOM from "react-dom";

var count = 0;

function increase() {
  count++;
  console.log("count");
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);


calling the render function inside the increase function to render the change to the UI.

var count = 0;

function increase() {
  count++;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);


This is kind of re-rendering everything that is on the screen and the whole thing is inefficient. The whole code mobbed up and we have an unnecessary repeated code.
How do we solve this problem. This is where React Hooks comes in and there's a hook called useState that is perfect for the solution. The rule for hook is that it must be used in a functional component. This means we have to create a function that renders a component and then inside that component we can use hooks. So let's move our code into our App.jsx

Now here in our modified App.jsx

import React from "react";

function App() {
  var count = 0;

  function increase() {
    count++;
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

We will call state and I'm going to set the state to React in place of our var. The useState function comes from the react module. We can use it as React.useState() or we import it directly while importing React.

#### WHAT EXACTLY IS useState

import React, { useState } from "react";

function App() {
  const state = useState();

  function increase() {
    //count++;
  }

  return (
    <div className="container">
      <h1>0</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

Let's console.log the value of state. What is inside the useState is our initial starting state. To get hold of that value, since it's the first item when we console.log our state, we can just get hold of it with state[0]. Now since the value is inside React component, we can use it our value in place of count. So anytime it is updated it is changed on the UI automatically in our h1. We just tell our h1 to track our state value, once it changes our h1 is re-rendered.

  const state = useState(13);

  console.log(state);
  function increase() {
    //count++;
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

This is more efficient than our former code which call ReactDOM.render and this only update the parts that need to be changed.

Becasue the output of useState is an array we are forced to write our code this way using the square brackets which is very ugly. It might bring some error later. A way to handle this is using using the ES6 Destructuring.

#### ES6 DESTRUCTURING
Destructuring allows us to destructure a complex structure. So the complex thing in Javascript are objects and arrays.

say we have a const rgb = some array.

const rgb = [9, 132, 227]

instead of using [] to access the items which on a long run will mean something else in our code we can use array destructuring. Let's see the destructure array.

const [red, green, blue] = [9, 132, 227]
What will happen is that each of the names are mapped to the values on the other side in the specific order it was arranged,

so if we logged blue, the thrird value is seen. This can be very helpful in for values in our useState.

const [count] = useState();

so to access the value inside the state we can now use count to access the value.

Though we can change the initial value, how do we change the value later one. Remember that the array that gets returned fro this function has two items. The first one is a value and the second one is a function. we can give the function a name. Let's calll it setCount because that's what it will do.
This is the function that will be used to update this value inside our state. Now in our increase function we can call setCount and pass it a value.

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(3432);

  function increase() {
    setCount(count++);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;


what will happen here is that once the + button is clicked the increase function is called which run the seCount function using value input into it. A way to have an increase is use count++ as the input value of the increase function.

Let's add a decrease button.

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

So useState from React hook helps us to update the state of our App dynamically. We import useState, set the initial value using the first item in the useState array, then use the second item which is a function to update the value of count.

ES6 DESTRUCTURING

data.js

const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: { topSpeed: 140, zeroToSixty: 8.5 },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: { topSpeed: 150, zeroToSixty: 3.2 },
  },
];

export default cars;


index.js

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  hModel,
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  tModel,
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

console.log();

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);


### EVENT HANDLING IN REACT

Details During Registeration
newUser {
Firstname: "", Surname: "", email: "", phoneNumber 
}

Testimony schema
new testimony: {
id: "Unique ID",
Dates: {DateSubmitted: "grabbed from present date", dateofMiracle: "fromUser", miracleDuration: "instant/overAPeriod"},
miracleDetails: "Long Text",
needsPerfectionorFurtherMiracles: "yes/no",
ifYes: "Details"
requestPrayers/Counselling: "yes/no",
ifYes: 

}