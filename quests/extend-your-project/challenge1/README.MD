<p align="center">
  <img src ="../../img/extend.jpg" />
</p>

<p align="center">
  <h2 align="center"> Challenge #1: "Add a new screen to your project" (Pre-Release)</h2> 
</p>

Extend your project, add new screens and content to get you further than ever.

By doing this you will acquire the following rewards:
```$xslt
new screes, content, json manipulation. 
```


* **Author:** aclowwwn
* **Level:** Beginner
* **Tags:** web, json, rounting, getting started

---
###

## Add a new screen

## Tasks

### 1. Extend the menu

Open <b>intro's chunk.json</b>, add a new field named "extendedMenu", containing an empty array. Inside the `routes` object, you now have a route defined, named `main`. Inside this route, under the `title` field, add the `extendedMenu`. 

<details> 
  <summary>Want a tip? Press this for a hint </summary>
  <br />
   <p> Declaring a new JSON field is easy: the name must be surrounded by quotes, then a semicolon. On the right side of the semicolon you have the value of the object, which, in our case, is an empty array.  </p> 
</details>

### 2. Add a new menu item

Inside the array, add a new object, with the following fields: `id`, `title` and `path`, each one of them containing an empty string.

<details> 
  <summary>Click me if you need help. </summary>
   <br />
   <p> To declare a new object, you must use the curly brackets ('{}'), and each field inside the object must be surrounded by quotes, and separated by a coma. </p> 
</details>

### 3. Define your second page menu title

The title of the second page menu item is given by the `title` field of the extendedMenu. 

<details> 
  <summary>Press me if you are stuck</summary>
  <br />
   <p> If your second page is an <i>About</i> page, the title can be simply: <i>About</i>. </p> 
</details>

### 4. Define your second page menu path

The path is the name that will be added in your project's URL link anytime you navigate to the page. To define it, change the `path` field accordingly. In the same way, define the `id` field.

<details> 
  <summary>Too hard? I can show a tip ;)</summary>
   <br />
   <p> The path should usually be the same as the menu title, only in lowercase, and always starts with a <code>/</code>. </p> 
</details>


### You should achieve something like this

![final-preview][final-preview]
 
[final-preview]: ../../img/extend-challenge-1.png

