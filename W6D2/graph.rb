class GraphNode 
    attr_accessor :val, :neighbors 

    def initialize(val)
        self.val = val 
        self.neighbors = []
    end

    def bfs(starting_node, target_value)
        queue = [starting_node]
        visited = []

        until queue.empty? 
            current_node = queue.shift 
            unless visited.include?(current_node)
                return current_node.val if current_node.val == target_value 
                visited << current_node 
                queue += current_node.neighbors
            end
        end
        return nil 
    end
end

if __FILE__ == $PROGRAM_NAME 
    a = GraphNode.new('a')
    b = GraphNode.new('b')
    c = GraphNode.new('c')
    d = GraphNode.new('d')
    e = GraphNode.new('e')
    f = GraphNode.new('f')
    a.neighbors = [b, c, e]
    c.neighbors = [b, d]
    e.neighbors = [a]
    f.neighbors = [e]   
    p a.bfs(a, "b")
    p a.bfs(a, "f")
end