---
name: 'micro-frontends'
title: Benefits of micro frontends
year: 13 February 2020
color: '#0083aa'
id: 'mfe-blog'
author: 'evanb54'
published: true
description: |
  An introduction to the benefits of micro frontend architecture on a frontend system.
---
There are quite a number of reasons to use distributed system architecture. Werner Vogles of amazon states “we can scale our operation independently, maintain unparalleled system availability and introduce new services quickly without the need for massive reconfiguration.” By focusing on the scalability and component independence amazon has been able to increase their speed of delivery while also improving on their safety, in the form of scalability and availability. 

Many companies who adopt this architectural pattern are striving towards common goals and benefits. The goal of improving software delivery speed as a functional scope is realized. The goal of maintaining software system safety as scale increases. 


In their InfoQ article UK e-retailer Gilt is an early adopter of microservices architecture. Their VP of engineering states that the benefits include:

- Lessening of dependencies between teams.
- Allows for initiatives to run in parallel
- Supports multiple technologies, languages and or frameworks
- Enables graceful degradation of a service.
- Promotes ease of innovation through “disposable code” let it fail and move on.

### Incremental upgrades
When in an organisation rewriting their entire application is simply out of the question. There is no way that a team can down tools during the development of a product, to do so would lose them both time, money and possibly even clients. Micro frontends allow an approach that lets developers strangle the old legacy code out of the application piece by piece, while in conjunction continue development of new features without the worry of causing the overall application to fail.

This approach allows for developers to both maintain old cold, while developing new features in a totally separate code base which can increase both speed and safety. The safety is that if one of these new features is not 100% by the time it reaches production, at least it is only that one feature and not the entire application. 

Micro frontend's allow us a chance to test out new technologies on a case by case basis. We can easily upgrade a library in one of our applications without affecting the overall project. These changes can then be measured and analysed in a contained and isolated environment, which would lead to an easier decision on whether or not to move it into the rest of the codebase.

### Isolated Modules
The code for each of our modules is going to live in its own repo, project or folder. These smaller pieces of code  tend to be easier for us to work on as there are not 1 => N amount of projects in these projects there is just the project. We can ensure that each application has a thick line to create its bounded context. However this isolation is not a silver bullet that will ensure small bundle sizes, smaller code bases, we still need to put effort into our code and its quality. It is easy to depend on the approach to manage how large our codebase becomes but this is one pit that we cannot fall into.

We do however gain one advantage to this approach and that is that our service can now be deployed by itself. Build times may go from minutes down to seconds. This reduces the amount of time we are waiting to see if a build has been successful, if a build has failed or if a build is going go to production. With our monolithic application we need to deploy the entire application for one small fix in one small area of the application.

### Autonomous Teams

As a company manages to break their monolithic application into smaller apps this is going to lead to having fully independent teams who only work on their section of the product. Teams will have full ownership of their vertical slices of the application and more and more companies will move away from having horizontal teams who look after common parts of the project. For this to work teams need to be formed around vertical slices of business functionality rather than around technical capabilities. While doing this we do need to ensure that a team is not going off on a tangent and creating their own UI libraries to use within a project. 

### Team Communications
This approach to development also means that there must be an increase within the organization of communication between teams. At all times. Dan Abramov once put forth the argument, “what games would feel like if every designer put a different game engine into it”. In opposition to this statement it is clear that with this approach to programming it is even more crucial that teams speak with each other on a daily, if not hourly basis.

### Conclusions
There are both benefits and drawbacks to this appraoch of frontend architecture, you are allowing teams to be completely isolated, which in turn will mean that it is up to each team to ensure a clear line of communication remains open.
But once the initial hiccups have been overcome this approach will allow both company and teams to scale from 1 => N amount of projects, teams and services.
