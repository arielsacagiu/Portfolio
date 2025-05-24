# 004_stripe_make_starshipit

**Stripe to Starshipit: Automated CSV Sync**

## Project Context
A logistics client needed to automate the export of Stripe order data into a strict CSV format compatible with Starshipit for shipping fulfillment. The workflow had to handle real-world data inconsistencies and ensure reliable delivery.

## Problem Solved
- Automated transformation of Stripe order data to Starshipit CSV.
- Normalized and validated inconsistent address/currency fields.
- Edge-case handling for missing or malformed orders.

## Technical Approach
- Modular JavaScript functions for order mapping and CSV writing.
- Retry/backoff logic for CSV write failures.
- Logs and skips invalid orders for operational resilience.
- Clear, high-context comments for maintainability.

## Tech Stack & Highlights
- **Tech:** JavaScript, Stripe API, Starshipit, Node.js
- **Highlights:**
  - Modular helpers for order normalization
  - Retry/backoff for CSV writing
  - Explicit validation and error logging

## Outcome
- Reduced manual CSV prep and error rates for shipping ops.
- Increased automation and reliability of order handoff.

## For Reviewers
- See `snippet.js` for centerpiece logic: modular, robust, and edge-aware.
- Note: retry/backoff, normalization, and error handling.
