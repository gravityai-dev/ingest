import { getPlatformDependencies, type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import { DocumentExecutor } from "./executor";

export const NODE_TYPE = "Document";

function createNodeDefinition(): EnhancedNodeDefinition {
  const { NodeInputType, NodeConcurrency } = getPlatformDependencies();

  return {
    packageVersion: "1.0.22",
    type: NODE_TYPE,
    name: "Document",
    description:
      "Caches and manages document content during workflow execution. Provides lazy loading and memory management for large files.",
    category: "Ingest",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
    color: "#4A90E2",

    inputs: [
      {
        name: "signal",
        type: NodeInputType.OBJECT,
        description: "Document file with metadata and optional content",
      },
    ],

    outputs: [
      {
        name: "output",
        type: NodeInputType.OBJECT,
        description: "Document operation result with content and cache stats",
      },
    ],

    configSchema: {
      type: "object",
      properties: {
        file: {
          type: "object",
          title: "File",
          description: "Document file to cache",
          default: "",
          "ui:field": "template",
        },
        maxFileSizeMB: {
          type: "number",
          title: "Max File Size (MB)",
          description: "Maximum file size to cache in MB",
          default: 50,
          minimum: 1,
        },
      },
    },
  };
}

const definition = createNodeDefinition();

export const DocumentNode = {
  definition,
  executor: DocumentExecutor,
};

export { createNodeDefinition };
