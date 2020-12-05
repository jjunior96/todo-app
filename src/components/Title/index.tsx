import React from 'react';

import * as S from './styled';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({text}) => {
  return <S.Title>{text}</S.Title>;
};

export default Title;
