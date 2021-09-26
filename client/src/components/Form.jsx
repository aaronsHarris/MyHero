import { Input } from "./Input"

export const Form = (props) => {
  return (
    <div>
      <div className="sm:flex flex-wrap justify-around items-center h-screen w-full bg-gradient-to-b from-black via-black to-yellow-700 overflow-auto lg:bg-no-repeat bg-cover">
        <div className="sm:w-screen lg:w-1/2">
          <h1 className="font-serif lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white  items-center">Description</h1>
          <form onSubmit={props.handleSubmit}>

            <Input
              title="Name"
              deets={props.name}
              holder="Aragorn, Tyrion, Shaggy"
              changer={(e) => props.setName(e.target.value)}
            />
            <Input
              title="Title"
              deets={props.title}
              holder="The Great, The White Witch, Freind to All etc."
              changer={(e) => props.setTitle(e.target.value)}
            />
            <Input
              title="Quote"
              deets={props.quote}
              holder="It's just a flesh wound!"
              changer={(e) => props.setQuote(e.target.value)}
            />
            <Input
              title="Alignment"
              deets={props.alignment}
              holder="Lawful Good, Neutral, Chaotic Evil etc."
              changer={(e) => props.setAlignment(e.target.value)}
            />
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-200">My Description</label>
              <textarea className="textarea h-24 bg-gray-500 text-center text-lg"
                placeholder="As a knight for the kingdom I always fight for the kingdom!"
                type="text"
                value={props.info}
                onChange={(e) => props.setInfo(e.target.value)}>
              </textarea>
            </div>

            <Input
              title="Created By:"
              deets={props.creator}
              holder="Your Name!"
              changer={(e) => props.setCreator(e.target.value)}
            />
            <div className="p-2">
              <button className="btn glass text-black hover:-translate-y-1 transform transition hover:bg-red-900">{props.type}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
