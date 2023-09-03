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

Some things that help with coding better is to study your habbit queue.
The way to keep an habit going is to put it next to an already ongoing habit. Your onging habit will help your new habit to stick.

## WEB DESIGN

The most important thing about creating a great website is the look, the design. When it comes to web design the idea that you only have three seconds to make an impression applies. Just like an interview or first date. It only take the user few minute to make some conclusions about the site.

colors, fonts, typeface, images, etc counts a tonne.

Improving design is one great and cheapest way to make your product more expensive. So being good at design is highly essential.

### WEB DESIGN PRINCIPLES

a. Colour Theory
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

The same way different colour speak different moods ans emotion, different fonts also speak different moods and emotion.

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
A design that uses too many fonts willsurely be cluesttered. It is a good design characteristics to stick with two fonts in your design.

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