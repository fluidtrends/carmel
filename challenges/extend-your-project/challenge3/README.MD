<p align="center">
  <img src ="../../img/extend.jpg" />
</p>

<p align="center">
  <h2 align="center"> Challenge #3: "Final touch" (Pre-Release)</h2>
</p>

Congrats! You added a new page to your product. That's not a small thing to do, and it will be a valuable assest for your followers or clients.
You still have a few things to do: linking the new page with the main page's action button, and add some content.
By doing this you will acquire the following rewards:
```$xslt
json (advanced), markdown, content creation, routing
```


* **Author:** aclowwwn, Adrien Benoist
* **Level:** Beginner
* **Tags:** web, json, getting started, markdown
---

###

## Add the final touch to your new page

## Tasks

### 1. Create new events

Go back to your `chunk.json` file. Inside the `main` route object, add a new field, named `events`, containing an empty object. 

<details>
  <summary>The more you know</summary>
  <br />
   <p>  The <code>events</code> object will contain various links you will define, to respond to click on buttons or links in your project. </p>
</details>

### 2. Link the main page to the second one

Inside the `events` object, add a new field, `cover` - this is the action for the main page cover's button. The `cover` field's value can be any link you want; for the purpose of this challenge though, we will need a link to the second page. The format for a local link is as follows: `local://`, followed by the path name of the new page. Now, clicking on the action button on the main page should take you to the second page.

<details>
  <summary>Don't forget</summary>
  <br />
   <p>  One superpower you will always need is the power of <code>F5</code> || <code>Ctrl(Cmd) + R</code> - refreshing the page when things don't seem to work. </p>
</details>

Let's add more content to your newly added page. For that we're gonna use a predefined intro component, with your custom logo and text. Let's get started.   

### 3. Add the intro component

Add a new field in the route object of your new page (in `chunk.json`). Name this new field `components`. Inside this new object, add an `intro` field, which contains an empty object.

<details>
  <summary>A tip for you</summary>
  <br />
   <p> As you already know, chunk.json contains 2 routes: the <code>main</code> route, and the new route you added - that's the one you need.  </p>
</details>


### 4. Configure the intro

The intro component needs 4 config fields: 
  * `source` - default value is `summary`
  * `image` - the name of the image you want to display 
  * `textColour` - the color you want for the text
  * `text` - the path of the source file for the text you want to display. 

<details>
  <summary>This shouldn't be hard</summary>
  <br />
   <p> The text can be either a <code>github</code> or a <code>dropbox</code> link, or a local link. If the link is a local one, the file must be in the <code>assets/text</code> folder. The format of a local link is the same as the action link above: <code>local://</code>, followed by the file name.</p>
</details>


### 5. Create the markdown file

Create a new file in the assets/text folder and put the .md extension to it, in order for the file to a markdown one.

### 6. Write into the markdown file

Edit your newly created file and write in it.

<details>
  <summary>Check this out</summary>
  <br />
   <p> You can use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">this</a> to gain some super powers over the markdown file. folder. Also, check this cool dude's implementation of the doc above, in his personal <a href="https://github.com/adrienbenoist/CarmelTemplate/blob/chunky-templates/assets/text/myfirstmarkdown.md">project</a></p>.
</details>


### You succesfully added a new page to your project!

#### Congrats!

Happy coding!