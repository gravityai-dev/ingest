import { getPlatformDependencies, type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import { ApifyStarterExecutor } from "./executor";

export const NODE_TYPE = "ApifyStarter";

function createNodeDefinition(): EnhancedNodeDefinition {
  const { NodeInputType } = getPlatformDependencies();

  return {
    packageVersion: "1.0.16",
    type: NODE_TYPE,
    name: "Apify Starter",
    description: "Starts an Apify actor run with a list of URLs",
    category: "Ingest",
    color: "#00B4A6",
    logoUrl: "https://res.cloudinary.com/sonik/image/upload/v1751511484/gravity/icons/apifyLogo.png",

    inputs: [
      {
        name: "signal",
        type: NodeInputType.OBJECT,
        description: "Array of URLs to scrape",
      },
    ],

    outputs: [
      {
        name: "runId",
        type: NodeInputType.STRING,
        description: "The ID of the started Apify run",
      },
      {
        name: "status",
        type: NodeInputType.STRING,
        description: "Initial status of the run",
      },
    ],

    configSchema: {
      type: "object",
      properties: {
        actorId: {
          type: "string",
          title: "Actor/Task ID",
          description: "Apify actor ID (e.g. apify/web-scraper) or task ID (e.g. username~task-name)",
          default: "",
          placeholder: "gavinpay~adgm-company-register",
        },
        urls: {
          type: "string",
          title: "URLs to Scrape",
          description:
            "JSON array of URLs to scrape. Use template syntax like {{inputs.adgmfetcher1.firms.map(f => f.url)}}",
          default: "[]",
          "ui:field": "template",
        },
        waitForCompletion: {
          type: "boolean",
          title: "Wait for Completion",
          description: "Wait for the actor run to complete before continuing",
          default: false,
        },
        maxWaitTime: {
          type: "number",
          title: "Max Wait Time (seconds)",
          description: "Maximum time to wait for completion",
          default: 300,
          "ui:dependencies": {
            waitForCompletion: true,
          },
        },
      },
      required: ["urls"],
    },

    credentials: [
      {
        name: "apifyCredential",
        required: true,
        displayName: "Apify API",
        description: "Apify API credentials for starting actor runs",
      },
    ],
  };
}

const definition = createNodeDefinition();

export const ApifyStarterNode = {
  definition,
  executor: ApifyStarterExecutor,
};

export { createNodeDefinition };
