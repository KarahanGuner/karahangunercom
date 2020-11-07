---
title: React state management | Hooks vs Redux
description: "React state management: React Hooks vs Redux"
firsttwohundredchars: "Before adding Redux to a project, one must ask themselves, do I really need a global state? If I do, does it have to be by Redux? With the addition of Hooks, functional components can have states too..."
date: "2020.10.27"
---

## React state management: Hooks vs Redux

Before adding Redux to a project, one must ask themselves, do I really need a global state? If I do, does it have to be by Redux?

With the addition of Hooks, functional components can have states too. State and the function to change it can be passed to other components as props, making components capable of accessing and changing other components' state. As projects get bigger, passing states around as props can become more complex. This is where the global state comes in, access and update a state from any component without passing anything around. Sounds great but is it necessary? Generally, if you are passing the state only to a children component, it doesn't really matter that projects is getting bigger, it will likely not become complex. In situations like this you don't have to resort to the global state. In my opinion global state is great when components in different branches need access to the same state. <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank" rel="noopener noreferrer">Lifting the state up</a> all the way to the App component then passing it through many layers of components seems excessive and at that point using the global state is probably the better option.

### Redux vs. Context API

Now that we addressed when to implement a global state, the question becomes what to implement it with. I think that if you know how to use Redux, it is okay to keep using it in your new projects. There are many useful libraries for it, the ones that I used the most are <a href="https://github.com/rt2zz/redux-persist" target="_blank" rel="noopener noreferrer">Redux-Persist</a> and <a href="https://github.com/reduxjs/redux-thunk" target="_blank" rel="noopener noreferrer">Redux-Thunk</a>. Thunk lets you return functions from action creators instead of objects. Persist is used for caching data. Redux, Persist and Thunk combined, take up less than 10kb of space at the time I am writing this. They are light and they do the job right. So, is Redux worth learning in 2020? Probably not. If you want to learn how to manage the global state learn Context API. It is native to React which means it does not require external libraries. Most people think it is easier to learn than Redux and it works just as fine.

In conclusion, it is okay to keep using Redux if you are used to it, but if you are looking for something to learn, learn Context API.