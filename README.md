# hipster-jeans

Prerequisites
=====
Docker is the only requirement. Please make sure you have docker tools installed on your machine.

https://docs.docker.com/docker-for-mac/install/

How to run
=====
 - `docker-compose up` this will take some time the first time you run it.
 - open the browser of your choice `http://localhost:7372`


Functionality
=====

The current solution is a Web UI backed by a F# RestFul service that allows users to view some aggregate values of the last years sales in a visual way. The web ui is a collection of different types of charts that makes easier the interpretation of data by the end user. The end goal is the user to be able to get a quick grasp and knowledge of what is hidden in a list of ten of thousands of data.

Technology-wise we have a React based front-end hosted in a docker container and served by an nginx instance. On the other side we have an F# API, which is written in a functional idiomatic way with the help of a framework called Suave. The back-end is also hosted within a docker container and the communication is done via links with the help of docker-compose.

How to test
=====
 - `cd ui/js`
 - `yarn install`
 - `yarn test`

 Libraries/Frameworks
=====

Back-end
=====
The implementation of the back-end was not a requirement and there was a flexibility in the technologies to use. I decided to use F# and the Suave web framework because it allows us to write RestFul endpoints in a idiomatic functional way. Also F# is one of my favourite functional programming languages along with Haskell, Elm and NodeJS.

Front-End
=====

On the front end we used the following technologies

- React  because it allows us to write pieces of UI in a declarative way which is based on a hierarchy of self-defined components which act as individual parts of the view.
Redux as the data management/flow layer. It allows us to abstract the data processing logic out of the view layer and into a separate abstraction layer. The simplicity of its implementation and the unidirectional data flow makes the application predictable which enhances its maintainability and improves the developer experience. Additionally Redux fits well into the model that is proposed by React which revolutionized (and was influenced by other similar technologies of the past) the way we think about ui developments. The model can be easily described by the following equation:

  `f(state) = view`

    It is a very simple idea and it suggests that everything you see on your screen is essentially a function of you state. The function is a composition of several components which shape a hierarchy and the state is a centralized object that stores everything the ui need in order to perform its tasks. By keeping our component pure and moving any side-effects to the boundary of the application we can achieve a very predictable behaviour that can make our life easier in terms of maintaining the application.

  Additionally, by splitting the application into separate layers we can avoid the tight coupling between the data and the view layer. This gives us a lot of flexibility in terms of the technology we use in each layer i.e we can switch from react to some other technology that follows the components design principle. Also with the advent of technologies such as React native, we can easily share the data layer and the vast majority of data processing logic, and create a native view that can be consumed in IOS and Android devices.

  Finally we can get full advantage of Event Sourcing pattern which suggests that we can easily recreate a state at any point of the time by simply passing a series of actions(events) into pure function that knows how to combine them together. This gives us a lot of opportunity to analyze how the application is used by our users, re-play users’ action when the bug is raised, serialize the series of events for further analysis etc.

- Folktale which is a standard library for functional programming in JavaScript and it implements various parts of the fantasyland specification. It allows us to use a common API across various algebraic structures in JavaScript such as functors, monoids, monads etc. It also provides us with some fundamental functional programming concepts, such as currying, partial application and various others.
- ImmutableJS because it fits well into the requirements of the application. First of all it helps us use immutable data structures in JavaScript which is a very important concept in computer science and it helps us solve the problem of the shared mutable state that our brain cannot easily perceive. Additionally, it provides a rich api that helps us do various transformation to the data which is quite vital when we have to deal with data visualization (and not only). Finally we can perform some optimisations at the view layers due to the referential equality that can be applied if we use something like pure render mixin.
- DaggyJS a tiny library that brings union types (or discriminated union or whatever you call it) to JavaScript. We can use discriminated unions in pattern matching similarly to the way it is used in other functional programming languages. We can also benefit from an exhaustive pattern matching that can help us avoid several bugs. Unfortunately, it doesn’t support all the beauties of functional pattern matching (due to language constraints) but it is a decent implementation of this concept.
- Recharts that helped us a lot with the data visualisation part.

Conclusion
===
The solution implements a typical request/response http protocol to fetch the data. However, based on the amount of data we could possibly end-up using on the front-end we could possibly come up with some optimisation. The vital part for our decision is reaching a point where we do realise that we face a performance optimisation, mainly due to the data transformation logic. At that point we should make a basic profiling and discover out bottlenecks. Some solution in the case we have too much processing time on the front-end, is probably using an incremental data processing logic. We could possibly use a WebSocket technology and push the data in batches to the front-end for processing probably using a back-pressure technique to control the flow. We could possibly use some sophisticated back-end architecture by implementing a microservices approach that would work in choreography way with the help of a queue (e.g. kafka) and an in memory database (e.g. Redis). However, as it was mentioned earlier we cannot and we should not make any such decision unless we do experience some performance issues.
