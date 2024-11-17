
// version 0.0.1 - 241117
// ------------------------------------------------------------------------------------------------
// The pm2 configuration file tor starting the node (express) server 
// (which handles Angular SSR requests)
// This configuration script configures the pm2 to run the node (express) server as a pm2 service. 
// Moreover, it also monitors every 1sec. for any updates of the server.mjs file, 
// and if it senses a newer file, it reruns automatically the service.
// -------------------------------------------------------------------------------------------------


module.exports = {
    apps: [
      {
        name: "node-server",
        script: "/usr/share1/nginx/wwwroot/server/server.mjs",
        watch: ["/usr/share1/nginx/wwwroot/server/"],
        ignore_watch: ["node_modules", "logs"],
        watch_delay: 1000,
      }
    ]
  };
  