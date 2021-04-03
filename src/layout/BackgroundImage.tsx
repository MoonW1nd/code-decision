import { useRecoilValue } from "recoil";
import Image from "../components/Image";
import type { IImage } from "../components/interfaces";
import { answerState, answerGifQuery } from "../store";

type Props = {
  className: string;
};

const BackgroundImage = ({ className }: Props) => {
  const text = useRecoilValue(answerState);
  const url = useRecoilValue(answerGifQuery);
  const AbtractImage: IImage = Image;

  return <AbtractImage url={url} className={className} title={text} />;
};

export default BackgroundImage;
