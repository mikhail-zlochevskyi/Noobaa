# Noobaa

Write in Node.js two components:

First: Server

Should be a simple HTTP server listening to 8080. Responding to a single request:
/hello - return the string "world" for it
    The server comes with a config.js file, telling it which port to listen on, default is 8080, but if something else is written it will take the port from the config file.

Second:
Test.

The test should connect to a remote linux machine (vbox, esx, whatever) and run the server component (you can assume the server code and the config.js file are there).

After the server is run the test should check the following:
1. /hello requests to the server's IP on port 8080 are answered
2. Other requests are not answered
3. The test should change the IP in the config.js and restart the server
4. /hello should now answer on the new port
5. Block communication on the remote server (FW) see that /hello is not being answered (dropped)
