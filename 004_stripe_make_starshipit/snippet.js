// snippet.js
// Redacted: Stripe to Starshipit CSV row builder
function stripeToCsv(order) {
  // Validate required fields
  if (!order.id || !order.amount || !order.shipping || !order.shipping.address) {
    throw new Error('Missing required order fields');
  }
  // Normalize currency and address
  const amount = parseFloat(order.amount).toFixed(2);
  const address = order.shipping.address.replace(/\n/g, ', ');
  // Map to CSV row
  return [order.id, amount, address];
}

function processOrders(orders) {
  return orders.map(order => {
    try {
      return stripeToCsv(order);
    } catch (e) {
      // Log and skip invalid orders
      console.error('Order error:', e.message);
      return null;
    }
  }).filter(Boolean);
}
// ...CSV writing logic...
