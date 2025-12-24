# Parkinson Tremor Web Application

This project is a browser-based implementation of a Parkinson’s disease tremor assessment system.

## Project Description
The application allows a patient to perform motor tests using a webcam.
Hand movements are tracked in real time, and tremor severity is estimated
based on temporal signal analysis of hand landmark movements.

The system is designed for screening and monitoring purposes,
not for clinical diagnosis.

## Features
- Patient registration
- Real-time webcam access
- Hand landmark detection using MediaPipe Hands
- Motor task execution
- Tremor severity analysis
- Result visualization in the browser

## Technologies Used
- HTML, CSS, JavaScript
- MediaPipe Hands (JavaScript)
- Browser Camera API

## Methodology
Hand landmarks are extracted from the webcam stream.
Vertical displacement of finger landmarks is collected over time.
Statistical analysis (variance-based amplitude estimation) is used
to assess tremor severity.

## Note
The original Python-based Parkinson tremor detection model
was adapted to a web-based environment to allow real-time testing
directly in the browser.

## Disclaimer
This application is intended for educational and research purposes only.
It does not provide a medical diagnosis.

