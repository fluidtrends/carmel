## Create your first React Component

Creating your first Component shouldn't scare you that much.

Let's get started then.

Firstly we should create a new Javascript file.

## Time for import

**React**

Our first import will be **React**, nothing fancy here just import it from 'react'.

**Screen and Components**

Now let's import our **Screen** and our **Components** from chunky.

**Our Picker Component**

We will import our Picker from components folder, even if we did not define it yet ( we will do this later don't worry ).

## Now let's create your Class

You should create a **default class** that will return your component. Also your class should extend **Chunky Screen**. Export your class by **default**.

Create a **components** function and return an array with **one** element and that element should be your **Picker**.

## Send some props to your component

Add **backgroundColor** property to your **Picker** and set the value to: **EEEEEE**.

Also add a **startValue** property that should have the value: **1**.


## Now let's go and define our Picker

We will start by importing **React** and **Component** from react.

For the text we will use **Typography** import it from **rmwc**.

Also we will need a **Fab** that we will import it too from **rmwc**.

We are done with the import part, now let's define our **Picker** component.

Create a **Picker** **class** that extends **Component** ( note: we imported this Component from react ).

Export deafult the **class**.

Create a **constructor** function that will receive props as argument.

Inside the contructor function call the parent constructor with the props ( here you must use [**super**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super).

Initialize the state with a **points** key and set its value to the **startValue** property.

We are done with the constructor, let's move to rendering something.

Create the **render** function

Inside it you must return your elements.

Return a **div** (having the backgroundColor property from props sent earlier) and inside return 2 **Fab** elements one with the *remove* icon and the second with the *add* icon.

Between your **Fab** elements you should have a **Typography** with the text: *number* points, where **number** will be taken from the state.