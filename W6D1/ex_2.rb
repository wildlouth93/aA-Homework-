class Queue
    def initalize 
        @queue = []
    end

    def push(el)
        self.unshift(el)
    end

    def pop
        self.pop 
    end

    def peek 
        self.structure[-1]
    end
end

queue1 = Queue.new
p queue1