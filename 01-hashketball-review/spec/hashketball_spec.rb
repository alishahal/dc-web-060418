require 'spec_helper'

describe 'hashketball' do

  describe '#game_hash' do
    let(:top_level_keys) { [:home, :away] }
    let(:team_level_keys) { [:team_name, :colors, :players] }

    it 'returns a hash' do
      expect(game_hash).to be_a(Hash)
    end

    it 'returns the correct top-level keys' do
      top_level_keys.each do |key|
        expect(game_hash.keys).to include(key)
      end
    end

    it 'returns the correct team-level keys' do
      team_level_keys.each do |key|
        expect(game_hash.values.first.keys).to include(key)
      end
    end
  end

  describe '#num_points_scored' do

    it 'knows the number of points scored by each player' do
      expect(num_points_scored("Jeff Adrien")).to eq(10)
      expect(num_points_scored("Bismak Biyombo")).to eq(12)
      expect(num_points_scored("DeSagna Diop")).to eq(24)
      expect(num_points_scored("Ben Gordon")).to eq(33)
      expect(num_points_scored("Brendan Haywood")).to eq(6)
      expect(num_points_scored("Alan Anderson")).to eq(22)
      expect(num_points_scored("Reggie Evans")).to eq(12)
      expect(num_points_scored("Brook Lopez")).to eq(17)
      expect(num_points_scored("Mason Plumlee")).to eq(26)
      expect(num_points_scored("Jason Terry")).to eq(19)
    end

  end

  describe '#shoe_size' do

    it 'knows the shoe size of each player' do
      expect(shoe_size("Jeff Adrien")).to eq(18)
      expect(shoe_size("Bismak Biyombo")).to eq(16)
      expect(shoe_size("DeSagna Diop")).to eq(14)
      expect(shoe_size("Ben Gordon")).to eq(15)
      expect(shoe_size("Brendan Haywood")).to eq(15)
      expect(shoe_size("Alan Anderson")).to eq(16)
      expect(shoe_size("Reggie Evans")).to eq(14)
      expect(shoe_size("Brook Lopez")).to eq(17)
      expect(shoe_size("Mason Plumlee")).to eq(19)
      expect(shoe_size("Jason Terry")).to eq(15)
    end

  end

  describe '#team_colors' do

    it 'knows the Brooklyn Nets colors are Black and White' do
      expect(team_colors("Brooklyn Nets")).to contain_exactly("Black", "White")
      expect(team_colors("Charlotte Hornets")).to contain_exactly("Turquoise", "Purple")
      end
    end

  describe '#team_names' do

    it 'returns the team names' do
      teams = team_names
      expect(teams.size).to eq(2)
      teams.each do |name|
        expect(["Brooklyn Nets", "Charlotte Hornets"]).to include(name)
      end
    end

  end

  describe '#player_numbers' do

    it 'returns the player jersey numbers' do
      charlotte_numbers = [0, 2, 4, 8, 33]
      brooklyn_numbers = [0, 1, 11, 30, 31]

      expect(player_numbers("Brooklyn Nets").sort).to eq(brooklyn_numbers)
      expect(player_numbers("Charlotte Hornets").sort).to eq(charlotte_numbers)
    end

  end

  describe '#player_stats' do

    let(:jeff_stats) {
      { player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }
    }

    

    it 'returns all stats for a given player' do
      expect(player_stats("Jeff Adrien")).to eq(jeff_stats)
    end

  end

  describe '#big_shoe_rebounds' do

    it 'returns the number of rebounds of the player with the biggest shoe size' do
      expect(big_shoe_rebounds).to eq(12)
    end

  end

end

# If you'd like to work on the bonus, uncomment these tests.

# describe 'bonus' do

#   describe '#most_points_scored' do

#     it 'returns Ben Gordon' do
#       expect(most_points_scored).to eq("Ben Gordon")
#     end

#   end

#   describe '#winning_team' do

#     it 'returns the Brooklyn Nets' do
#       expect(winning_team).to eq("Brooklyn Nets")
#     end

#   end

#   describe '#player_with_longest_name' do

#     it 'returns Brendan Haywood' do
#       expect(player_with_longest_name).to eq("Brendan Haywood")
#     end

#   end

# end

# describe 'super bonus' do

#   describe '#long_name_steals_a_ton?' do

#     it 'returns true' do
#       expect(long_name_steals_a_ton?).to eq(true)
#     end

#   end

# end
