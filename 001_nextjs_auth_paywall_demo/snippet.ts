// snippet.ts
// Next.js API route: Stripe-authenticated premium content
import { getSession } from 'next-auth/client';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (!session?.user?.id) throw new AuthError('User not authenticated');
    const paid = await verifyStripePayment(session.user.id);
    if (!paid) throw new PaymentRequiredError('Active payment required');
    // Success: return premium resource
    return res.status(200).json({ data: 'Premium content here' });
  } catch (err) {
    // High-context error handling
    if (err instanceof AuthError) return res.status(401).json({ error: err.message });
    if (err instanceof PaymentRequiredError) return res.status(403).json({ error: err.message });
    console.error('Paywall API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper: Robust payment verification
async function verifyStripePayment(userId: string): Promise<boolean> {
  // Real Stripe check: fetch latest invoice/payment status for user
  try {
    const customer = await stripe.customers.list({ email: userId, limit: 1 });
    if (!customer.data.length) return false;
    const invoices = await stripe.invoices.list({ customer: customer.data[0].id, limit: 1 });
    return invoices.data[0]?.status === 'paid';
  } catch (err) {
    // Stripe/network error fallback
    console.error('Stripe check failed:', err);
    return false;
  }
}

// Custom error types for clarity
class AuthError extends Error {}
class PaymentRequiredError extends Error {}
