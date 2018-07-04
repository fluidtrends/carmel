<p align="center">
  <img src ="../../img/react.png" />
</p>

<p align="center">
  <h2 align="center"> Challenge #1: "First glimpse at React" (Pre-Release)</h2>
</p>

Now that you have an idea about what React is, let's use it.
By doing this you will acquire the following rewards:
```$xslt
react, library, javascript
```


* **Author:** Robert P.
* **Level:** Intermediate
* **Tags:** web, getting started, react, javascript

---
###

#### With the help of Chunky we don't need to setup anything, since Chunky is already using React behind the scenes

### Your first **Component**

### Tasks

### 1. Create a new file

Let's create a new folder into our intro folder called **components** and there create a file named **myComponent.js**

No tip for this.

### 2. Import React into the file

In order to use React, firstly we will need to **import** it in our file.

Read more about [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### 3. Import Component from react

This is pretty much the same thing, but instead of importing the React object we will import the **Component**

<details>
  <summary>Want a tip? Press this for a hint </summary>
  <br />
   <p> You can do these 2 tasks in 1 line: </p>
   <p> import React, {Component} from 'react'</p>
</details>

### 4. Name your Component

We will create our Component using **class** from ES6

[class component](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

<details>
  <summary>Try not to use this</summary>
  <br />
   <p> You will define your component and name it by typing: </p>
   <p> class myComponent extends Component {

} </p>
</details>

### 5. Let's render something

But what does render means?

Render is a **method** of the Component which will show html content inside our component.

Let's show something pretty basic like a heading or a paragraph that says hello.

<details>
  <summary>You sure you need this ? you got all the information you need in the link above </summary>
  <br />
   <p> The render function should be like this: </p>
```jsx
render() {
       		return <p>helloooo</p>
       	}
```
</details>