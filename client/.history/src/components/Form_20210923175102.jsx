import { Input } from "./Input"

export const Form = (props) => {
  return (
    <div>
      <div className="sm:flex flex-wrap justify-around items-center h-screen w-full bg-parchment overflow-auto lg:bg-no-repeat bg-cover">
        <div className="sm:w-screen lg:w-1/2">
          <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-black  items-center">Description</h1>
          <form onSubmit={props.handleSubmit}>
            
            <Input
              title="Name"
              deets={props.name}
              holder="Aragorn, Tyrion, Shaggy"
            />
            <Input
              title="Title"
              deets={props.title}
              holder="The Great, The White Witch, Freind to All"
            />
            <Input
            title="Quote"
            deets={props.quote}
            holder="It's just a flesh wound"
            />
            <Input
            title="Alignment"
            deets={}
            />
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">My Description</label>
              <textarea className="textarea h-24 textarea-ghost text-center"
                placeholder="As a knight for the kingdom I always fight for the kingdom!"
                type="text"
                value={props.info}
                onChange={(e) => props.setInfo(e.target.value)}>
              </textarea>
            </div>
            <div className="p-2">

              <button className="btn glass text-black">{props.type}</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
