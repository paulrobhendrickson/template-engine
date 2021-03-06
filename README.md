# template-engine

This is an app to organize your work team. It runs using js.node and is a CLI app. When the index.js file is run by typing 'node index.js' the user will be prompted a series of questions to get information about their work team. All employees will have the majority of questions the same, but the user will receive a different question based on what role the employee is fulfilling. Managers will be asked what their office number is. Interns will be asked what school they attend. Engineers will be asked what their github username is. This information will be dynamically created and made into an HTML file named after the name of their team. The layout of the team members depends on the number of members on the team so that there will never be more than 4 employees in any given row, and higher rows will have fewer employees than the lower ones, and they are all as evenly distrubted as possible.

Demonstration of the app working can be found here:

https://www.youtube.com/watch?v=TucAFfgbJBA

Images of two different layouts can be seen here:

![5 card layout](https://github.com/paulrobhendrickson/template-engine/blob/master/images/Screen%20Shot%202019-12-12%20at%2011.21.18%20PM.png?raw=true)

![13 card layout](https://github.com/paulrobhendrickson/template-engine/blob/master/images/Screen%20Shot%202019-12-12%20at%2011.21.25%20PM.png?raw=true)

Image of passing all tests found here:

![passing test image](https://github.com/paulrobhendrickson/template-engine/blob/master/images/Screen%20Shot%202019-12-12%20at%2010.18.34%20PM.png?raw=true)
