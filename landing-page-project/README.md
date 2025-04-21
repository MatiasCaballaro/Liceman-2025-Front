# Landing Page Project

This project is a landing page application that includes a top menu and a hero section with a login form. The application communicates with an authentication service to authenticate users and manage tokens.

## Project Structure

```
landing-page-project
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── api
│   │   │   │   └── authenticationController.service.ts
│   │   │   ├── model
│   │   │   │   ├── authenticationRequest.ts
│   │   │   │   └── authenticationResponse.ts
│   │   │   └── variables
│   │   │       └── index.ts
│   │   ├── components
│   │   │   ├── hero
│   │   │   │   ├── hero.component.html
│   │   │   │   ├── hero.component.scss
│   │   │   │   └── hero.component.ts
│   │   │   ├── login-form
│   │   │   │   ├── login-form.component.html
│   │   │   │   ├── login-form.component.scss
│   │   │   │   └── login-form.component.ts
│   │   │   └── top-menu
│   │   │       ├── top-menu.component.html
│   │   │       ├── top-menu.component.scss
│   │   │       └── top-menu.component.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   └── dashboard.component.ts
│   │   │   └── landing
│   │   │       ├── landing.component.html
│   │   │       ├── landing.component.scss
│   │   │       └── landing.component.ts
│   │   ├── services
│   │   │   ├── auth.service.ts
│   │   │   └── token.service.ts
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **User Authentication**: Users can log in using their credentials, which are sent to the authentication API.
- **Token Management**: The application stores the authentication token and refresh token in localStorage for session management.
- **Dashboard**: After logging in, users are redirected to a dashboard that displays their name and avatar.
- **Responsive Design**: The layout is designed to be responsive and user-friendly.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd landing-page-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bugs you find.

## License

This project is licensed under the MIT License.