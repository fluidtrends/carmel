<p align="center">
  <img src ="../../img/extend.jpg" />
</p>

<p align="center">
  <h2 align="center"> Challenge #2: "Continue extending your influence" (Pre-Release)</h2>
</p>

Now that you've defined a second page, clicking the new menu item will take you to a blank page. In this challenge we will create a new page, with a simple cover and a title.
By doing this you will acquire the following rewards:
```$xslt
json (medium), content, js (beginner), react (beginner), object, arrays
```


* **Author:** aclowwwn
* **Level:** Beginner
* **Tags:** web, json, routing, js, react, getting started

---

###

## Create a new page.

## Tasks

### 1. Add a new route

Open <b>intro's chunk.json</b>. The JSON contains two children (immediate fields) named `name` and `routes`. The `routes` field contains a single field, called `main` - containing the configuration for the main page. Create a new field, on the same level as `main`, with the title you choosed for the second page, and initialize it with an empty object.

<details>
  <summary>Want some help?</summary>
  <br />
   <p> Watch the <i>main</i> route field very carefully: you have the name, surrounded by quotes, a semicolon and an object containing the config. Don't forget, an empty object is represented by a pair of curly brackets. </p>
</details>

### 2. Add a config for your second page

The basic config of the file contains three fields: `title`, `path` and `cover`. The `title` and `path` fields must be the same as the corresponding fields in the `extendedMenu`, and the `cover` field contains an empty object.

### 3. Configuring the cover

The next step in configuring the new page is to add new fields to the cover object. You will need an `image` field, containg the name of the image you are going to use as cover, an `opacity` field with a value between <code>0</code> and <code>1</code>, the `navigation` field set to <code>true</code>, a `title` and the `type` of the cover set to <code>'simple'</code>.


### You should achieve something like this

![final-preview][final-preview]

[final-preview]: ../../img/extend-challenge-2.png