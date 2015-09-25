# HelpMonger Development Tools

## Prerequisites

### NodeJS & NPM
NodeJS is google's javascript engine that allows us to run javascript as a service.  It also comes with a nify tool called NPM which helps us manage packages. The most common option is to install NodeJS and npm using the [official installer](https://nodejs.org/download/). However, if you are on a Mac, it is better if you install it through homebrew. I highly recommend [John Papa's](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) tutorial for installing npm without sudo.  

### Required NPM packages
After you succesfully install nodeJS and NPM, you need to install the following packages: 
* Cordova (cordova)
* Ionic Framework (ionic)
* Nodemon (nodemon)
* Bower (bower)
* Gulp (gulp)

You can install each package globally by running **npm install (package_name) -g** or you can install them all by running the command below:
```sh
npm install cordova ionic nodemon bower gulp -g 
```

### Git
Git is our version control system. We use it because it’s easy, fast, and powerful. The client can be installed [here](https://git-scm.com/downloads). Just choose the correct version for your operating system and follow the on-screen instructions. 

### Your favorite Text Editor
I use sublimetext but feel free to use your own or any of the others below.
  -  [Sublime Text](http://www.sublimetext.com/) 
  - [Brackets](http://brackets.io/)
  - [Atom](https://atom.io/)

### MongoDB
MongoDB is our NoSQL Database. It’s highly scalable and by allowing us to store JSON objects directly in the table, we can make changes on the fly. Below are install instructions for each environment: 

  -   [Windows](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
  -   [linux](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-linux/?_ga=1.267487758.1025625016.1426642002)
  -   [Os X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/?_ga=1.267487758.1025625016.1426642002)

### RoboMongo (Optional)
RoboMongo provides a nice user interface for working with MongoDB. It’s similar to PHPMyAdmin and SQL Management Studio. You can download the official version [here] (http://robomongo.org/) 

### Installation

After you clone the Helpmonger repository to your desktop, run the command below to install all npm packages. 
```sh
$ npm install
```

### Running the project (from browser)
To run the project for the first time, run the following command: 
```sh
$ ionic serve
```

### Running the project from IOS simulator 
To run the project on IOS for the first time, run the following commands: 
```sh
$ npm install ios-sim -g
$ ionic platform add ios
$ ionic build ios
$ ionic run ios
```


