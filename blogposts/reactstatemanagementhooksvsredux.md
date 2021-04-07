---
title: React state management | Hooks vs Redux
description: "React state management: React Hooks vs Redux"
firsttwohundredchars: "Before adding Redux to a project, one must ask themselves, do I really need a global state? If I do, does it have to be by Redux? With the addition of Hooks, functional components can have states too..."
date: "2020.10.27"
path: "reactstatemanagementhooksvsredux"
---

## React state management: Hooks vs Redux

Before adding Redux to a project, one must ask themselves, do I really need a global state?

With the addition of Hooks, functional components can have states too. State and the function to change it can be passed to other components as props, making components capable of accessing and changing other components' state. As projects get bigger, passing states around as props can become more complex. This is where the global state comes in, access and update a state from any component without passing anything around. Sounds great but is it necessary? Generally, if you are passing the state only to a children component, it doesn't really matter that projects is getting bigger, it will likely not become complex. In situations like this you don't have to resort to the global state. In my opinion global state is great when components in different branches need access to the same state. <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank" rel="noopener noreferrer">Lifting the state up</a> all the way to the App component then passing it through many layers of components seems excessive and at that point using the global state is probably the better option.

### Redux vs. Context

Now that we addressed when to implement a global state, the question becomes what to implement it with. What a lot of people get confused about is that Context was never meant to replace Redux, its job is to "pass data through the component tree without having to pass props down manually at every level". It is an useful tool to stop prop drilling, it is not a state management tool. The best time to use Context is when a branch of your application needs to use a state in its many levels.

There are many advantages of using Redux, the biggest one in my opinion are the libraries surrounding it. The ones that I use the most are <a href="https://github.com/rt2zz/redux-persist" target="_blank" rel="noopener noreferrer">Redux-Persist</a> and <a href="https://github.com/reduxjs/redux-thunk" target="_blank" rel="noopener noreferrer">Redux-Thunk</a>. Thunk lets you return functions from action creators instead of objects. Persist is used for caching data. Redux, Persist and Thunk combined, take up less than 10kb of space at the time I am writing this. They are light and they do the job right. 

In conclusion, use Context if you don't want to prop drill in a branch, use Redux if you need to use a state by many branches in the component tree.