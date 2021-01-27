import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
      name: '10',
      children: [{name: 15, children: [{name: 5}]}, {name: 20},]
    };

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '5000px', height: '2000px' }}>
      <Tree orientation='vertical' data={orgChart} />
    </div>
  );
}