# 008_certtracker_pro

**Automated Sales Tax Certificate Management**

## Project Context
A SaaS client needed to automate the management and expiration tracking of sales tax certificates, integrating with multiple APIs and providing reliable reminders to customers.

## Problem Solved
- Automated detection of expiring certificates and proactive reminders.
- Handles edge cases: missing data, email/API failures, and logging.
- Ensures compliance and operational reliability.

## Technical Approach
- Modular TypeScript logic for expiration detection and reminder sending.
- Robust try/catch and error logging at all levels.
- Modular helpers for reminders and error escalation.
- High-context comments for maintainability.

## Tech Stack & Highlights
- **Tech:** Node.js, TypeScript, PostgreSQL, Airtable, Make.com, QuickBooks API
- **Highlights:**
  - Modular helpers for reminders and logging
  - Robust error escalation and compliance focus
  - Handles all major operational edge cases

## Outcome
- Reduced compliance risk and manual certificate tracking.
- Increased automation and reliability for client ops.

## For Reviewers
- See `snippet.ts` for centerpiece logic: modular, robust, and compliance-focused.
- Note: error handling, compliance awareness, and integration points.
