import FeatureCard from './card'
import entries from './data'

export default () => (
  <div className="max-w-7xl lg:w-11/12 w-4/5 text-center flex flex-col items-center mt-20">
    <div className="w-full flex flex-col gap-28">
        <div key={entries.title1} className="flex flex-col gap-12">
          <div className="text-3xl">
            <h3 className="text-primary-color text-xl lg:text-3xl"> How it works</h3>
            <span className="text-center text-xl z-30 text-white">
              The Grandma-friendly way to buy, sell and use Digital Assets
            </span>
            
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-start text-left w-full gap-4">
            {entries.cards.map((card: any, i: number) => (
              <FeatureCard key={card.cardTextTestId} {...{ ...card, cardNumber: i + 1 }} />
            ))}
          </div>
        </div>
    </div>
  </div>
);