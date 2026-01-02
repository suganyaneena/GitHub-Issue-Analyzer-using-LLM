# Project Title " GitHub Issue Analyzer using LLM " 

# Description
    git add .A Node.js application that fetches GitHub issues, stores them locally, and analyzes them using an LLM.

# How to Run the Server

    git clone https://github.com/suganyaneena/GitHub-Issue-Analyzer-using-LLM.git
    cd your-repo-name

# Install dependencies

    npm install

# Create .env file

    PORT=3000
    OPENAI_API_KEY=your_api_key_here
    GITHUB_TOKEN=your_github_token_here

# Start the server

     start

# Server will run at:

    http://localhost:3000/scan
    http://localhost:3000/analyze

# Why I Chose This Local Storage Option
    Chosen Option: File-based JSON storage

    I used a local JSON file (cache/issues.json) to store GitHub issues.

# Reasons:

    1 Simple to implement and understand

    2 No external database dependency

    3 Suitable for small-scale and local development

    4 Faster iteration during development

# Trade-offs:

    1 Not ideal for large datasets

    2. No concurrent write safety

    3. Not suitable for production scale

    Note : For production, a database like MongoDB or PostgreSQL would be more appropriate.

# AI Prompts Used

## Prompts for Coding Help

    Fix OpenAI authentication error in Node.js

    Create an  structure node js Express routes cleanly Express.js route that fetches GitHub issues using the GitHub REST API.

    How to cache API responses using filesystem

## Prompts for Bug Fixing

    ReferenceError results is not defined in async function"

    How to properly pass issues to OpenAI API"