// snippet.ts
// Certificate expiration: robust reminder and error handling
export async function checkExpiringCertificates(db: any) {
  try {
    // Find certificates expiring in the next 30 days
    const expiring = await db.certificates.find({
      expiresAt: { $lte: addDays(new Date(), 30) }
    });
    for (const cert of expiring) {
      try {
        // Send reminder and log success
        await sendReminder(cert.customerEmail, cert.expiresAt);
        await db.reminders.insert({ certId: cert.id, sentAt: new Date() });
      } catch (err) {
        // Handle email/API errors with context
        logReminderError(cert.id, err.message);
      }
    }
  } catch (err) {
    // Handle DB/query errors at the top level
    logReminderError('DB', err.message);
    throw new Error('Certificate check failed');
  }
}

// Helper: Modular error logger
function logReminderError(context: string, msg: string) {
  // Log to DB or alert admin with context
  // ...logging logic...
}
