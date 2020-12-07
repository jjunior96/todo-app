import React from 'react';

import {TextInputProps} from 'react-native';

import * as S from './styled';

const Ipunt: React.FC<TextInputProps> = ({...rest}) => {
  return (
    <S.Container {...rest}>
      <div>T</div>
    </S.Container>
  );
};

export default Ipunt;
