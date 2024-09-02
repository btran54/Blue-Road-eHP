# Azur Lane eHP (Effective Health Points) Database

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)

## Introduction
Blue Road eHP is a user friendly adaptation of the complicated and otherwise hard-to-understand data from the hit mobile game, Azur Lane. It allows the user to easily search for data pertaining to each in-game character rather than manually search through an Excel spreadsheet with thousands of entries.

### Installation Guide
1. **Clone Repository**:
Using HTTPS:
```sh
git clone https://github.com/btran54/Blue-Road-eHP.git
```
OR
Using SSH:
```sh
git clone git@github.com:btran54/Blue-Road-eHP.git
```
2. **Install Global Dependencies**:
```sh
cd Blue-Road-eHP
npm install
```
3. **Install Dependencies for Front-End**:
```sh
cd ../public
npm install
```
4. **Install Dependencies for Back-End**:
```sh
cd ../server
npm install
```

## Configuration
1. **Back-end**: Create a `.env` file in the `server` directory with unique key:
```
MONGO= 'key'
PORT=8080
```

## Usage
1. Return to the root directory.
2. Launch at the root directory using:
```sh
npm start
```
3. Access the application using local loopback localhost link, which should look like this:
```sh
http://localhost:8080/
```