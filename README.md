# MARVEL'S FAVORITES

https://marvels-favorites.vercel.app/

## How to run

First go to https://developer.marvel.com/account and get a public and private keys. You might have to create an account for this.

Next you have to create a `.env.local` file and edit it to include the keys, as specified in `.env`:

```
NEXT_PUBLIC_KEY=<YOUR PUBLIC API KEY>
PRIVATE_KEY=<YOUR PRIVATE API KEY>
```

Install dependencies:

```sh
npm install
```

* Development:
    
    ```sh
    npm run dev
    ```

* Production:

    ```sh
    npm run build
    npm run start
    ```

* Tests:

    ```sh
    npm test
    ```

* Linter:

    ```sh
    npm run lint
    ```

## Technologies

- ReactJS
- NextJS
- Jest
