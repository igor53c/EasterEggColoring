export function colorize(nodes, availableColors) {
    const nodesCopy = JSON.parse(JSON.stringify(nodes));

    const findAvailableColor = (node, allNodes) => {
        const neighborColors = new Set();
        node.neighbors.forEach(neighborId => {
            const neighbor = allNodes.find(n => n.id === neighborId);
            if (neighbor && neighbor.color) {
                neighborColors.add(neighbor.color);
            }
        });

        return availableColors.find(color => !neighborColors.has(color));
    };

    nodesCopy.forEach(node => {
        node.color = findAvailableColor(node, nodesCopy);
    });

    return nodesCopy;
}
