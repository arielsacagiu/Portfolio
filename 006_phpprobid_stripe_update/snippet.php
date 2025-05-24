// snippet.php
// Redacted: Stripe payment intent creation
$stripe = new \Stripe\StripeClient($apiKey);
try {
    $intent = $stripe->paymentIntents->create([
        'amount' => $amount,
        'currency' => 'usd',
        'metadata' => ['user_id' => $userId],
        // ...other params...
    ]);
    // Save intent ID and status
    savePaymentIntent($intent->id, $intent->status);
} catch (Exception $e) {
    // Log error and notify admin
    error_log('Stripe error: ' . $e->getMessage());
    notifyAdmin($e->getMessage());
}

function savePaymentIntent($id, $status) {
    // ...DB logic...
}
function notifyAdmin($msg) {
    // ...email logic...
}
