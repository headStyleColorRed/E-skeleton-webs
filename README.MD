# E-skeleton-webs


E-skeleton-webs is a docker project that will allow you to generate in seconds a web system that will manage

You can search more of my E-skeletons docker projects and try to combine them in order to create a complete backend for your apps.
  - E-skeleton-IOs
  - E-skeleton-webs
  - E-skeleton-web

### API use

Down here you have example code for the events that this app provides:

#### First time setUp
Once this commands underneath are executed and the docker containers are up, the system is ready to add websites
```sh
git clone https://github.com/headStyleColorRed/E-skeleton-webs.git ;
cd E-skeleton-webs && docker-compose up -d ;
```

#### Add website
With a simple ```npm start ```a terminal cli will ask you several questions:
1.  Project's name                                                              // Your projects name
2.  Which url you want to use (example.com)?                                    // The domain you have pointing to that server without the www
3.  Which email do you want to use?                                             // Your email
4.  Source of index files or dist folder?                                       // The github repository where index.html file is root

And just like that your website will be up and going with an https lock.


### Tech

E-skeleton-webs uses a number of open source projects to work properly:

* [node.js] - Evented I/O for the backend
* [enquirer] - Stylish CLI prompts that are user-friendly, intuitive and easy to create.
* [shelljs] -  Implementation of Unix commands on top of the Node.js API

### Installation

E-skeleton-webs requires [Docker](https://www.docker.com/) to run.


### Todos

 - Add testing

License
----

MIT


**Free Software, Hell Yeah!**