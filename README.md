# drscanprofile

This project is a mobile-friendly profile showcase application built with Next.js and Tailwind CSS. It allows users to view individual profiles, including display pictures, contact details, profile descriptions, and professional identification details such as PRN numbers for doctors.

## Project Structure

```
drscanprofile
├── src
│   ├── pages
│   │   ├── index.tsx           # Homepage displaying a list of profiles or a welcome message
│   │   └── [profile].tsx       # Dynamic route for individual profile pages
│   ├── components
│   │   ├── ProfileCard.tsx     # Component for displaying profile information
│   │   └── ContactDetails.tsx  # Component for displaying contact details
│   ├── styles
│   │   └── globals.css         # Global styles including Tailwind CSS imports
│   └── types
│       └── profile.ts          # TypeScript interfaces for profile data structure
├── public
│   └── profiles
│       └── foo-bar.jpg         # Sample profile image for Mr. Foo Bar
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # npm configuration and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/drscanprofile.git
   ```

2. Navigate to the project directory:
   ```
   cd drscanprofile
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

- The homepage (`/`) displays a list of profiles or a welcome message.
- Individual profiles can be accessed via unique routes, e.g., `/foo-bar` for Mr. Foo Bar.
- Each profile page includes a display picture, contact details, and a description.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.