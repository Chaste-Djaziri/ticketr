import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Evently",
  description: "Read the terms and conditions that govern your use of Evently's services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white dark:bg-gray-950 py-12 md:py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">Last Updated: March 11, 2025</p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to Evently. These Terms of Service govern your use of our website and services. By accessing or
            using Evently, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not
            access the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Definitions</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>&quot;Service&quot;</strong> refers to the Evently website and platform operated by Evently Inc.
            </li>
            <li>
              <strong>&quot;User&quot;</strong> refers to the individual accessing or using the Service, or the company, or other
              legal entity on behalf of which such individual is accessing or using the Service.
            </li>
            <li>
              <strong>&quot;Event Organizer&quot;</strong> refers to Users who create and manage events on the Service.
            </li>
            <li>
              <strong>&quot;Attendee&quot;</strong> refers to Users who register for and attend events created on the Service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Account Registration</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To use certain features of the Service, you must register for an account. When you register, you agree to
            provide accurate, current, and complete information about yourself. You are responsible for safeguarding
            your password and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Event Organizer Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">If you are an Event Organizer, you are responsible for:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Creating and managing your events</li>
            <li>Setting accurate event details, including date, time, location, and pricing</li>
            <li>Complying with all applicable laws and regulations</li>
            <li>Paying all applicable fees and taxes</li>
            <li>Communicating with your Attendees</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Attendee Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">If you are an Attendee, you agree to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Provide accurate registration information</li>
            <li>Pay all applicable fees for tickets and services</li>
            <li>Comply with all event rules and policies</li>
            <li>Acknowledge that refund policies are set by Event Organizers</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Payments and Fees</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Evently charges fees for the use of certain services. All fees are listed on our website or communicated to
            you at the time of purchase. We use third-party payment processors to process payments. By making a payment,
            you agree to the terms and conditions of these payment processors.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-300">
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of Evently and its licensors. The Service is protected by copyright, trademark, and other laws. Our
            trademarks and trade dress may not be used in connection with any product or service without the prior
            written consent of Evently.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-300">
            In no event shall Evently, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Email:{" "}
            <a href="mailto:legal@evently.com" className="text-primary hover:underline">
              legal@evently.com
            </a>
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

