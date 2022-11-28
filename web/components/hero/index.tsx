const Video = () => (
  <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src="/vids/bg-2.mp4" type="video/mp4" />
  </video>
)

const Text = () => (
   <div className="relative z-30 p-5 bg-black text-2xl text-white bg-purple-300 bg-opacity-50 h-full grid place-items-center h-screen">
     <div className="pb-40">
        <h1 className="mb-5 lg:text-5xl text-xl font-bold">
            Imagine a more human world
        </h1>
        <p className="lg:text-xl text-sm">
          Where technology serves and does not dominate human experiences
        </p>
     </div>
  </div>
)

export default () => (
  <div className="relative flex items-center justify-center h-screen overflow-hidden border-b border-primary-color">
    <Text/>
    <Video/>
</div>
)