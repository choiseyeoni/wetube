import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    // fileUrl 값이 없는 비디오를 생성하려 한다면 이 에러 메시지를 받을 것임
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0 // 처음 비디오가 생성되면 views가 0이 되게 함
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
// model의 이름 : Video, Video model의 schema : VideoSchema
const model = mongoose.model("Video", VideoSchema);
// export default가 변수, 함수, 오브젝트, 클래스 등을 보낼 수 있는 명령어라는데, 내가 니꼬쌤한테 배운 거랑은 좀 다르구나. 진짜 파일 전체를 내보내는 게 맞나 이게?
export default model;
