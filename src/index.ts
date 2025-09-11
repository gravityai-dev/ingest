import { createPlugin } from "@gravityai-dev/plugin-base";

// Create and export the plugin
const plugin = createPlugin({
  name: "@gravityai-dev/ingest",
  version: "1.0.0",
  description: "Data ingestion nodes for Gravity workflow system",
  
  async setup(api) {
    // Initialize platform dependencies
    const { initializePlatformFromAPI } = await import("@gravityai-dev/plugin-base");
    initializePlatformFromAPI(api);

    // Import and register DocumentParser node
    const { DocumentParserNode } = await import("./DocumentParser/node");
    api.registerNode(DocumentParserNode);

    // Import and register Document node
    const { DocumentNode } = await import("./Document/node");
    api.registerNode(DocumentNode);

    // Import and register SearchWeb node
    const { SearchWebNode } = await import("./SearchWeb/node");
    api.registerNode(SearchWebNode);

    // Import and register ApifyResults node
    const { ApifyResultsNode } = await import("./ApifyResults/node");
    api.registerNode(ApifyResultsNode);

    // Import and register ApifyStarter node
    const { ApifyStarterNode } = await import("./ApifyStarter/node");
    api.registerNode(ApifyStarterNode);

    // Import and register Hyperbrowser node
    const { HyperbrowserNode } = await import("./Hyperbrowser/node");
    api.registerNode(HyperbrowserNode);

    // Import and register GoogleSheet node
    const { GoogleSheetNode } = await import("./GoogleSheet/node");
    api.registerNode(GoogleSheetNode);

    // Import and register credentials
    const { 
      SearchAPICredential, 
      ApifyCredential, 
      HyperbrowserCredential,
      GoogleAPICredential 
    } = await import("./credentials");
    api.registerCredential(SearchAPICredential);
    api.registerCredential(ApifyCredential);
    api.registerCredential(HyperbrowserCredential);
    api.registerCredential(GoogleAPICredential);
  },
});

export default plugin;
