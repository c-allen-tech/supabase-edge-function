backend-end run application commands:
For installing dependencies:
npm install

For back-end app run locally:
node app.js

step-by-step setup supabase:

Create a Supabase Account:
Go to Supabase and sign up for a free account.

Set Up a New Project:
After signing in, create a new project.

Create a New Database Table:
In your Supabase project dashboard, navigate to the SQL editor or the interface to create a new table.
Name the table students.

Define the following columns:
id (UUID, primary key)
first_name (String)
last_name (String)
email (String, unique)
age (Integer)
Execute the SQL command to create the table.

Insert Dummy Data:
Insert at least 5 records into the students table with dummy data. You can do this through the SQL editor or using the interface provided by Supabase.
steps to Run and View Data Locally:
1. Set Up Your Project

setup edge-function project locally:

Create a new directory for your project:

Initialize a new Node.js project using npm:
npm init -y

Install the Supabase JavaScript client (@supabase/supabase-js):
npm install @supabase/supabase-js


2. Write Your Edge Function
Create Your Edge Function File:
Create a new JavaScript file for your edge function (e.g., getStudents.js) in your project directory.


Write Your Edge Function Code:
Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_KEY with your actual Supabase project URL and API key.
Write the function code to fetch data from your Supabase database and return it as a JSON response.



------------------------------------------
To get the supabaseUrl and supabaseKey for your Supabase project, you need to retrieve them from your Supabase project settings. Here’s how you can find these details:

Log in to Supabase:
Go to Supabase and log in to your account.


Select Your Project:
Once logged in, select or create the project where you want to access the database and functions.


Navigate to Project Settings:
Look for a "Settings" or "Project Settings" option in the Supabase dashboard. This is usually found in the sidebar or top navigation menu.

Find API Information:
In the project settings, you should find sections or tabs related to API keys, URLs, and other project-specific configurations.

Retrieve Supabase URL:
The Supabase URL (supabaseUrl) is typically displayed as the base URL for accessing your project’s API endpoints. It will look something like https://your-project-id.supabase.co.

Get API Key:
The Supabase API key (supabaseKey) is a secret key used to authenticate API requests to your Supabase project. It is often provided in the project settings under API keys or similar sections.