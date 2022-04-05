import Container from './components/Container'
import Content from './components/Content'
import SocialMedia from './components/SocialMedia'

const rules = [
  {
    points: 1,
    name: 'A cada minuto',
  },
  {
    points: 1,
    name: 'Follow',
  },
  {
    points: 1,
    name: 'Donate R$ 1,00',
  },
  {
    points: 1,
    name: 'Gank',
  },
  {
    points: 5,
    name: '100 Bits',
  },
  {
    points: 10,
    name: 'Sub',
  },
  {
    points: 10,
    name: 'Retweet',
  },
]

function App() {
  return (
    <Container>
      <Content>
        <img className="rotated" src="./redragon-mitra.png" />
        <h1 className="text-4xl font-bold ">Sorteio Redragon Mitra</h1>
        <p className="mb-4">
          sorteio do canal da twitch{' '}
          <a
            className="font-bold"
            href="https://www.twitch.tv/devpablowinter"
            target={'_blank'}
          >
            devPabloWinter
          </a>
        </p>
        <p>Como ganho pontos?</p>
        <div className="flex flex-col gap-2">
          {rules.map(({ name, points }) => (
            <div className="flex gap-3" key={name}>
              <div className="w-8 bg-red-700 rounded-md text-center">
                {points}
              </div>
              <div className="">{name}</div>
            </div>
          ))}
        </div>
        <div className="">
          <p>Como os resgato?</p>
          <img
            src="./!ticket.png"
            className="max-w-[15rem] w-full rounded-sm"
          />
        </div>
      </Content>
      <SocialMedia />
    </Container>
  )
}

export default App
