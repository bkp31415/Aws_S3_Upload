# Aws_S3_Upload
Uploading Files in Aws S3 using MEAN Stack.

# Installation 

Use `npm install` in both Angular and Node folders to install the Node Modules.

# Adding Credentials

Create a file named s3.env.js in 'Teamsb-fileupload-node\teamsb-fileupload-node\app\config\' directory
and add th following contents:

    const env = {
        AWS_ACCESS_KEY: 'your_access_key', 
        AWS_SECRET_ACCESS_KEY: 'your_secret_key',
        REGION : 'your_region', 
        Bucket: 'your_bucket' 
    };
    
    module.exports = env;

## Development server
 
Run `ng serve` for a Angular dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

And `npm start` for starting Node listening server `( http://:::8080/ )`.


# The following is to be executed in Angular Folder
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Docs](https://angular.io/cli) or

[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the NodeJs CLI use `npm help <term> [<terms..>]` or go check out the[Nodejs CLI Docs](https://nodejs.org/api/cli.html) or

[Nodejs CLI README](https://github.com/npm/cli).

## For more references:
[Angular Docs](https://angular.io/docs) 

[Nodejs Docs](https://nodejs.org/en/docs/)

[Express api v4.x Docs](https://expressjs.com/en/4x/api.html)

[Mongodb](https://docs.mongodb.com/)
