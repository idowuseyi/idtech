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

It is important to follow this rule. This means it is wrong to cahnge style with javascript. But still if we need to change things on the fly then we must still use javascript. So how do we get it done.