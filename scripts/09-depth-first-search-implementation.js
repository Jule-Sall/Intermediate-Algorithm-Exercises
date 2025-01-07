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


function depthFirstSearch(node){
    if(!node)
        return;
    node.children.forEach(child =>{
        depthFirstSearch(child);
    })

    console.log(node.value);

}
depthFirstSearch(root);
