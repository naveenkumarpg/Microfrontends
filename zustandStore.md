https://www.perplexity.ai/search/give-me-a-details-example-of-h-i8sScALXSz6fOs64rLqTsA

// host/src/zustandStore.js
import { create } from "zustand";

export const useSharedStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));


// remote/src/App.js
import React from "react";
// Use dynamic import from host's exposed module
const useSharedStore = React.lazy(() =>
  import("host/zustandStore").then((mod) => ({ default: mod.useSharedStore }))
);

function UserComponent() {
  const user = useSharedStore((state) => state.user); // Same instance as host
  // ... render user info
}


// host/webpack.config.js
module.exports = {
  // ...
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./zustandStore": "./src/zustandStore.js",
      },
    }),
  ],
};

// remote/src/App.js
import React from "react";
// Use dynamic import from host's exposed module
const useSharedStore = React.lazy(() =>
  import("host/zustandStore").then((mod) => ({ default: mod.useSharedStore }))
);

function UserComponent() {
  const user = useSharedStore((state) => state.user); // Same instance as host
  // ... render user info
}
