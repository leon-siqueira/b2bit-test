# B2bit - Frontend test

This project is a login page that validates and authorizes the credntials and shows the user's informations on the end-point `/user`. The said end-point is restricted to logged users and shows the avatar, full name and email address of the logged user. The authentication token and the user data are provided by an API.

## Visuals

### [Try the application yourself here](https://b2bit-test.vercel.app)

![demo-b2bit](https://github.com/leon-siqueira/b2bit-test/assets/92833638/5322df20-77b1-4db9-b35a-ef647fab82d1)

## Technologies

- React + Vite
- Typescript
- Tailwind
- Cypress
- ESLint

## Setup

0. Ensure that you have Git and NodeJS installed to run the following commands
```zsh
git --version
node -v
```
1. Clone the repository and go to the project directory
```zsh
git clone https://github.com/leon-siqueira/b2bit-test.git
```
2. Ensure that the dependencies are installed
```zsh
npm install
```
3. Ensure that the CSS classes are up-to-date
```zsh
npm run build:css
```
4. Provide the value of the API base url on a `.env` file
```zsh
cp .env.example .env
```
5. Run the tests to ensure everything is running (optional)
```zsh
npx cypress run
```
6. Run the application server
```zsh
npm run dev
```
It will be running on http://localhost:5173/

## Contact

For any questions or feedback, please contact me via LinkedIn [leon-siqueira](https://www.linkedin.com/in/leon-siqueira/)
