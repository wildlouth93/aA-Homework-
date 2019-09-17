array1 = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
#=> "fiiiissshhhhhh"

def bubble_sort_max(array)
    sorted = false 
    while !sorted
        sorted = true 
        (0...array.length-1).each do |i| 
            if array[i].length > array[i+1].length
                array[i], array[i+1] = array[i+1], array[i]
                sorted = false 
            end
        end
    end
    array[-1]
end

p bubble_sort_max(array1)

class Array 
    def merge_sort(&prc)
        prc ||= Proc.new { |x, y| x <=> y }
        return self if self.length <= 1 
        mid = self.length/2 

        left = self.take(mid).merge_sort(&prc)
        right = self.drop(mid).merge_sort(&prc)

        Array.merge(left, right, &prc)
    end

    private 

    def self.merge(left, right, &prc)
        new_array = []

        until left.empty? || right.empty? 
            if prc.call(left.first, right.first) == 1 
                new_array << right.shift 
            else
                new_array << left.shift 
            end
        end

        new_array + left + right 
    end
end

def bigo_merge_sort(array)
    prc = Proc.new { |x,y| y.length <=> x.length }


    array.merge_sort(&prc)[0]
end

p bigo_merge_sort(array1)

def bigo_using_var(array)
    longest = array[0]

    (1...array.length).each do |i| 
        if array[i].length > longest.length
            longest = array[i]
        end
    end
    longest 
end

p bigo_using_var(array1)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def find_index(target, array)
    (0...array.length).each do |i| 
        return i if array[i] == target 
    end

end

p find_index("up", tiles_array)
p find_index("right-down", tiles_array)

tiles_hash = { 
    "up" => 0, 
    "right-up" => 1, 
    "right" => 2, 
    "right-down" => 3, 
    "down" => 4, 
    "left-down" => 5, 
    "left" => 6, 
    "left-up" => 7
}

def fast_dance(target, hash)
    return hash[target]
end

p fast_dance("up", tiles_hash)
p fast_dance("right-down", tiles_hash)
