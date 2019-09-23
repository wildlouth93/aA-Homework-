class Playwright 

  def self.all 
    data = PlayDBConnect.instance.execute("SELECT * FROM playwrights")
    data.map {|datum| Playwright.new(datum) }
  end

  def self.find_by_name(name)
    search = name
    execute(<<-SQL)
      SELECT 
        * 
      FROM 
        playwrights 
      WHERE 
        name = search; 
    SQL
  end

  def inialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end
end