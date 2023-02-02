import React from 'react'

import { MainTitleContainer, MainTitle } from './styled'

const Title = ({ title }: { title: string }) => {
  return (
    <MainTitleContainer>
      <MainTitle>{title}</MainTitle>
    </MainTitleContainer>
  )
}

export default Title
