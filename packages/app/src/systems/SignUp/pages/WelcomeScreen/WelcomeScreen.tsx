import { Button, Flex, FuelLogo, Stack } from '@fuel-ui/react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components';

import { Layout, Pages } from '~/systems/Core';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <Layout title="Sign Up" isPublic>
      <Stack gap="$6" align="center">
        <FuelLogo size={130} css={{ transform: 'translateY(10px)' }} />
        <Header title="Create a new Fuel Wallet" />
        <Flex direction="column" gap="$2">
          <Button
            color="accent"
            onPress={() => navigate(Pages.signUpTerms({ action: 'create' }))}
          >
            Create a Wallet
          </Button>
          <Button
            color="gray"
            variant="ghost"
            onPress={() => navigate(Pages.signUpTerms({ action: 'recover' }))}
          >
            I already have a wallet
          </Button>
        </Flex>
      </Stack>
    </Layout>
  );
}
