const express = require('express');
const k8s = require('@kubernetes/client-node');
const app = express();
const port = 5000;

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

app.get('/api/namespaces', async (req, res) => {
  try {
    const response = await k8sApi.listNamespace();
    res.json(response.body.items);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get('/api/pods', async (req, res) => {
  try {
    const response = await k8sApi.listPodForAllNamespaces();
    res.json(response.body.items);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
