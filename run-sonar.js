// This script runs sonar-scanner with environment variables in system or .env file
require("dotenv").config();
const { exec } = require("child_process");

//  Check if SONAR_TOKEN exist
const SONAR_TOKEN = process.env.SONAR_TOKEN
  ? `-Dsonar.token=${process.env.SONAR_TOKEN} `
  : "";
const SONAR_HOST = process.env.SONAR_HOST
  ? `-Dsonar.host=${process.env.SONAR_HOST} `
  : "";

exec("sonar-scanner " + SONAR_TOKEN + SONAR_HOST, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
