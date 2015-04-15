The services app typically hosts external apis or is responsible for recurring jobs that we want to offload from client facing applications.

./start is a bash script with the instructions to properly run this application locally
./deploy is a bash script with the instructions to properly deploy this application
./m is a shortcut for running meteor commands related to packages that will succeed because the PACKAGE_DIRS environment variable is set.