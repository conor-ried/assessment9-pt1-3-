### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
--React router allows the user to navigate between pages without rendering new html page. its more efficient and provides cleaner code not needing multiple html formatted pages

- What is a single page application?
single page apps renders based off one page and everything is within that page

- What are some differences between client side and server side routing?
-server side makes a request to server and waits for a response while client side does not and is handled by javascript 

- What are two ways of handling redirects with React Router? When would you use each?
-redirect is the main one allows for you to say a target url, history is one I have not used but 
- What are two different ways to handle page-not-found user experiences using React Router? 
-/Switch with a route to route user to not found page, or you can create a function within a component that will be called up if no page found 
- How do you grab URL parameters from within a component using React Router?
-by using params word so props.params 
- What is context in React? When would you use it?
this is allows for values to be passed from parents elements to lower levels without defining at every single level.

- Describe some differences between class-based components and function
  components in React.
  so class uses this.state and doesnt use useEffect, useState which function components in react use. I think class is also older so the newer way of doing things is with functions and components.

- What are some of the problems that hooks were designed to solve?
-solves sharing between different parts of code, makes code easier to read, and allows for each sep component to be defined uniquely versus class 