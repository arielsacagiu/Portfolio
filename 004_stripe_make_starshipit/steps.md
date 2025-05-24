# steps.md

1. Extracted Stripe order data via API
2. Mapped data to Starshipit CSV format
3. Automated CSV file generation
4. Integrated with Make.com for workflow automation
5. Tested with real and sample orders

**Challenges & Solutions**
- Challenge: Handling inconsistent Stripe order data and Starshipit’s strict CSV requirements.
- Solution: Implemented data normalization, fallback defaults, and logging for failed rows, ensuring no order was lost in translation.
