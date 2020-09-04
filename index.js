const inOrder = node => {
    if(node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if(node.right) {
        inOrder(node.right)
    }
}

const findOrAdd = (rootNode, newNode) => {
    if (newNode.data > rootNode.data) {
        if (!rootNode.right) {
            rootNode.right = newNode;
        }
        else {
            return findOrAdd(rootNode.right, newNode)
        }
    }
    else if (newNode.data < rootNode.data) {
        if (!rootNode.left) {
            rootNode.left = newNode;
        }
        else {
            return findOrAdd(rootNode.left, newNode);
        }
    }
    else if (newNode.data === rootNode.data) {
        return true;
    }
}

const max = node => {
    return node.right ? max(node.right) : node;
}

const min = node => {
    return node.left ? min(node.left) : node;
}
