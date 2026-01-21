# **App Name**: FurahaTalla Marketplace

## Core Features:

- User Authentication: Secure authentication using Firebase Auth with email, password, and phone number support.
- Harvest Listing Creation: Farmers can create detailed listings for future harvests, specifying crop type, quantity, date, location and price.
- Contract Generation Tool: Automatically generate contract drafts when a buyer initiates a forward contract, pre-filled with farmer, buyer, and harvest details. An LLM will consider crop type, current market conditions, past deals, buyer/seller history and the specifics of the contract being proposed in order to arrive at suitable payment terms. These will be presented, explained and justified to both the buyer and seller.
- Digital Contract Signing: Enable buyers and farmers to digitally sign contracts with timestamped signatures stored in Firestore, compliant with local regulations.
- Payment Tracking: Track payment status (pending, paid) for advance and final payments with admin confirmation for simulation purposes.
- Delivery Tracking: Monitor delivery status (upcoming, delivered, completed) to ensure contract fulfillment.
- Role-Based Dashboards: Provide customized dashboards for farmers, buyers, and admins, displaying relevant information such as active contracts, income, deliveries, and analytics.

## Style Guidelines:

- Primary color: A vibrant green (#90EE90) to represent growth and agriculture, reflecting the agri-tech focus of the application. It creates a sense of freshness and aligns with the theme of forward harvest.
- Background color: A light off-white (#F5F5DC) to provide a clean and accessible backdrop, ensuring readability and usability.
- Accent color: A warm orange (#FFA07A) to highlight calls to action and important information, providing a clear visual contrast.
- Body and headline font: 'PT Sans', a humanist sans-serif, will provide a modern look combined with warmth and personality, suitable for both headlines and body text.
- Use clear, intuitive icons to represent different crop types, contract statuses, and dashboard functions, improving usability.
- Implement a responsive layout that adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.
- Use subtle animations and transitions to provide feedback and guide users through the contract lifecycle, enhancing engagement.