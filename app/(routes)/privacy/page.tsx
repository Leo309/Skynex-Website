import React from 'react';

export const metadata = {
  title: 'Privacy Policy | SKYNEX GLOBAL COMMERCE & TECH INC.',
  description: 'Privacy Policy for SKYNEX GLOBAL COMMERCE & TECH INC. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-skynex-dark to-gray-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert">
              <p>
                <strong>Last Updated: April 2, 2025</strong>
              </p>
              
              <p>
                This Privacy Policy describes how SKYNEX GLOBAL COMMERCE & TECH INC. ("we," "us," or "our") 
                collects, uses, and shares information when you use our website skynexdigital.com and any 
                related services (collectively, the "Services").
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect the following types of information when you use our Services:
              </p>
              
              <ul>
                <li>
                  <strong>Personal Information:</strong> When you contact us, register for an account, 
                  or use certain features, we may collect information such as your name, email address, 
                  phone number, company name, and any other information you provide.
                </li>
                <li>
                  <strong>Usage Information:</strong> We automatically collect information about how you 
                  interact with our Services, including your IP address, browser type, pages viewed, 
                  time spent on pages, links clicked, and other browsing information.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar 
                  technologies to enhance your experience, analyze usage, and improve functionality.
                </li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              
              <ul>
                <li>Providing, maintaining, and improving our Services</li>
                <li>Responding to your requests, comments, or questions</li>
                <li>Sending you technical notices, updates, security alerts, and support messages</li>
                <li>Personalizing your experience with our Services</li>
                <li>Analyzing usage patterns to improve our Services</li>
                <li>Protecting against fraudulent, unauthorized, or illegal activity</li>
              </ul>
              
              <h2>Sharing of Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with applicable laws, regulations, or legal processes</li>
                <li>To protect the rights, property, or safety of our users or others</li>
                <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets</li>
              </ul>
              
              <h2>Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information. 
                These may include:
              </p>
              
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Restricting or objecting to our use of your information</li>
                <li>Requesting that we provide your information in a portable format</li>
                <li>Withdrawing consent where we rely on consent to process your information</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              
              <h2>Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized 
                access, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our Services are not directed to children under the age of 13, and we do not knowingly 
                collect personal information from children under 13. If we learn that we have collected 
                personal information from a child under 13, we will promptly delete it.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated Privacy Policy on this page with a new "Last Updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              
              <p>
                SKYNEX GLOBAL COMMERCE & TECH INC.<br />
                Email: privacy@skynexdigital.com
              </p>
              
              <p>
                This website is owned by SKYNEX GLOBAL COMMERCE & TECH INC., registered in British Columbia, Canada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
