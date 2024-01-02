import Board from "./pages/Boards/_id"

function App() {
  return (
    // sử dụng disable và maxWitdh để k bị giới hạn, sử dụng height vh sẽ k bị scroll, dùng vw sẽ có scroll
    <>
      {/* React Router dom / boards/ {board_id} */}
      <Board />
    </>
  )
}

export default App
