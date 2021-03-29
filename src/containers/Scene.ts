import { StateType } from "../types";
import { connect } from "react-redux";
import Scene from "../components/Scene";

function mapStateToProps({ app }: StateType) {
  return { gifUrl: app.currentGifUrl, text: app.currentAnswer };
}

export default connect(mapStateToProps)(Scene);
