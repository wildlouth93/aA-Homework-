class Stack 
    def initalize
        @stack = [] 
    end

    def push(el)
        self.push(el) 
    end

    def pop
        self.pop 
    end

    def peek 
        @stack 
    end
end

stack1 = Stack.new 
p stack1.push(1)
p stack1.push(2)
p stack1.push(3)
p stack1.push(4)
p stack1.pop 

p stack1.peek 

