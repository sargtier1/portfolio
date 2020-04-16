---
'title': Salvatore Argentieri
'excerpt': 'This is a quick article talking about everything you need to know to get set up with Next.js.'
'coverImage': 'https://assets.zeit.co/image/upload/q_auto/front/solutions/next-og-image.png'
'date': '2020-04-15'
---

I will post the terminal commands and code snippets after each explanation so that way you can reference the commands and code. I am assuming you have an understanding of the basics as this is not geared for complete beginners.

## Setting up a Next.js application

First things first, we need to set up a development environment. With `Next.js`, this implementation of such is extremely elegant, especially when compared to the likes of `Gatsby.js` and `Create-React-App` (no hate intended). Bust out those terminals!

1. first create a new folder call `next-starter` then move into that folder.

```
  mkdir next-starter && cd next-starter
```

2. Once we are in the root of the folder we need to initiate the node project. Don't worry about customizing the settings of the `package.json` file either. We can fix the author, description, what have you, later.

```
   npm init - y
```

3. Once initiated we can then proceed to download the necessary dependencies to create a `Next.js` application. This includes dependencies from both `React.js` and `Next.js`

```
   npm i --save react react-dom next
```

4. Now we need to create the script commands that are needed to run the `Next.js` program. Open the `package.json` file and replace the follow block of code for the `scripts` object. This creates a script to run a development environment, a build step, and a production run time.

```
   "scripts": {
   "dev": "next",
   "build": "next build",
   "start": "next start"
   }
```

> Now that we have our basics set up, lets take a quick breather. We created a new project folder, made it into a node program, and downloaded the necessary dependencies. finally, we created the scripts that we need to run in the terminal to spin up the application. If we were to run any of these commands our application would not run. For our application to work we need to set up the basic file structure `Next.js` expects to display anything to the `DOM`

5. Unlike `React.js`, which uses client side routes that are defined by components, `Next.js` uses a file-based routing system. This means that `Next.js` will look into our pages folder to create our URLs. It will always look for an `index.jsx` file to be displayed first. This is our base route (i.e `'/'`).

> Keep in mind there is dynamic routing in `Next.js`, which will be defined by the code we write, its just not necessary for our primary URLs.

let's start by creating a `pages` folder, and then an `index.jsx` file inside of that folder by running the following commands. Be sure to be in the root of the project when you do so.

```
    mkdir pages -p && touch pages/index.jsx
```

6. Now that we have created`pages/index.jsx`. Copy and paste the code below into your `index.js` file.

```
import { Link } from 'next/link'

    const Index = () => {
    	return (
    		<div>
    			<h1>Hello Next!</h1>
    			<p>Noice to meet you!</p>
    			</Link>
    		</div>
    	)
    }

    export default Index
```

7. Finally, run the command `npm run dev` in your integrated terminal. You should see the contents of this file displayed on the screen at `[localhost:3000/](http://localhost:3000/)`. Notice how we did not have to import `React.js` to make this work - pretty slick right?

## Routing and linking between pages

Lets talk about linking between pages in a `Next.js` application. In order to do this we need to create a new file under the pages folder. Go ahead and make a new file call `pages/about.jsx`. Simply copy and paste the code above, just rename the function to `About`. Example is below.

```
    const About = () => {
    	return (
    		<div>
    			<h1>About Next</h1>
    			<p>I'm a little weird at first, but you'll learn to love me!</p>
    		</div>
    	)
    }

    export default About
```

Lets review our file structure. It should look something like this:

```
    node_modules/
    pages/ -|-- index.js
    				|-- about.js
    package.json
    package-lock.json
```

1. The first thing we need to talk about is `Link` from `next/link`. This router lets us link between pages _within_ our application. We first import the `Link` in whatever file we need it in. Why don't we add a instance of `Link` in both our `pages/index.jsx` page, and our `pages/about.jsx` page which direct the user’s interactions to the other file. Take a look at the examples of each new instance.

> The `<Link>` component will have an `<a>` tags nested inside. The `<a>` tags will hold the link's displayed name. the `href=''` will be held by the `<Link>` component itself, this is what allows us to link between pages in the application. Keep in mind if you want to style these links in any way, you will apply the styles to the `<a>` tags!

```
    /*
    *   pages/index.jsx
    **/
    import { Link } from 'next/link'

    const Index = () => {
    	return (
    		<div>
    			<h1>Hello Next!</h1>
    			<p>Noice to meet you!</p>
    			<Link href='/about'>
    				<a>
    					Learn more about Next
    				</a>
    			</Link>
    		</div>
    	)
    }

    export default Index
```

```
    /*
    *   pages/about.jsx
    **/
    import { Link } from 'next/link'

    const About = () => {
    	return (
    		<div>
    			<h1>About Next</h1>
    			<p>I'm a little weird at first, but you'll learn to love me!</p>
    			<Link href='/'>
    				<a>
    					Back to home
    				</a>
    			</Link>
    		</div>
    	)
    }

    export default About
```

Execute the command `npm run dev` to test everything out. We should be able to jump between our `pages/index.jsx` and `pages/about.jsx` files with ease. The URLs should also be changing as we do this!

We will cover dynamic routing later, for now this should be enough to get started. If you are wanting too, feel free to checkout dynamic routing via the next.js docs at [this link](https://nextjs.org/learn/basics/create-dynamic-pages)

## Styling in Next.js

The revolution of styling in a `Next.js` application is one of my favorite features! We can use the built in `Styled-Jsx` library, built by the makers of `Next.js`, to write `CSS` in our component files! These are locally scoped, unless defined otherwise, and should help eliminate the need of unwanted `CSS` (being pure `CSS`, unwanted styles can still arise).

let’s add some basic styling to assist with our applications layout.

```
    /*
    *   pages/index.jsx
    **/
    import { Link } from 'next/link'

    const Index = () => {
    	return (
    		<div>
    			<h1>Hello Next!</h1>
    			<p>Noice to meet you!</p>
    			<Link href='/about'>
    				<a>
    					Learn more about Next
    				</a>
    			</Link>
    			<style jsx>{`
    				.container {
    					padding: 1rem;
    					margin: 1rem;
    				}
    				.container h1 {
    					font-size: 1.5rem;
    				}
    				.container p {
    					font-size: smaller;
    				}

    			`}</style>
    		</div>
    	)
    }

    export default Index
```

I didn't do anything too crazy here. I simply made the `<h1>` tag bigger, and made the `<p>` smaller. I also added `padding` and `margins` around both. Notice how I used a `style` tag with the attribute `jsx`. This allows `Next.js` to reconcile the styles pertinent to this particular component. In order to apply global styles, include another attribute in the `style` tag.... `global='true'`.

> Take note of how this `style-jsx` is located at the bottom of the `render/return` function and sits _within_ the wrapping element of the component. This is imperative as it will not work otherwise.

## Conclusion

This is everything you need to get started with `Next.js`. Of course there is much much more to this, but if you are familiar with `React.js`, this will definitely get you set up to began working on some projects, albeit mostly static projects.

On my next few articles we will build on this foundation with more intermediate tips and tricks within the next.js ecosystem!
