# G-DOCS

## Introduction

G-DOCS is a web application that allows users to create, edit, and store documents online in real-time. The application supports multiple users collaborating on the same document simultaneously with an intuitive and user-friendly interface.

## Key Features

- **Create and Edit Documents**: Users can create new documents and edit content with a rich text editor.
- **Real-time Storage**: All changes are automatically saved and synchronized instantly.
- **Multi-user Collaboration**: Allows multiple users to edit a document at the same time.
- **Edit History**: Track the history of document modifications.
- **User Authentication**: Register, log in, and manage document access permissions.
- **Access Control**: Assign different permission levels to users, such as view-only, edit, or admin access.
- **Export and Import**: Supports exporting documents in multiple formats (PDF, DOCX) and importing existing documents for seamless workflow.

## Technologies Used

- **Frontend**: NextJS, Tailwind CSS, ShadCn/ui
- **Backend**: Convex
- **Realtime Collaboration**: Liveblocks.io
- **Authentication**: Clerk
- **Editor**: Tiptap
- **Hosting and Deployment**: Vercel for frontend, Convex for backend

## Installation

### Requirements

- Node.js >= 20

### Installation Guide

1. Clone the repository:
   ```sh
   git clone https://github.com/RiverNguyen/G-Docs.git
   cd g-docs
   ```
2. Install dependencies:
   ```sh
   npm i --legacy-peer-deps
   ```
3. Configure environment variables:

   - Create a `.env` file and add the necessary information:
     ```env
     CONVEX_DEPLOYMENT=
     NEXT_PUBLIC_CONVEX_URL=
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     LIVEBLOCKS_SECRET_KEY=
     ```

4. Start the application:
   ```sh
   npm run dev
   ```
5. Access the application at `http://localhost:3000`

## Contribution

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push the branch.
4. Submit a pull request and describe your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
