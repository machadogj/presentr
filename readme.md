Use the browser on your mobile device to send commands to your LibreOffice presentation in OSX.

<img src="http://cdn.machadogj.com/uploads/presentr.png"></img>

# Summary

- It uses applescript to send commands to the LibreOffice application.
- Uses node.js Express to host a website you can browse.
- Uses jQuery Mobile on the client side to create a mobile-friendly app.

# Features

- Start / Pause a timer to keep in mind how much time you have left in your presentation.
- Next / Prev your slides.

# Installation

Clone this repository

	git clone https://github.com/machadogj/presentr

Install dependencies with npm

	cd presentr
	npm install

Run the web server

	node server.js

# Usage

- Open your presentation in LibreOffice, and start it (F5).
- Start the server (see Installation)
- Browse your computer's IP and server's port (9999) from your phone (or iPod). ie:	
	http://192.168.0.12:999
- Make sure to disable "Lock Screen" in your phone.
- Give kick-ass presentation

# TODOs

- For the time being, and given that I need to catch a flight, it only supports LibreOffice.
- If it doesn't work, you may or may not have to enable "Access to assistive devices" in your OSX preferences.