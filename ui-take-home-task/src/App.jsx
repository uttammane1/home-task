import { ReactFlowProvider } from "@xyflow/react";
import FlowGraph from "./components/FlowGraph";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <ReactFlowProvider>
      <div className="flex">
        <FlowGraph />
        <Sidebar />
      </div>
    </ReactFlowProvider>
  );
};

export default App;
