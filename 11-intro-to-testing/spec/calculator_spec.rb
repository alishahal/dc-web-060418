require_relative "../calculator.rb"

describe "Calculator" do

  let(:calculator) {Calculator.new}

  it "adds two numbers" do
    expect(calculator.add(2, 3)).to eq 5
  end

  it "subtracts two numbers" do
    expect(calculator.subtract(10, 3)).to eq 7
  end

  it "multiplies two numbers" do
    expect(calculator.multiply(9, 3)).to eq 27
    expect(calculator.multiply(3, 0.5)).to eq 1.5
  end

  it "divides two numbers" do
    expect(calculator.divide(5, 2)). to eq 2.5
  end

  it "should raise an error if input is a not number" do
    expect { calculator.add("hi", 5) }.to raise_error ArgumentError
  end
end