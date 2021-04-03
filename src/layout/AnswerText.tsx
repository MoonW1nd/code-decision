import { useRecoilState } from "recoil";
import { IText } from "../components/interfaces";
import Text from "../components/Text";
import { answerState } from "../store";

const AnswerText = () => {
  const [text] = useRecoilState(answerState);
  const AbstractText: IText = Text;

  return <AbstractText text={text} size="xl" />;
};

export default AnswerText;
