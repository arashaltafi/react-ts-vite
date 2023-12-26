const App = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-16 py-16 px-8">
      <button className="px-4 py-3 text-xl rounded-lg bg-red-500 text-center text-white cursor-pointer">
        Button
      </button>

      <img
        className="size-56 rounded-xl shadow-xl shadow-black cursor-pointer"
        src="https://arashaltafi.ir/Social_Media/story-03.jpg"
        alt="arash altafi" />

      <p className="text-xl text-center w-[80%] text-black cursor-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quod qui earum quibusdam? Facilis tempora quia nesciunt rerum expedita culpa officiis incidunt,
        molestiae natus dolor quaerat pariatur fuga veniam commodi vero.
      </p>
    </div>
  )
}

export default App
