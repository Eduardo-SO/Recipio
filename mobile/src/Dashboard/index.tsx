import React from 'react'
import { Container, Title, Button } from './styles'

import { useNavigation } from '@react-navigation/native'

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Button onPress={() => navigate('Home')}>
        <Title>Dashboard</Title>
      </Button>
    </Container>
  )
}

export default Dashboard
