# SKYNEX Website Updates

This document outlines the recent updates made to the SKYNEX website.

## Brand Changes

1. **Branding Update**: Changed primary brand name from "SKYNEX GLOBAL COMMERCE & TECH INC." to "SKYNEX DIGITAL"
   - Updated all general website content to use "SKYNEX DIGITAL"
   - Retained legal entity name "SKYNEX GLOBAL COMMERCE & TECH INC." in legal documents (Privacy Policy, Terms of Service)
   - Updated meta information, SEO titles, and descriptions

2. **Copyright Notice**: Updated footer copyright notice to use the brand name
   - Changed from: "© [Year] SKYNEX GLOBAL COMMERCE & TECH INC. All rights reserved."
   - To: "© [Year] SKYNEX DIGITAL. All Rights Reserved."

## UI Improvements

1. **Light Mode Support**: Fixed text visibility issues in light mode
   - Added appropriate text colors for light mode throughout the site
   - Ensured consistent readability of all sections in both light and dark modes
   - Enhanced glassy card elements to render properly in light mode

2. **Team Section**: Removed redundant "Our Team & Partners" section from About page

3. **Email Contact Updates**: Updated email addresses and links
   - Added new departmental emails:
     - General Inquiries: hello@skynexdigital.com
     - Product Feedback: feedback@skynexdigital.com
     - Technical Support: support@skynexdigital.com
     - Sales Inquiries: sales@skynexdigital.com
   - Updated contact form to match these new categories
   - Added clickable mailto: links for all email addresses

## Legal Compliance

1. **Terms of Service**: Updated to clearly identify the legal entity
   - Added appropriate disclaimers about "SKYNEX GLOBAL COMMERCE & TECH INC." operating under the brand name "SKYNEX DIGITAL"
   - Maintained legal entity name in all liability, indemnification, and intellectual property clauses

2. **Privacy Policy**: Updated to clearly identify the data controller
   - Added clear statements about legal responsibility
   - Maintained consistent branding approach

## Technical Improvements

1. **Theme Switching**: Restored theme switching functionality
   - Default theme is determined by user system preferences
   - Toggle switch works properly to change between light and dark modes

2. **Visual Consistency**: Ensured visual elements work in both themes
   - Updated glassmorphism effects for light mode context
   - Fixed contrast issues for important text elements
   - Maintained modern design aesthetics across both themes

## How to Run This Project

1. **Clean Install**:
   ```bash
   rm -rf node_modules .next
   npm install
   ```

2. **Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

Note: Make sure you have Node.js version 18 or higher installed.
