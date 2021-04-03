import { selector } from "recoil";
import { getGifByQuery } from "../../api";
import { getRandomInt } from "../../utils";
import { answerState } from "../atoms";

const answerGifQuery = selector<string>({
  key: "url",
  get: async ({ get }) => {
    const text = get(answerState);

    const { data: gifData } = await getGifByQuery(text);
    const index = getRandomInt(0, gifData.length - 1);

    return gifData[index].images.original.url;
  },
});

export default answerGifQuery;
