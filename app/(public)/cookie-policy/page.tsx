import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Evently",
  description: "Learn about how Evently uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-white dark:bg-gray-950 py-12 md:py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">Last Updated: March 11, 2025</p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This Cookie Policy explains how Evently (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our
            website. By using our website, you consent to the use of cookies as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. What Are Cookies?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used
            to make websites work more efficiently and provide information to the website owners. Cookies can be
            &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device when you go offline, while
            session cookies are deleted as soon as you close your web browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They
              enable core functionality such as security, network management, and account access. You may disable these
              by changing your browser settings, but this may affect how our website functions.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. This helps us improve the way our website
              works.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality
              and personalization. They may be set by us or by third-party providers whose services we have added to our
              pages.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies are set through our site by our advertising partners.
              They may be used by those companies to build a profile of your interests and show you relevant
              advertisements on other sites.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Third-Party Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
            the website, deliver advertisements on and through the website, and so on. These cookies may track your
            browsing habits across different websites and online services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Controlling Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
            ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be
            personalized to you. It may also stop you from saving customized settings like login information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Cookie Preferences</h2>
          <p className="text-gray-600 dark:text-gray-300">
            When you first visit our website, you will be presented with a cookie banner that allows you to accept or
            decline non-essential cookies. You can change your cookie preferences at any time by clicking on the &quot;Cookie
            Settings&quot; link in the footer of our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Updates to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for
            other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to
            stay informed about our use of cookies and related technologies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Email:{" "}
            <a href="mailto:privacy@evently.com" className="text-primary hover:underline">
              privacy@evently.com
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

