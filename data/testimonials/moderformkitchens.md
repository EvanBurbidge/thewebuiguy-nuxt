---
name: 'mf-kitchens'
title: Modern Form Kitchens
year: 02 December 2019
color: '#0083aa'
author: 'evanb54'
id: 'mf-kitchens-testimonial'
published: false
---

The hardest thing about knowing this stuff is learning it… said by me, late in the evening, around 1:20 am.

In order to understand where we are going to go with this talk we need to understand where we have been. To look forward we must always sneak a peek backwards to see how it was done and how we can do it better. To this end I am going to discuss with you the history, impact and results that docker has had on development teams ( when it's done right ). 

What is docker
Docker was created as an internal project within dotCloud a PAAS company based in france. It was shown to the public at PyCon in 2013. It was released as an open source project in March 2013. It allows you to create what are known as “containers” which create operating system level virtualization. 

The history of docker
Notable Dates:
- September 2013 collaboration around fedora red hat and open shift
- November 2014 docker containers announced for the EC2 tech stack
- December 2015 IBM announces a strategic partnership with Docker.
- June 2015 Docker worked on a new vendor and operating system independent system for containers.
- October 2015 the project has over 25 thousand stars on github with over 1,100 contributors and over 6500 forks.
- May 2016, docker contributors include cicso, google, ibm, microsoft and red hat.
- Jan 2017 analysis of linkedin profile mentions show that docker has been mentioned over 160% since 2016. 
- Jan 2017 the software has been downloaded 13 Billion Times

Docker Images
So how do we use docker, how does it do what it does, and what does all the terminology mean. In simple terms an image is a set of layers that install and run as you or someone else describes them within a Dockerfile. An image is an inert, immutable, file that’s a snapshot of a container. Images are created by a build command and will remain dormant until they are run by a container. Images can be composed of layers of other images allowing minimal amount of data to be send when transferring images over networks. 

Docker Containers
To use a programming metaphor, if an image is a class, then a container is an instance of the class. Containers are why we use docker. They allow us to containerize our applications onto multiple system types. A container will run an instance of an image. They contain their own environments, configs and are lightweight. These run the application, whereas the image provides a blueprint. 

Docker Services
A service is a fancy name for a container, as it can be replicated. Let’s imagine we have an events and a locations service. I will need at least 3 instances of my events service, but I will only need one instance of my locations service. The reason for this is that while the events can be read and written to, they will be read more frequently than they are written to. In this case we can scale up the service behind a load balancer to handle the amount of traffic that is coming into our server. Our locations service may only be called when an event is created and thus needs to deal with less traffic than the events service. This allows us to have less instances of this. 

When we think about a distributed system app we may think about different “services” or microservices that sit on a server. Services are just “containers in production” A service will only run one image but it allows for easier scaling. We can define services quite easily by using a docker-compose file



Docker compose
But these things take a ton of config to run right? Pfffft wrong! This is where we start to get a bit complex. We’re going to write a nice simple app and we’re going to deploy it with a DB and a reverse proxy all within about ten minutes. 

WRITE DOCKER COMPOSE TEST THINGY

Compose just provides us a tool for running and defining multi container docker applications. With compose you must write it in YAML to configure the application. With a single command we can now deploy our application and test it. Docker compose can work in all environments, dev, test, production. 

Docker Swarms
Hey evan, earlier on you mentioned distributed systems

Docker Stacks


