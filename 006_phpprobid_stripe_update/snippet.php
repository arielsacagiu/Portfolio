// snippet.php
// Stripe payment intent: robust creation and error handling
$stripe = new \Stripe\StripeClient($apiKey);

try {
    $intent = createPaymentIntent($stripe, $amount, $userId);
    savePaymentIntent($intent->id, $intent->status);
} catch (Exception $e) {
    logAndNotify('Stripe payment failed', $e);
    throw $e; // escalate for upstream handling
}

// Helper: Create payment intent with validation
function createPaymentIntent($stripe, $amount, $userId) {
    if (!$amount || !$userId) throw new Exception('Missing amount or userId');
    return $stripe->paymentIntents->create([
        'amount' => $amount,
        'currency' => 'usd',
        'metadata' => ['user_id' => $userId],
    ]);
}
function savePaymentIntent($id, $status) {
    // ...DB logic...
}
function logAndNotify($context, $e) {
    error_log("[$context] " . $e->getMessage());
    notifyAdmin($e->getMessage());
}

function notifyAdmin($msg) {
    // ...email logic...
}
