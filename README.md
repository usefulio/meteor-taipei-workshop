./start is a bash script with the instructions to properly run this entire product suite
./deploy is a bash script with the instructions to properly deploy this entire product suite

/app is the main customer facing application (e.g. www.project.com)

/admin is the admin app (e.g. admin.project.com)

/services is the app responsible for running period tasks and/or serving an external api so that this work is offloaded from the main apps (e.g. services.project.com or api.project.com)

/private-packages contains common code shared between all applications in this product suite
	/core the base package shared between all applications in this suite

If your product requires more applications simply copy one of the existing app folders into a new folder with a new name.

You will need to change the name of the new project in it's start and deploy and the top-level start and deploy files.