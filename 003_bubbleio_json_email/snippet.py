# snippet.py
# Redacted: JSON payload builder for Bubble.io
import json

def build_payload(form_data):
    # Validate required fields
    if "customer" not in form_data or "order" not in form_data:
        raise ValueError("Missing required fields")
    payload = {
        "customer": form_data["customer"],
        "order": form_data["order"]
    }
    return json.dumps(payload, indent=2)

def send_email(recipient, payload):
    # ...email sending logic with retry...
    try:
        # send email
        pass
    except Exception as e:
        # log and retry
        pass

