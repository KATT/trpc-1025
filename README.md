# trpc-1025

Minimum reproducible case for https://github.com/trpc/trpc/discussions/1025.

An Express+TRPC server, and React+TRPC client. The client is bootstrapped and compiled using Vite. The monorepo uses Yarn v3, with PnP.

The issue is that when type checking the client (using `yarn tsc`), we observe errors relating to server-side typechecking.

# Reproducing

```bash
yarn
cd packages/client
yarn tsc
```

## Expected outcome

The client compiles.

## Actual outcome

```
../../.yarn/__virtual__/@trpc-react-virtual-f133f1ecd3/0/cache/@trpc-react-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-6f182fd388-e6c7db2e9e.zip/node_modules/@trpc/react/dist/declarations/src/createReactQueryHooks.d.ts(30,70): error TS2307: Cannot find module 'packages/client/src/internals/TRPCClient' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/adapters/node-http/types.d.ts(1,23): error TS2688: Cannot find type definition file for 'node'.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/adapters/node-http/types.d.ts(2,18): error TS2307: Cannot find module 'http' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/adapters/node-http/types.d.ts(3,16): error TS2307: Cannot find module 'qs' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/adapters/standalone.d.ts(1,23): error TS2688: Cannot find type definition file for 'node'.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/adapters/standalone.d.ts(2,18): error TS2307: Cannot find module 'http' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/http/internals/types.d.ts(1,23): error TS2688: Cannot find type definition file for 'node'.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/http/internals/types.d.ts(3,33): error TS2307: Cannot find module 'url' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/subscription.d.ts(1,23): error TS2688: Cannot find type definition file for 'node'.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/subscription.d.ts(2,30): error TS2307: Cannot find module 'events' or its corresponding type declarations.
../../.yarn/cache/@trpc-server-npm-9.8.1-katt-issue-1020-pin-2021-09-27-12-36-16.6-cdb5a7a4be-e62c21a45b.zip/node_modules/@trpc/server/dist/declarations/src/subscription.d.ts(45,63): error TS2339: Property 'off' does not exist on type 'SubscriptionEventEmitter<TOutput>'.
```

# Running in development mode

In two separate windows, run:

```
cd packages/server
yarn dev
```

```
cd packages/client
yarn dev
```

Visit http://localhost:10010.

# Running in production mode

Run the following to build the client:

```
cd packages/client
yarn vite build
```

Note, the above skips the typechecking phase (which is where we encounter the error), but the compiled product _works as expected_, indicating the errors are strictly type-checking related.

Run the following to build the server:

```
cd packages/server
yarn build
```

Run the server as follows:

```
cd packages/server
yarn start
```

Visit http://localhost:10020.
