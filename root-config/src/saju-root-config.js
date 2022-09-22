import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

// registerApplication({
//   name: "@saju/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@saju/header",
//   app: () => System.import("@saju/header"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@saju/app1",
//   app: () => System.import("@saju/app1"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@saju/app2",
//   app: () => System.import("@saju/app2"),
//   activeWhen: ["/app2"]
// });

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});
