import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
const [unreadMessages, setUnreadMessages] = useState(1);
  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        New Messages in <strong>APP-1 (Chat Application)</strong>
      </Text>
      <Text>Unread Messages: {unreadMessages} </Text>
      <Button onClick={() => setUnreadMessages((prev) => prev * 2)}>
        Receive New Message
      </Button>
    </Flex>
  );
};

export default Counter;
