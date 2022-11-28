export default ({
  cardNumber,
  cardNumberTestId,
  cardTextTestId,
  text1,
  keyword1,
  description,
  buttonText,
  buttonTestId,
}: any) => (
  <div className="relative flex flex-col gap-3 w-full lg:w-1/3 py-8">
    <div className="absolute w-full flex justify-center items-center">
      <div className="relative h-16 w-16 -top-8">
        <img className="absolute h-full w-full" src="/images/polygon.svg" alt="polygon" />
        <p className="absolute text-3xl font-epilogue-bold top-3 left-6">
          {cardNumber}
        </p>
      </div>
    </div>
    <div className="w-full lg:p-12 p-6 flex flex-col items-start border-2 h-80 border-primary-color gap-4 bg-primary-gradient bg-no-repeat bg-top bg-fill">
      <div data-testid={cardTextTestId} className="flex flex-col gap-6 ">
        <div className="lg:text-2xl mt-8 text-xl flex flex-col w-full text-center">
          <div>
            <span className="font-bold">{keyword1}</span>
            <h3 className="text-primary-color text-xl lg:text-2xl"> {text1} </h3>
          </div>
        </div>
        <div className="mt-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);
