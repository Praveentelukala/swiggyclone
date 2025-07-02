# MongoDB Installation and Setup Guide for Windows

This guide will help you install MongoDB Community Edition on your Windows machine, register it as a Windows service, and start the MongoDB server.

## Step 1: Download MongoDB

1. Go to the official MongoDB download page: https://www.mongodb.com/try/download/community
2. Select the latest version for Windows.
3. Download the MSI installer.

## Step 2: Install MongoDB

1. Run the downloaded MSI installer.
2. Choose "Complete" setup type.
3. Make sure to check the option "Install MongoDB as a Service".
4. Choose "Run service as Network Service user".
5. Complete the installation.

## Step 3: Verify MongoDB Service

1. Open Command Prompt as Administrator.
2. Run the command:
   ```
   sc query MongoDB
   ```
3. You should see the service status as RUNNING.

## Step 4: Start MongoDB Service (if not running)

If the service is not running, start it with:
```
net start MongoDB
```

## Step 5: Verify MongoDB is Running

1. Open a new Command Prompt.
2. Run:
   ```
   mongo
   ```
3. You should enter the MongoDB shell.

## Step 6: Restart Your Project

1. Stop your running project servers.
2. Run:
   ```
   npm run dev
   ```
3. The backend should now connect successfully to MongoDB.

---

If you encounter any issues during installation or setup, please let me know.
