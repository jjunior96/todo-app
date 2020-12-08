import React from 'react';

import {TextInputProps} from 'react-native';

import * as S from './styled';

const Ipunt: React.FC<TextInputProps> = ({...rest}) => {
  return (
    <S.Container>
      <S.TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#62707F"
        // defaultValue={defaultValue}
        // onChangeText={(value) => (inputValueRef.current.value = value)}
        {...rest}
      />
    </S.Container>
  );
};

export default Ipunt;
