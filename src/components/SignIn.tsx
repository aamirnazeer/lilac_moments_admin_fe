import { Text, Card, Flex, Heading, TextField, Button, Container } from '@radix-ui/themes';
import { API, ENV } from '../core/env.ts';

console.log(API, ENV);

export default function SignIn() {
  return (
    <Container size="1">
      <Card size="4">
        <Flex direction="column" gap="4">
          <Heading>Sign In</Heading>
          <Flex direction="column" gap="1">
            <Text as="label" htmlFor="username" weight="bold">
              Username
            </Text>
            <TextField.Root placeholder="Enter your username" id="username" />
          </Flex>
          <Flex direction="column" gap="1">
            <Text as="label" htmlFor="password" weight="bold">
              Password
            </Text>
            <TextField.Root placeholder="Enter your password" id="password" type="password" />
          </Flex>
          <Flex justify="end">
            <Button>Sign In</Button>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}
