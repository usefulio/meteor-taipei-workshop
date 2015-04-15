App is the main application that customers of this product will be using. E.g. it's the www.product.com app.

The reason it's not named "www" is because currently (as of Meteor 1.0.3.2 and below) the meteor mobile build system has issue that prevents the mobile build from completing when the top-level meteor project folder is named "www".

So... it's "app". Feel free to rename to something more descriptive for your project if desired. Remember to change the name in the top-level start and deploy folders as well as this project's start and deploy files if you do rename it.

./start is a bash script with the instructions to properly run this application locally
./deploy is a bash script with the instructions to properly deploy this application
./m is a shortcut for running meteor commands related to packages that will succeed because the PACKAGE_DIRS environment variable is set.