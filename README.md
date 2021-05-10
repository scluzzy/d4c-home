# Homepage Using React

## What it is?

This project includes a homepage for d4c © link-https://d4c-home.herokuapp.com/ created using reactJS. It will be using react router and react hooks. It  has a working navbar, some button and card components which lead to specific pages including the apps offerred by d4c ©.



## How to start using this project?

Install NodeJS, ReactJS, git & your favourite text editor (VScode) in your machine, after that,
```
$ git clone https://github.com/scluzzy/d4c-home
$ cd d4c-home
$ npm install react-router-dom
$ npm start

```



## How it works?
 ###### ps- doesnt include the working of d4c apps refer to their workings respectively. (its given down in the end)
 

#### App() in App.js
 In the App function we see the use of Router component from react-router-dom which is a tool that helps in routing to inbuilt paths like the home page, services, and other modules.
 
 
#### Navbar() in Navbar.js
 This function is used to show the navbar, in this function we use hooks and usestate(). <Link> is basically <a> from react-router-dom.
 
 ![image](https://user-images.githubusercontent.com/64918959/117671527-8d20d900-b1b1-11eb-85f4-27bdded3ee40.png)
 ^fn to hide buttons for mobile menu (when resize window)
 
 ![image](https://user-images.githubusercontent.com/64918959/117671627-acb80180-b1b1-11eb-962c-33db28348821.png)
 ^to remove some errors showing/unshowing the buttons
 
 ![image](https://user-images.githubusercontent.com/64918959/117671762-d2450b00-b1b1-11eb-9711-91e2b5d9d5ea.png)
  ^'onclick' closes mobile menu and 'Link' opens given path /" "
  
 ![image](https://user-images.githubusercontent.com/64918959/117672050-205a0e80-b1b2-11eb-9635-5fe983d9cde5.png)
  ^'click' changes the menu icon to close icon if true
  
 ![image](https://user-images.githubusercontent.com/64918959/117671995-11735c00-b1b2-11eb-8999-7945f26297a4.png)
  ^'click' changes the close icon to menu icon if false
  

#### Button() in Button.js
 This function is basically used to load custom button components by varying different styles and sizes.

 ![image](https://user-images.githubusercontent.com/64918959/117672974-053bce80-b1b3-11eb-8a71-bd53af58e753.png)
 ^fn checks and applies button style[primary,outline]
 
![image](https://user-images.githubusercontent.com/64918959/117673010-0c62dc80-b1b3-11eb-9eb9-1181eda6a4de.png)
 ^fn checks and applies button stize[medium,large]


#### Herosection() in Herosection.js
 This function is used to load the section under the navbar in the home page.
 
 
#### Cards() in Cards.js
 This function is used to load the section under the herosection in the home page.
 
 
#### CardItem() in CardItem.js 
 This function is used to take in props/parameters from Cards.js and make and show the card components using those props in the cards section of the homepage.
 
 
#### Footer() in Footer.js
 This function is used to show/call the footer component.
 

