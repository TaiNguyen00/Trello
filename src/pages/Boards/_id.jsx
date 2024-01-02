// Board details

import { Container } from "@mui/material"
import AppBar from "../../components/AppBar"
import BoardBar from "./BoardBar"
import BoardContent from "./BoardContent"


const Board = () => {
  return (
    // sử dụng disable và maxWitdh để k bị giới hạn, sử dụng height vh sẽ k bị scroll, dùng vw sẽ có scroll
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board