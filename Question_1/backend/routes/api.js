const express = require('express');
const axios = require('axios');
const router = express.Router();

const AZURE_DEVOPS_ORG = 'your_organization';
const AZURE_DEVOPS_PROJECT = 'your_project';
const AZURE_DEVOPS_TOKEN = 'your_token';

const axiosInstance = axios.create({
  headers: { 'Authorization': `Basic ${Buffer.from(':' + AZURE_DEVOPS_TOKEN).toString('base64')}` }
});

router.get('/projects', async (req, res) => {
  try {
    const response = await axiosInstance.get(`https://dev.azure.com/${AZURE_DEVOPS_ORG}/_apis/projects?api-version=6.0`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Additional routes for pipelines, releases, users, repos...

module.exports = router;
