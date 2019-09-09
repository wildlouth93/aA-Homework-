class Map
    def initalize 
        @map = []
    end

    def set(key, value)
        self.map.push([key, value])
    end

    def get(key)
        key_index = self.map.index(key)
        self.map[key_index][1]
    end

    def delete(key)
        key_index = self.map.index(key)
        self.map.delete_at(key)
    end

    def show
        @map 
    end
end

map1 = Map.new

