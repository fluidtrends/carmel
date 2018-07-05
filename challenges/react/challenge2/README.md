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

As a note: all the classes should start with CamelCase (ex: MyComponent)

<details>
  <summary>Try not to use this</summary>
  <br />
   <p> You will define your component and name it by typing: </p>
   <p> class MyComponent extends Component {

} </p>
</details>

### 5. Let's render something

But what does render means?

Render is a **method** of the Component which will show html content inside our component.

Let's show something pretty basic like a heading or a paragraph that says hello.

<details>
  <summary>You sure you need this ? you got all the information you need in the link above </summary>
  <br />
   <p> The render function should look like the one below </p>
</details>

```jsx
render() {
    return <p>helloooo</p>
}
```

### 6. Show your component?

We created the component, made it to render a basic text. But how can we see it ?

Here comes the export and import (like in economy, in order to have access to something you need to export it)

You will need to **export default** your component by simply adding these 2 words where you extend your component

[export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

Now let's call it somewhere in our application.

Open main.web.js from the intro folder

Let's import our component

<details>
  <summary>Do it without this </summary>
  <br />
  <p>Add the following at the top of your file</p>
   <p> import MyComponent from '../components/myComponent' </p>
</details>

After you imported it, let's render it.

Create a new function, let's say showMyComponent

###

```jsx
get showMyComponent() {
    return (
      <MyComponent></MyComponent>
    )
  }
```

Now let's show it near our other components

Edit the components function. Your components function how returns the components from the json file and we need to add one extra component, you can do this by using concat

<details>
  <summary>Maybe you will need this </summary>
  <br />
  <p>return super.components()
               .concat(this.showMyComponent) </p>
</details>

[Let's get into props and state](https://github.com/fluidtrends/carmel/tree/challenges-chunk/challenges/react/challenge3)