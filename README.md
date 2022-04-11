# Tests for the @euriklis/sortlib package.

This package is a npx (executable npm) tester for the @euriklis/sortlib package. The tests written in the es6 mode (import/export) and are put in the Tests folder. To add your own test of the library, please, go to the folder Data, write your test in the same mode like the other tests (like promise) and import the file in the index.js file of the Data folder. In the data you may to import the already written functions from the src folder which simply get your data as input and runs the corresponded result.

To execute the tests please type in the terminal
```
npx @euriklis/tests-for-sortlib 
```