<p align="center">
  <img src="https://raw.githubusercontent.com/fluidtrends/carmel/master/challenges/hello-chunky/icon.gif" width="180">
  <h2 align="center"> Challenge #1: "Hello Chunky" (Pre-Release)</h2>
</p>

Starting from literally nothing, **learn how to setup your development machine**, with absolutely **no previous experience** in software development. This challenge helps you get the tools you need for JavaScript development - including a **code editor**, a **terminal** and a JavaScript environment called **Node** - all free of course. Learn how to [**install Chunky**](http://chunky.io) on your machine as well, an awesome Development Platform that will help build beautiful products in no time.

* **Author:** I. Dan Calinescu (@idancali)
* **Level:** Beginner
* **Tags:** web, javascript, react, setup, installation, getting started

---

## Create Your First Chunky Product In Minutes.

Getting started with Chunky is a breeze.

Before we do that though, let's make sure your development machine is ready.

If you've developed JavaScript apps before that means your development environment is up and running and you should be ready to go right away.

Otherwise, you'll need to go through the prerequisites below first.

Don't worry, this will be fun.

## Prerequisites

**A Code Editor**

This one's pretty obvious. As a Software Developer, this is where you live most of the time. In your **Code Editor**.

It doesn't really matter what Code Editor you use, just make sure it's one that you enjoy using.

Check out **Atom** if you want a good Code Editor.

[Download Atom](http://atom.io)

**A Terminal**

Make sure you have your favorite terminal handy, because you're going to need it often.

Your development machine, whether a Mac, Windows or Linux, should have a built-in terminal. So in theory, you shouldn't have to do anything if you just want to use the default terminal.

You can also use whatever terminal you prefer, just make sure you have one handy.

Check out **Hyper.js** if you want a good terminal recommendation.

[Download Hyper.js](https://hyper.is/)

**Node.js**

The Chunky CLI is built with Node.js so you need to make sure Node.js version 6 or higher is installed on your machine, before attempting to install the Chunky CLI.

If you don't have **Node.js** installed on your machine, simply download the latest stable version and run the installer.

[Download Node.js](https://nodejs.org/en/download/)
**Windows build instructions**

this command is useful for installing NVM
```
https://github.com/coreybutler/nvm-windows
```
this command is useful for installing Node
```
nvm install node
```
**Windows Build Tools (Windows Only)**

If your running Windows, the Chunky CLI also needs to have access to the Windows Build Tools. To install them, just run the following command in your terminal:

```
npm i -g --add-python-to-path windows-build-tools
```

## Installing The Chunky CLI

In addition to being a cute code monkey, Chunky is also a big terminal nerd.

Meaning, your primary gateway to Chunky is the **Chunky Command-Line Interface (CLI)**.

Installing the **Chunky CLI** on your development machine is a one-liner. Just open up your terminal and run the following command:

```bash
npm i -g chunky-cli
```

That's it. Welcome to Chunky. You now have the mighty ```chunky``` command available at your fingerprints.

Say Hello and try it out by typing it in your terminal:

```bash
chunky
```

## Your First Chunky Product

Click [here](https://github.com/fluidtrends/carmel/archive/chunky-templates.zip) to download your chunky template

Extract this archive in your working folder.

Use [7zip](https://www.7-zip.org/) to extract this on your windows PC.

### For Mac extract this way

![extract for mac][extract for mac] 

[extract for mac]: extract-mac.png

If you look through the generated files, you'll notice a lot of new additions.

You're looking at a full blown Full Stack Product.

One more step. Let's install our product's dependencies.

Nothing fancy here, just run:

```bash
npm i
```

Depending on your network connection, this could take a couple of minutes. Let it run and when it's done, pat yourself on the back.

You are the owner of a brand new Chunky Product.

## See Your Product In Action

To see what your product looks like, let's just start the Web App in development mode, like so:

```bash
chunky start web
```

Let the packager do its thing for a few seconds and then just open your browser to ```localhost:8082``` and have a look at your brand new Web App.

You can go ahead now and edit your product, extend it, package it, deploy it and so much more.
You should have something like this:
![success workspace][success workspace]
 
[success workspace]: success.png