## Overview
Inspired by Jin Yang's app in Silicon Valley, SeeFood is an end-to-end system for identifying Indian food items and retrieving their nutritional data.


## Features
- Core Model: Developed a Single Shot Detection (SSD) model in PyTorch, implementing custom anchor box generation for multi-class food item localization.

- MLOps: Built a custom experiment tracking framework to log and evaluate model performance across various hyperparameter tuning runs.

- Backend API: Deployed the model using FastAPI, creating a scalable REST API that accepts base64-encoded images and returns detailed classifications and nutritional information.

- Frontend (Mobile): Created a ReactJS mobile application using Expo, enabling users to capture images, interact with the API, and receive real-time nutritional insights on their device.
