// snippet.js
// Webflow → Google Sheets: robust webhook handler
app.post('/webflow/webhook', async (req, res) => {
  try {
    const order = req.body;
    if (!order?.id || !order?.status || !order?.amount)
      throw new Error('Missing order fields');
    await appendOrderRow(order);
    res.sendStatus(200);
  } catch (e) {
    console.error('Webhook error:', e.message);
    res.status(400).json({ error: e.message });
  }
});

// Helper: Modular row append with error awareness
async function appendOrderRow(order) {
  try {
    await sheets.appendRow([order.id, order.status, order.amount]);
  } catch (e) {
    // Handle Google Sheets API errors
    throw new Error('Sheet append failed: ' + e.message);
  }
}
