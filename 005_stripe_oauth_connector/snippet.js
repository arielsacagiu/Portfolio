// snippet.js
// Redacted: Stripe OAuth callback handler
app.get('/stripe/callback', async (req, res) => {
  const { code } = req.query;
  // Exchange code for access token
  let account;
  try {
    account = await stripe.oauth.token({ grant_type: 'authorization_code', code });
    // Store account.id and tokens securely
    await saveAccountToDB(account.stripe_user_id, account.access_token, account.refresh_token);
  } catch (e) {
    // Handle token exchange errors
    return res.status(400).json({ error: 'OAuth failed', details: e.message });
  }
  // Listen for webhook events
  // ...webhook logic...
  res.redirect('/dashboard');
});

async function saveAccountToDB(userId, accessToken, refreshToken) {
  // ...secure DB storage logic...
}
