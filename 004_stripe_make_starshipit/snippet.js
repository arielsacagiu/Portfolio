// snippet.js
// Stripe → Starshipit: Robust CSV row builder with retry
const MAX_RETRIES = 3;

// Main: Process and write orders to CSV with error handling
function exportOrdersToCsv(orders, csvWriter) {
  const rows = orders.map(order => {
    try {
      return stripeToCsv(order);
    } catch (e) {
      // Log and skip invalid orders (missing fields, bad data)
      console.error('Order error:', e.message);
      return null;
    }
  }).filter(Boolean);
  writeCsvWithRetry(rows, csvWriter);
}

// Helper: Validate and normalize Stripe order to CSV row
function stripeToCsv(order) {
  if (!order?.id || !order?.amount || !order?.shipping?.address)
    throw new Error('Missing required order fields');
  const amount = parseFloat(order.amount).toFixed(2);
  const address = order.shipping.address.replace(/\n/g, ', ');
  return [order.id, amount, address];
}

// Helper: Write CSV with retry/backoff
function writeCsvWithRetry(rows, csvWriter) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      csvWriter.write(rows); // replace with real CSV writer
      return;
    } catch (e) {
      console.warn(`CSV write failed (attempt ${attempt}):`, e.message);
      if (attempt === MAX_RETRIES) throw new Error('CSV export failed after retries');
      // Exponential backoff
      sleep(2 ** attempt * 100);
    }
  }
}

function sleep(ms) { Atomics.wait(new Int32Array(1), 0, 0, ms); }
