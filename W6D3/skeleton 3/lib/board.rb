class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { Array.new }
    i = 0 
    while i < @cups.length
      if i != 6 && i != 13 
        4.times { @cups[i] << :stone }
      end
      i += 1 
    end
    @name1 = name1 
    @name2 = name2
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    unless @cups.length >= start_pos || start_pos <= 0 
      raise "Invalid starting cup"
    end
    unless !@cups[start_pos].empty?
      raise "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name) 

    current_cup = @cups[start_pos]
    @cups[start_pos] = []
    
    cup_idx = start_pos 
    until current_cup.empty? 
      cup_idx += 1 
      cup_idx = 0 if cup_idx > 13 
      if cup_idx == 6
        @cups[6] << current_cup.pop if current_player_name == @name1 
      elsif cup_idx == 13 
        @cups[13] << current_cup.pop if current_player_name == @name2 
      else
        @cups[cup_idx] << current_cup.pop
      end
    end 
    render 
    next_turn(cup_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13 
      return :prompt 
    end

    if @cups[ending_cup_idx].length == 1 
      return :switch 
    end 
    ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    if @cups[7..12].all?(&:empty?) || @cups[0..5].all?(&:empty?)
      return true 
    end
    false 
  end

  def winner
    if @cups[6].count == @cups[13].count 
      :draw 
    else   
      @cups[13].count < @cups[6].count ? @name1 : @name2
    end
  end
end

