// snippet.js
// Redacted: Webflow order webhook handler
app.post('/webflow/webhook', async (req, res) => {
  // ...existing code...
  const order = req.body;
  await sheets.appendRow([order.id, order.status, order.amount]);
  res.sendStatus(200);
});
