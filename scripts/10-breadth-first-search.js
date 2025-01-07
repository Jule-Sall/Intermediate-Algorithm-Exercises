// Define the Node class
class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

// Create the tree structure
const root = new Node('A', [
    new Node('B', [
        new Node('D', [
            new Node('I'),
            new Node('J')
        ]),
        new Node('E', [
            new Node('K')
        ])
    ]),
    new Node('C', [
        new Node('G', [
            new Node('L')
        ]),
        new Node('H', [
            new Node('M'),
            new Node('N')
        ])
    ])
]);



/*
                            A
                        B         C
                    D      E   G      H
                I      J   K    L   M    N
*/

function breadthFirstSearch(node) {
    if (!node) return;

    const queue = [node];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);

        if (currentNode.children) {
            queue.push(...currentNode.children);
        }
    }
}

breadthFirstSearch(root);