Tips for Node.js
================

Useful tips and tricks for node.js developement.
This is just a quick memo for me

- [Tips for Node.js](#tips-for-nodejs)
    - [Useful npm packages](#useful-npm-packages)
    - [When --save-production (-P) or --save-dev (-D)](#when---save-production--p-or---save-dev--d)
    - [Console.log arguments](#consolelog-arguments)
    - [ES6 Object with same name for the property and the value](#es6-object-with-same-name-for-the-property-and-the-value)
    - [Try/Catch](#trycatch)
    - [Throw](#throw)
    - [Npm list package](#npm-list-package)
    - [Run a local node_module](#run-a-local-nodemodule)
    - [Reboot when save](#reboot-when-save)
    - [Good commit with emoji](#good-commit-with-emoji)
    - [Clear](#clear)
    - [Debugging](#debugging)
        - [Commands in debug mode](#commands-in-debug-mode)
        - [Debugging with Chrome Dev Tool](#debugging-with-chrome-dev-tool)

## Useful npm packages

* **[lodash](https://lodash.com)**: various useful functions
* **[nodemon](https://github.com/remy/nodemon)**: auto reload node app
* **[yargs](https://github.com/yargs/yargs)**: Manager for command arguments

## When --save-production (-P) or --save-dev (-D)

We used `--save-production` or `--save` or `-P` when the package is used by the application

We used `--save-dev` or `-D` when the package is used for the **development** of the application

## Console.log arguments

We can used `console.log()` with multiple arguments

```javascript
console.log('Read:', title)
```

## ES6 Object with same name for the property and the value

In ES6 we can shorten the definition of an object when the name of the property is the same that the value.

Before in ES5 :

```javascript
const title = 'My note title'
const body = 'My note body'

const note = {
    title: title,
    body: body
}
```

Now in ES6 :

```javascript
const title = 'My note title'
const body = 'My note body'

const note = {
    title,
    body
}
```

## Try/Catch

Try/Catch enables to test a code and do something when there is an error

```javascript
Try
{
    const text = fs.readFileSync('file.txt')
}
catch(err)
{
    console.log(err)
}
```

## Throw

Throw enable to display an error and stop the current function

Try/Catch enables to test a code and do something when there is an error
Throw will trigger a catch if the function is test whith a try

```javascript
const myFunction = () =>
{
    fs.readFile('file.txt', (err, data) =>
    {
        if(err)
        {
            throw err
        }
        else
        {
            //do something with data
        }
    })
}

try
{
    myfunction()
}
catch (err)
{
    console.log(err)
}
```

## Npm list package

List packages installed in global

```bash
npm ls -g --depth=0
```

## Run a local node_module

Run a local module situated in **node_modules folder**

```bash
npx <module_name>
```

## Reboot when save

We use the npm package **[nodemon](https://github.com/remy/nodemon)**

Install the package in dev dependencies

```bash
npm i nodemon -D
```

To use it

```bash
npx nodemon [app.js]
```

## Good commit with emoji

For pretty cool commit I used [Gitmoji](https://gitmoji.carloscuesta.me/), [this](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) and [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

```bash
git commit -a -m ":bug:Fixing a bug"
```

## Clear

Use `clear` to clear the terminal

## Debugging

In the terminal we can launch a program in debug mode

```bash
node inspect app.js
```

We place `debugger` in our code to stop at this specific line

### Commands in debug mode

* `n` go to next line
* `list(number of line to display)` display a the next lines
* `c` continue until the next debugger or the end of the program
* `repl` Go in REPL mode to explore the program (ex: value, function, ...) at the actual step

### Debugging with Chrome Dev Tool

We launch our program in a special inspect mode

```bash
node --inspect-brk app.js
```

Go to chrome at `chrome://inspect` and open `Open dedicated DevTools for Node`

On chrome we continue with the blue arrow.  
We can place a stop with a click on the line

