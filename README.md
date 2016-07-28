# How To

- Download  or ``git clone`` this repo
- Put it in your dev folder
- Navigate to ``underscore`` folder under themes folder through _terminal_ and type in ``npm install``. This will install all the dependencies for this project.
- Once all the dependencies are installed, you can start running ``gulp`` tasks within the gulpfile.js

**Gulp Tasks**

- ``gulp`` this will compile all scss, js, and watch over files through **browsersync**. A browser window will popup and it will display the site*.
- ``gulp style`` this will compile all scss files under sass/ folder and outputs it as **style.css** which is located under the themes folder.
- ``gulp js`` this will compile all js files under js/ folder and outputs it as **main.js** which is located under the themes folder.
- ``gulp utility`` this will copy/move files from the npm modules to its appropriate folder inside our themes. This include the slick carousel, bootstrap, & fontawesome
- ``gulp prod`` this will generate a folder called dist/ which contains all the production files that are needed for production env. This is the folder that is being exported to the server
- 

``*Please note that you must activate your dev server first before you can preview the site``