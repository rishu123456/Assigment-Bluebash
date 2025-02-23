import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
	const [unreadEmails, setUnreadEmails] = useState(0);

	return (
		<Flex color="#000" gap="1rem" direction="column">
			<Text> New Emails in <strong>APP-2 (Email Application)</strong></Text>
      <Text>Unread Emails: {unreadEmails} </Text>
      <Button onClick={() => setUnreadEmails(unreadEmails + 1)}>
        Receive New Email
      </Button>
		</Flex>
	);
};

export default Counter;
