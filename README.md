# Expo Web Browser Fix

This repository contains a pre-configured Expo project that is specifically set up to work in Safari and other browsers. It addresses the common connection issues that occur when trying to access the Expo development server in a Docker container.

## Solution Overview

This solution takes a different approach to browser compatibility:

1. Instead of using the Metro bundler directly (which can have issues with Safari), we:
   - Build a static web version of the app with `expo export:web`
   - Serve it using a simple web server on port 3000
   - Configure the server to listen on all network interfaces (0.0.0.0)

2. This approach avoids the common connection issues with Metro bundler in browsers.

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/jjcopeland32/expo-web-browser-fix.git
   cd expo-web-browser-fix
   ```

2. Make sure Docker and Docker Compose are installed on your system.

3. Start the container:
   ```bash
   docker-compose up -d
   ```

4. Wait a couple of minutes for the build process to complete. You can check the progress with:
   ```bash
   docker logs -f financial-wellness-frontend
   ```

5. Access the application in Safari at:
   ```
   http://localhost:3000
   ```

## Customizing

1. The React Native app code is in the `app` directory.
2. You can modify `App.js` and other files to implement your desired functionality.
3. Any changes to the app code will require a container restart to rebuild the web version.

## Troubleshooting

If you encounter any issues:

1. Check the container logs:
   ```bash
   docker logs financial-wellness-frontend
   ```

2. Ensure port 3000 is not already in use on your system.

3. If you make changes to the app code, restart the container:
   ```bash
   docker-compose restart frontend
   ```