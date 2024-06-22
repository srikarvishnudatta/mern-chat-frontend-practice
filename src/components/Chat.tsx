
const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-100 w-1/3">
        contacts
      </div>
      <div className="flex flex-col bg-blue-300 w-2/3 p-2">
        <div className="flex-grow">
          messages with selected person
        </div>
        <div className="flex gap-2">
          <input type="text" className="bg-white flex-grow border p-2 rounded-sm" placeholder="type your message" />
          <button className="bg-blue-500 p-2 rounded-sm text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat