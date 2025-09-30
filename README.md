🌊 Blue Carbon Ledger
A Blockchain-Based Blue Carbon Registry and MRV System providing verifiable truth for carbon credits.

This project was developed by Team Syntax (Team ID: 738) for the Smart India Hackathon 2025 (Problem Statement ID: SIH25038).

🧐 About the Project
Blue carbon ecosystems—like mangroves, seagrasses, and wetlands—are Earth's most powerful natural carbon sinks, storing up to 5 times more carbon per hectare than tropical forests. Despite their critical role in mitigating climate change, India lacks a credible system to measure, verify, and monetize the carbon these habitats store.

Blue Carbon Ledger addresses this gap by creating a transparent, fraud-proof, and efficient platform. We leverage Blockchain, AI, and satellite data to connect conservation projects directly with corporations and investors, building a trustworthy marketplace for blue carbon credits. Our mission is to unlock the economic potential of marine conservation and accelerate climate action.

✨ Key Features
Our platform is designed to be a comprehensive solution, offering unique features that set it apart from existing carbon credit systems:

🔗 Immutable Blockchain Registry: Verified carbon credits are minted as NFTs on the Polygon blockchain, ensuring complete transparency, traceability, and eliminating the risk of double-counting.

🛰️ AI-Powered MRV: Our system uses PyTorch and XGBoost models to analyze satellite imagery and biodiversity data (soil quality, fish population) for robust Monitoring, Reporting, and Verification (MRV), reducing manual overhead by up to 70%.

🇮🇳 Government Integration: We verify land ownership for restoration projects by integrating with official Land Record Certificates (SATBARA) via OCR and Generative AI, preventing greenwashing.

📈 Global Analytics Dashboard: An interactive dashboard provides real-time data on carbon credit pricing, market liquidity, trading history, and overall climate impact for all stakeholders (Corporates, NGOs, and Government).

🤖 AI-Powered Assistants:

A Generative AI Report Assistant standardizes and automates the creation of MRV reports from raw data.

An AI Chat Assistant provides instant support and knowledge access for all platform users.

🌱 Smart Biodiversity Index: A unique AI-powered index that provides a precise calculation of credits (1 Credit = 1 Ton CO₂ absorbed) based on holistic ecosystem health metrics.

🛠️ Tech Stack
We use a modern, robust, and scalable technology stack to power the Blue Carbon Ledger.

Category

Technologies

Frontend

React.js, Axios, Ethers.js, TailwindCSS

Backend

Node.js, Python, FastAPI

Blockchain

Polygon, Solidity, Truffle

Database & Storage

MongoDB, Redis (for caching), IPFS (via Pinata for decentralized storage)

AI / ML

PyTorch, XGBoost

Authentication

JSON Web Tokens (JWT)

Infrastructure

AWS, Supabase

🏛️ System Architecture
Our platform is built on a sophisticated, end-to-end architecture ensuring data integrity, transparency, and efficiency.

Workflow:

Data Submission: NGOs and local communities upload project details, monitoring data, and drone/satellite imagery.

Backend Processing: The Node.js backend performs initial duplicate checks, verifies land ownership via government records, and stores metadata in MongoDB and large files on IPFS.

AI Validation: The ML Server, powered by FastAPI, analyzes the submitted data using PyTorch and XGBoost models to calculate the carbon credit value and detect anomalies or fraud.

Credit Minting: Once validated, a smart contract written in Solidity is executed on the Polygon network to mint a unique Carbon Credit NFT.

Marketplace & Dashboard: The minted NFT is sent to the stakeholder's wallet and becomes available for trading. Corporations can view, buy, and retire credits via the ReactJS dashboard.

Analytics: The AWS Analytics Engine provides real-time credit pricing, market trends, and generates global impact reports.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v18.x or later)

Yarn or npm

Python (v3.9 or later)

Docker (Optional, for containerized setup)

Installation
Clone the repo

git clone [https://github.com/sanchit-borikar/carbon-reef-ledger.git](https://github.com/sanchit-borikar/carbon-reef-ledger.git)
cd carbon-reef-ledger

Install Frontend Dependencies

cd client
npm install

Install Backend Dependencies

cd ../server
npm install

Set up Environment Variables
Create a .env file in both the client and server directories. Refer to the .env.example files for the required variables.

Run the Application

Run Frontend:

cd client && npm start

Run Backend:

cd server && npm start

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📧 Contact
Team Syntax
Sanchit Borikar
Veer Gandhi
Tanuja Gawali
Samruddhi Chavan
Sumit Gavali
Harshal Bhonde

Project Link: https://github.com/sanchit-borikar/carbon-reef-ledger
