import React from "react";
import { Handle, Position } from "@xyflow/react";

const CustomNode = ({ data }) => {
  console.log("Custom Node Data:", data);

  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "2px 2px 10px black",
        border: "1px solid #ddd",
        width: "220px", 
        textAlign: "center",
        position: "relative", 
      }}
    >
      <h3
        style={{
          margin: "5px 0",
          color: "#333",
          fontSize: "18px",
          fontWeight: "bold",
          whiteSpace: "nowrap", 
          overflow: "hidden", 
          textOverflow: "ellipsis", 
          borderBottom:"1px solid black"
        }}
      >
        {data?.topHeading || "No Title"}
      </h3>

      <p
        style={{
          margin: "5px 0",
          fontSize: "14px",
          color: "#777",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data?.subHeading || "No Subtitle"}
      </p>

      {data?.items?.length > 0 ? (
        <ul style={{ padding: 0, margin: "5px 0", listStyleType: "none" }}>
          {data.items.map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: "12px",
                color: "#555",
                whiteSpace: "nowrap", 
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              • {item}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: "12px", color: "#999" }}>No items</p>
      )}

      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: "#555",
          width: "10px",
          height: "10px",
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: "#555",
          width: "10px",
          height: "10px",
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: "10px",
        }}
      />
    </div>
  );
};

export default CustomNode;
