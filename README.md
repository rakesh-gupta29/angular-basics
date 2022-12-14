# Stock Market App

Code along for Ebook Angular Up and Running : learning Angular Step by Step
[Get Ebook Here](https://drive.google.com/file/d/1kJKLhnf2rbC1_l9XiIHdaG4wjeXs6ks5/view)

But if components are our presentation layer, it begs the question of what should be
responsible for the actual data fetching and common business logic in an Angular
application. This is where Angular services come in

Components generally will defer and ask a service for data (or a section of the data). It is up to the service to decide how and where to fetch the data from, whether it is from a web service via HTTP calls, a local storage or cache, or even return mock data.

Dependency Injection: dependency injection is the idea that any class or function should ask for its dependencies, rather than instantiating it themselves.Dependency injection has huge benefits when we practice it in our applications, as it allows us to create modular, reusable pieces while allowing us to test components and modules easily.
