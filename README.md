This is a prototype for Heart attack alert system, which will be implemented in watches later on :)

# Installation

## <span style="color:blue;">For Windows</span>

### 1. Clone the Repository(h1) first open Command Prompt or PowerShell and clone the project repository:

```
git clone https://github.com/Justreadingbro/heart-attack-alert-system.git

cd heart-attack-alert-system
```

### 2. Install Dependencies
   
Once inside the project folder, install the required dependencies using npm:
```
npm install
```
This will install all the dependencies listed in package.json, including Express, Twilio, and other necessary packages.

### 3. Set Up Environment Variables
   
Create a .env file in the root directory of your project to store sensitive information like your Twilio credentials.

Example .env file:
```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
```
Make sure to replace the placeholders with your actual Twilio credentials.

### 4. Run the Server
   
After installing dependencies and setting up the .env file, you can start the server with:

```
npm start
```
This will start the server on http://localhost:3000.


## For Linux (Ubuntu)

### 1. Clone the Repository
   
Open the Terminal and clone the project repository:

```
git clone https://github.com/your-username/heart-attack-alert-system.git

cd heart-attack-alert-system
```
### 2. Install Dependencies

Once inside the project folder, install the required dependencies using npm:

```
npm install
```
This will install all the dependencies listed in package.json, including Express, Twilio, and other necessary packages.

### 3. Set Up Environment Variables
   
Create a .env file in the root directory of your project to store sensitive information like your Twilio credentials.

Example .env file:
```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
```
Make sure to replace the placeholders with your actual Twilio credentials.

### 4. Run the Server
   
   
After installing dependencies and setting up the .env file, you can start the server with:

```
npm start
```
This will start the server on http://localhost:3000.
