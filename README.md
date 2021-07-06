# Tests for the @euriklis/sortlib package.

This package tests the sorting package of the euriklis. To run the tests you have to run the following command to the terminal.

```sh
npm start
```
or with the nodemon package:
```sh
npm test
```
To add your own tests go to the ```Tests/Data/```, add your file with data (arrays) which returns on output an object with properties "scope" and "target" and add the file to the index.js file in the Data folder, then go to the Test/src/, add your tests file with the data and import the file in the index.js file of the src folder. Then run the conventional command ```npm start``` for the tests.