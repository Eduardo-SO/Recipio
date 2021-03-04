import React from 'react'
import { Container, Title, Button } from './styles'

import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Button onPress={() => navigate('Dashboard')}>
        <Title>Home</Title>
      </Button>
    </Container>
  )
}

export default Home
