import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video"; // 이렇게 model을 import 해 줌으로써 이 파일을 실행시키면 model을 생성했다는 걸 mongoose가 인지해서 그걸 model로써 등록하게 한다.

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
