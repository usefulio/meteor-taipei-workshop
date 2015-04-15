Your views folder will probably contain the most amount of files in the whole project.

We capitalize the name of our views. E.g. Template.Dashboard.events(...); not Template.dashboard.events(...);

The standard folders are:

/layouts for your application layouts.
/shared for templates that are shared across views

Think of a view as one page or one screen.

Each view should be in a folder named after the view.
In each of those folders should be at least one HTML file named after the view, and at least one JS file named after the view. You may optionally have a LESS file for the view in this same folder if there are styles specific to that view.

Views (and view names) should generally speaking directly correspond to a route.

E.g. if you have a route named "/dashboard". You should have a view folder named "dashboard" and inside it a "dashboard.html" and a "dashboard.js".

Unlike all of our other conventions, you may have more than one template inside of a view's HTML file, but all templates in that file should relate directly to and only to that view. The same rule applies to the corresponding JS file.