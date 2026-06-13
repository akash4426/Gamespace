import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeBar from './components/MarqueeBar'
import GameCard from './components/GameCard'
import games from './data/games'

function App() {
  const row1 = games.filter((g) => g.row === 1)
  const row2 = games.filter((g) => g.row === 2)

  return (
    <div className="container">
      {/* Top bar */}
      <Navbar />

      {/* Featured game hero */}
      <HeroSection />

      {/* Animated tagline */}
      <MarqueeBar />

      {/* Row 1 game cards */}
      <div className="section-label">Featured Games</div>
      {row1.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}

      {/* Row 2 game cards */}
      <div className="section-label">More Games</div>
      {row2.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default App
