class ForNode {
    data: any;
    left: ForNode | null;
    right: ForNode | null;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root: ForNode;
    cnt: number;

    constructor(data) {
        let init = new ForNode(data);

        this.root = init;
        this.cnt = 0;
    }

    length() {
        return this.cnt;
    }
    
    insert(data) {
        let newNode = new ForNode(data);
        let current = this.root;

        while (current) {
            if (data === current.data) {
                return;
            }
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    this.cnt++;
                    return;
                }
                current = current.left;
            }
            if (data > current.data) {
                if (!current.right) {
                    current.right = newNode;
                    this.cnt++;
                    return;
                }
                current = current.right;
            }
        }
    }

    // 깊이우선탐색
    DFS() {
        let result: any[] = [];
        let stack = [this.root];

        while (stack.length) {
            let current = stack.pop();

            if (current?.right) {
                stack.push(current.right);
            }
            if (current?.left) {
                stack.push(current.left);
            }

            result.push(current?.data);
        }

        return result;
    }

    // 넢이우선탐색
    BFS() {
        let result: any[] = [];
        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();

            if (current?.left) {
                queue.push(current.left);
            }
            if (current?.right) {
                queue.push(current.right);
            }

            result.push(current?.data);
        }

        return result;
    }

    BFS＿Recursive() {
        let result: any[] = [];
        let queue = [this.root];

        const recursive = () => {
            if (!queue.length) {
                return;
            }

            let current = queue.shift();

            if (current?.left) {
                queue.push(current.left);
            }
            if (current?.right) {
                queue.push(current.right);
            }

            result.push(current?.data);

            recursive();
        }

        recursive();

        return result;
    }
}

const tree = new Tree(5);

tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);

// console.log(tree)
// console.log(tree.DFS())
console.log(tree.BFS())
console.log(tree.BFS＿Recursive())