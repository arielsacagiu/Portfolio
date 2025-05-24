// snippet.ts
// Redacted: Certificate expiration check logic
async function checkExpiringCertificates(db) {
  // Find certificates expiring in the next 30 days
  const expiring = await db.certificates.find({
    expiresAt: { $lte: addDays(new Date(), 30) }
  });
  for (const cert of expiring) {
    try {
      await sendReminder(cert.customerEmail, cert.expiresAt);
      // Log reminder sent
      await db.reminders.insert({ certId: cert.id, sentAt: new Date() });
    } catch (e) {
      // Handle email/API errors
      logError(cert.id, e.message);
    }
  }
}

function logError(certId, msg) {
  // ...log to DB or alert admin...
}
