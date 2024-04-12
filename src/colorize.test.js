import { colorize } from './colorize';

describe('colorize function', () => {
    test('Scenario 1: Coloring the eggs - simple triangle graph', () => {
        const nodes = [
            { id: "A", color: "#eeeeee", neighbors: ["B", "C"] },
            { id: "B", color: "#eeeeee", neighbors: ["A", "C"] },
            { id: "C", color: "#eeeeee", neighbors: ["A", "B"] }
        ];
        const availableColors = ["#ff0000", "#00ff00", "#0000ff"];
        const coloredNodes = colorize(nodes, availableColors);

        coloredNodes.forEach(node => {
            expect(availableColors).toContain(node.color);
        });

        coloredNodes.forEach(node => {
            node.neighbors.forEach(neighborId => {
                const neighbor = coloredNodes.find(n => n.id === neighborId);
                expect(neighbor.color).not.toBe(node.color);
            });
        });
    });

    test('Scenario 2: Coloring a larger graph with more nodes', () => {
        const nodes = [
            { "id": "A", "color": "#eeeeee", "neighbors": [ "E", "B" ] },
            { "id": "B", "color": "#eeeeee", "neighbors": [ "A", "C" ] },
            { "id": "C", "color": "#eeeeee", "neighbors": [ "B", "D" ] },
            { "id": "D", "color": "#eeeeee", "neighbors": [ "C", "E" ] },
            { "id": "E", "color": "#eeeeee", "neighbors": [ "D", "A" ] }
        ];
        const availableColors = ["#ff0000", "#ffff00", "#00ff00", "#0000ff"];
        const coloredNodes = colorize(nodes, availableColors);

        coloredNodes.forEach(node => {
            expect(availableColors).toContain(node.color);
        });

        coloredNodes.forEach(node => {
            node.neighbors.forEach(neighborId => {
                const neighbor = coloredNodes.find(n => n.id === neighborId);
                expect(neighbor.color).not.toBe(node.color);
            });
        });
    });

});
