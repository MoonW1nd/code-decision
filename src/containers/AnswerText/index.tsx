import React from "react";
import { connect } from "react-redux";
import type { StateType } from "../../types";

import { Text } from "../../components/Text";

type AnswerTextType = {
  text: string;
};

const AnswerText = ({ text, ...props }: AnswerTextType): JSX.Element => (
  <Text text={text} size="xxl" {...props} />
);

function mapStateToProps({ app }: StateType): AnswerTextType {
  return { text: app.currentAnswer };
}

export const enhance = connect(mapStateToProps);

export { AnswerText as Base };
export default enhance(AnswerText);
