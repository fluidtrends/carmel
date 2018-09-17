# Contributing to Carmel

👍🎉 First off all thank you for taking some time to contribute and to help us teach other people to!

The following guideline will try to explain what you need to do in order to contribute to Carmel and create new challenges or submit new bugs.

## I do not want to contribute I just want to get in touch with you

If you only want to reach out to us or have any question about the product you can do this in 2 ways:
* send an email to team@carmel.io describing your issues or your proposal to us
* join the telegram channel and ask there https://t.me/carmelplatform

## How can I contribute?

### Reporting bugs

Before you submit any new bug look [here](https://github.com/fluidtrends/carmel/issues) to check if the bug isn't already reported by someone else.

#### How do I submit a new bug?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you determined the bug, create an issue on Carmel repository and provide the information needed to reproduce the bug.

Explain the problem and include additional details to help us reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example describe what were you doing in the Carmel studio when the bug appeared. **Don't just list the steps try to explain how you did them**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.

### Create challenges

**All the challenges will be under the challenges folder in the root directory.**

Every new set of should be added in a new folder with a [camelCase](https://en.wikipedia.org/wiki/Camel_case) name.

**Note: If you create a new folder you must add it to the index.json file too. For example if you created a new folder called: myChallenge, the index.json should contain that string ["helloWorld", "myChallenge"]**.

#### Challenge folder

For an example index.json look [here](https://github.com/fluidtrends/carmel/blob/master/challenges/helloWorld/index.json)


The newly created folder must contain an index.json file which will describe the:
* **title** - try to add a descriptive title to your challenge
* **summary** - add an explanatory summary for the users to understand what they will do
* **author** - must contain the name of the author and his email
* **level** - the level of the challenge
* **skills** - skills aquired by someone who will complete this challenge
* **taskIds** - the ids of the tasks include in the challenge

#### Task folder

After defining index.json you can start by creating folders with the same name as the taskIds. For example if you wrote in your index.json at the taskIds: ["myTask"] your task folder should be named myTask.

Task folder should contain 2 files: **index.json and spec.js**.

##### index.json

This json file must describe the task itself.

Take for example the index.json from the changeIntroTitle task.

```
{
    "id": "changeIntroTitle",
    "index": 2,
    "title": "Change the title of your main page",
    "instructions": "Edit the cover title. In order to do that, you need to open the chunks folder and take a look at the intro folder.",
    "help": "Tap the 'Open Source Code' button and open the chunks/intro/chunk.json file. Look for cover title.",
    "files": ["chunks/intro/chunk.json"]
}
```

Every index.json must contain:
* **id** - should be the same with the folder name and the id in the index.json from the challenge folder
* **index** - every index should be different
* **title** - descriptive title for the tasks
* **instructions** - a clear set of instructions to describe the learner what he will have to do in order to complete the task
* **help** - any tips so the learner can look into
* **files** - the files that should be modified

For an example index.json look [here](https://github.com/fluidtrends/carmel/blob/master/challenges/helloWorld/changeIntroTitle/index.json)

##### spec.js

This js file will be a unit test written in order to validate the task. It is exported as a javascript module. For the moment we are using [chai](https://www.chaijs.com/).

For an exemple spec.js look [here](https://github.com/fluidtrends/carmel/blob/master/challenges/helloWorld/changeIntroTitle/spec.js)

When testing assertions please make sure you add an error message so the user will know what he will have to modify.

```javascript
module.exports = ({ chai, utils, original, done }) => {
  const originalIntroChunkCoverTitle = original.chunks.intro.routes.main.cover.title

  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkCoverTitle = introChunkConfig.routes.main.cover.title

  chai.expect(introChunkCoverTitle).to.not.equal(originalIntroChunkCoverTitle, `Make sure you change the intro cover title from "${originalIntroChunkCoverTitle}" to something else`)

  done()
}
```

#### Submit your challenge

We will use [GitHub's pull requests](https://help.github.com/articles/about-pull-requests/) for submiting newly created challenges.

Create a new pull request with the base branch set in master and after our dev team will look into it.

##### That's it! If you did all of this you successfully added a new challenge and we will review it, once we merged it all the users will see the new challenge in the Carmel desktop.
