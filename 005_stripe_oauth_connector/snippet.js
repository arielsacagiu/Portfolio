// snippet.js
// Stripe OAuth: Secure callback handler with modular error handling
app.get('/stripe/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Missing OAuth code' });
  try {
    const account = await stripe.oauth.token({ grant_type: 'authorization_code', code });
    await saveAccount(account.stripe_user_id, account.access_token, account.refresh_token);
    // Optionally trigger webhook sync here
    return res.redirect('/dashboard');
  } catch (err) {
    logError('OAuth failed', err);
    return res.status(400).json({ error: 'OAuth failed', details: err.message });
  }
});

// Helper: Save account details with error awareness
async function saveAccount(userId, accessToken, refreshToken) {
  try {
    // ...secure DB storage logic...
  } catch (err) {
    logError('DB save failed', err);
    throw new Error('Account storage error');
  }
}

function logError(context, err) {
  console.error(`[${context}]`, err.message || err);
}
