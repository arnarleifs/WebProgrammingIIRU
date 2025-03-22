import { UserContext } from "@/contexts/user-context";
import { useContext } from "react";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react"

export function User() {
  const { user } = useContext(UserContext);

  return (
    <HStack gap="4" justifySelf="start">
      <Avatar.Root>
        <Avatar.Fallback name={user.fullName} />
        <Avatar.Image src={user.profileImage} />
      </Avatar.Root>
      <Stack gap="0">
        <Text fontWeight="medium">{user.fullName}</Text>
        <Text color="fg.muted" textStyle="sm">
          {user.username}
        </Text>
      </Stack>
    </HStack>
  )
}