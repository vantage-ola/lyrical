
![logo](./src/img/logo-3.png)

## Development
---
### 1. Clone the repository:
```shell
git clone git@github.com:vantage-ola/lyrical.git
```
### 2. Create your branch:
Name your branch based on the feature you are working on. For example, Writing README branch would be called `feature/write_readme`:
```shell
git checkout -b <your branch name>
```
### 3. Create local environment ```.env```:
Create .env file in root directory. Get your Genius API key here [https://rapidapi.com/brianiswu/api/genius/](https://rapidapi.com/brianiswu/api/genius/) and place it in this variable.
```
REACT_APP_API_KEY=[GENIUS_API_KEY]
```
### 4. Start the application:
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```shell
npm start
```
### 5. Build the application for production:

Builds the app for production to the `build` folder.
```shell
npm run build
```
