// Your routes file should be clean and concise.
// You are only specifying route definitions here, e.g. the paths for the route, where the route is available (client/server) and possibly naming the route.
// The heavy work for each route like data, waitOn, render, etc. all go in their individual route controller files in the client/controllers or server/controllers folders respectively.

Router.configure({
  	layoutTemplate: 'MasterLayout'
  	, notFoundTemplate: 'NotFound'
	, loadingTemplate: 'Loading'
});