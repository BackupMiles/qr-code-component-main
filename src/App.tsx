import Card from './components/card/card.component'

function App() {
  const title = 'Improve your front-end skills by building projects';
  const subtitle = 'Scan the QR code to visit your Frontend Mentor and take your coding skills to the next level';

  return (
    <div className="App">
      <div className="main">
        <Card imgSrc='/images/image-qr-code.png' subtitle={subtitle} title={title} />
      </div>
    </div>
  )
}

export default App
