class TarjanStrongConnectedComponents {
    private readonly UnvisitedNodeId = -1;

    public sccIndexes: number[][];

    private currentId = 0;
    private readonly stack: number[];
    private readonly ids: number[];
    private readonly lowLength: number[];
    private readonly onStack: boolean[];
    private readonly length: number;
    private readonly adjacency: number[][];

    public constructor(graph: DirectGraph<any>) {
        this.ids = new Array(graph.length).fill(this.UnvisitedNodeId);
        this.lowLength = new Array(graph.length).fill(0);
        this.onStack = new Array(graph.length).fill(false);
        this.stack = [];
        this.length = graph.length;
        this.adjacency = graph.adjacency;
        this.sccIndexes = [];
    }

    public apply() {
        for (let i = 0; i < this.length; i++) {
            if (this.ids[i] === this.UnvisitedNodeId) {
                this.depthFirstSearch(i);
            }
        }
    }

    private depthFirstSearch(id: number) {
        this.stack.push(id);
        this.onStack[id] = true;
        this.ids[id] = this.currentId++;
        this.lowLength[id] = this.ids[id];

        for (let adjacent of this.adjacency[id]) {
            if (this.ids[adjacent] === this.UnvisitedNodeId)
                this.depthFirstSearch(adjacent);

            if (this.onStack[adjacent])
                this.lowLength[id] = Math.min(this.lowLength[id], this.lowLength[adjacent]);
        }

        // If we're at the start of a SCC
        if (this.ids[id] === this.lowLength[id]) {
            let removedNode: number;
            let scc = [];

            do {
                removedNode = this.stack.pop()!;
                this.onStack[removedNode] = false;
                this.lowLength[removedNode] = this.ids[id];
                scc.push(removedNode);
            } while (removedNode !== id);

            this.sccIndexes.push(scc);
        }
    }
}

export class DirectGraph<T> {
    public readonly nodes: T[];
    public readonly adjacency: number[][];

    private readonly presentNodes: Set<T>;

    public constructor() {
        this.nodes = [];
        this.adjacency = [];
        this.presentNodes = new Set<T>();
    }

    public get length() {
        return this.nodes.length;
    }

    public addNode(node: T) {
        if (node in this.presentNodes) return;

        this.nodes.push(node);
        this.adjacency[this.nodes.length - 1] = [];
        this.presentNodes.add(node);
    }

    public addEdge(node1: T, node2: T) {
        // Make sure that both nodes exist
        this.addNode(node1);
        this.addNode(node2);

        let index1 = this.nodes.indexOf(node1);
        let index2 = this.nodes.indexOf(node2);

        this.adjacency[index1].push(index2);
    }

    public getCycles() {
        let algorithm: TarjanStrongConnectedComponents = new TarjanStrongConnectedComponents(this);
        algorithm.apply();
        return algorithm.sccIndexes.map(o => o.map(p => this.nodes[p]))
    }

    public getOrderFor(node: T) {
        let targetIndex = this.nodes.indexOf(node);
        let result: T[] = [];
        let isVisited: boolean[] = new Array(this.length).fill(false);
        this.getOrderForRecursive(targetIndex, isVisited, result);
        return result;
    }

    private getOrderForRecursive(index: number, isVisited: boolean[], result: T[]) {
        isVisited[index] = true;

        for (let connected of this.adjacency[index]) {
            this.getOrderForRecursive(connected, isVisited, result);
        }

        result.push(this.nodes[index]);
    }
}
