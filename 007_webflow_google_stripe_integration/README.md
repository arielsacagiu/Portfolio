# 007_webflow_google_stripe_integration

**Webflow Order Sync: Google Sheets + Stripe**

## Project Context
A client needed to reconcile orders across Webflow, Google Sheets, and Stripe for unified reporting and fulfillment. The integration had to be resilient to webhook failures and data inconsistencies.

## Problem Solved
- Automated sync of Webflow orders to Google Sheets for reporting.
- Handles webhook failures, missing fields, and API errors.
- Ensures data integrity across platforms.

## Technical Approach
- Modular JavaScript webhook handler for order ingestion.
- Input validation and robust try/catch for operational resilience.
- Modular row appending with error escalation.
- High-context comments for maintainability.

## Tech Stack & Highlights
- **Tech:** Node.js, Express, Webflow, Google Sheets API, Stripe
- **Highlights:**
  - Modular helpers for row append and error handling
  - Robust error escalation and webhook reliability
  - Handles all major cross-platform edge cases

## Outcome
- Reliable, automated order sync for client operations.
- Reduces manual reconciliation and reporting errors.

## For Reviewers
- See `snippet.js` for centerpiece logic: modular, robust, and integration-focused.
- Note: error handling, webhook reliability, and cross-platform awareness.
