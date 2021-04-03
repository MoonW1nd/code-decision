import { atom } from "recoil";
import { QueryType } from "../../constants";
import { getRandomQuery } from "../../utils";

const answerState = atom<QueryType>({
  key: "answer",
  default: getRandomQuery(),
});

export default answerState;
