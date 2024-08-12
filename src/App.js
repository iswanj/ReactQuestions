import React, { Component, useCallback, useState } from "react";
import "./App.css";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "node_modules",
              children: [
                {
                  name: "left-pad"
                }
              ]
            },
            {
              name: "package.json"
            }
          ]
        }
      ]
    },
    {
      name: "components",
      children: [
        {
          name: "Input",
          children: [
            {
              name: "index.js"
            },
            {
              name: "input.css"
            }
          ]
        },
        {
          name: "Button",
          children: [
            {
              name: "index.js"
            },
            {
              name: "button.css"
            }
          ]
        }
      ]
    },
    {
      name: "package.json"
    },
    {
      name: "index.js"
    }
  ]
};

const Entry = ({ entry, sequence }) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleExpand = useCallback(() => {
    setExpanded(!isExpanded);
  }, [isExpanded]);
  return (
    <div>
      {entry.children ? (
        <button className="folder" onClick={handleExpand}>
          {isExpanded ? "-" : "+"} {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isExpanded && (
        <div style={{ paddingLeft: `${sequence * 10}px` }}>
          {entry.children && (
            <div>
              {entry.children.map((childEntry) => (
                <Entry entry={childEntry} sequence={sequence + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {files.children.map((entry) => (
        <Entry entry={entry} sequence={1} />
      ))}
    </div>
  );
};

export default App;
