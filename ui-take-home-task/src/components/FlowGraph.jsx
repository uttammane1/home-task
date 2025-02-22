import { useCallback } from "react";
import "reactflow/dist/style.css";
import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";

import CustomNode from "./CustomNode";

import { initialEdges, initialNodes } from "../data";

const nodeTypes = { custom: CustomNode };

const FlowGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

 
  const onConnect = useCallback(
    (params) => {
      console.log("New connection:", params);
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        border: "1px solid black",
        margin: "10px auto",
        backgroundColor: "black",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={2} />
      </ReactFlow>
    </div>
  );
};

export default FlowGraph;
