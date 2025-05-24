# snippet.py
# Bubble.io → Email: Robust JSON payload builder and email sender
import json, logging, time

# Config
MAX_RETRIES = 3

# Main entry: Build and send JSON payload via email
def process_form(form_data, recipient):
    try:
        payload = build_payload(form_data)
        send_email_with_retry(recipient, payload)
    except (ValueError, EmailSendError) as e:
        logging.error(f"Form processing failed: {e}")
        raise

# Helper: Validate and build JSON
def build_payload(form_data):
    if not form_data.get("customer") or not form_data.get("order"):
        raise ValueError("Missing required fields: customer/order")
    return json.dumps({"customer": form_data["customer"], "order": form_data["order"]}, indent=2)

# Helper: Email send with retry/backoff
def send_email_with_retry(recipient, payload):
    for attempt in range(1, MAX_RETRIES+1):
        try:
            # Simulate real email send (replace with actual API)
            if not recipient or "@" not in recipient:
                raise EmailSendError("Invalid recipient email")
            # ...email sending logic...
            return
        except Exception as e:
            logging.warning(f"Email send failed (attempt {attempt}): {e}")
            if attempt == MAX_RETRIES:
                raise EmailSendError("Email delivery failed after retries")
            time.sleep(2 ** attempt)

class EmailSendError(Exception): pass
