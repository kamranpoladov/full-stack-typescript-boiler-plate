# Full-stack TypeScript, Node.js (express), React boilerplate

Strictly-typed boilerplate that allows seemless transfer of data types between server and client

# Usage examples

**Source folder:**

`src` directory contains five subfolders listed below. `server` directory contains all the backend related logic, `client` directory contains all the frontend related logic, `types` contains the data types of project entities and logic for sharing them across server and client. 

![image](https://user-images.githubusercontent.com/42556944/104791543-6e7a7a80-579b-11eb-8cdb-cdf3f1de9bbd.png)

**Sample server endpoints:**

In the examples below, note that the types for return object, params, and post body of an endpoint and determined immediately, as developer inputs the method (GET, POST, etc.) and endpoint ('/testGet'). 

*GET request:*

![image](https://user-images.githubusercontent.com/42556944/104791813-56572b00-579c-11eb-9453-0e3eada3cfca.png)

*POST request:*

![image](https://user-images.githubusercontent.com/42556944/104792003-22303a00-579d-11eb-8768-30e734a725dc.png)

*PUT request:*

![image](https://user-images.githubusercontent.com/42556944/104792028-3d02ae80-579d-11eb-9fc8-5b21988ddecf.png)

*DELETE request:*

![image](https://user-images.githubusercontent.com/42556944/104792043-50157e80-579d-11eb-8c66-656f974825ce.png)

**Sample API interface:**

All API interfaces are to be defined in `src/types/mapping/*`. The types for return object, params, and post body are defined through generic type `RouterParams<ParamsType, PostBodyType, ReturnObjectType>`

`src/types/mapping/test/apiInterface.ts`:

![image](https://user-images.githubusercontent.com/42556944/104792247-0aa58100-579e-11eb-8223-4e1457e21e5b.png)

Frontend requestors are using aforementioned API interface to map endpoint and request method to return type

`src/types/mapping/test/front.ts`:

![image](https://user-images.githubusercontent.com/42556944/104792373-74be2600-579e-11eb-8262-0c8fcb10b347.png)

**Sample React component:**

In React components, it is possible to call aforementioned frontend requestors to make an API call immediately without providing path and method explicitely. For functional components, it would be a good practice to separate requestors into designated hooks, however, for the sake of simplicity, example below shows usage of a requestor right inside a component.

`src/client/TestComponent/TestComponent.tsx`:

![image](https://user-images.githubusercontent.com/42556944/104792594-28271a80-579f-11eb-929d-57bc54b043f8.png)

**Available scripts:**

*Start server:* `yarn server:start` or `npm run server:start`

*Start server in dev mode:* `yarn server:start:dev` or `npm run server:start:dev`

*Start client:* `yarn client:start` or `npm run client:start`

*Check for types compatability:* `yarn test:types` or `npm run test:types`

*ESLint check:* `yarn test:lint` or `npm run test:lint`

*Prettier check:* `yarn test:prettier` or `npm run test:prettier`

*Fix ESLint:* `yarn fix:lint` or `npm run fix:lint`

*Fix Prettier:* `yarn fix:prettier` or `npm run fix:prettier`


# Tech stack

- [TypeScript](https://github.com/microsoft/TypeScript)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios) _(URL fetching)_
- [ESLint](https://eslint.org/) _(code analysis)_
- [Prettier](https://prettier.io/) _(code formatting)_
