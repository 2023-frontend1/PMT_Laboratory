import {
  Stack,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react"

const Card = () => {
  return (
    <Stack width={300} height={200}>
      <Box padding="6" boxShadow="lg" bg="blue">
        <SkeletonCircle size="10" startColor="white" endColor="gray" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="5" />
        <Skeleton startColor="pink" endColor="orange" height="20px" />
      </Box>
    </Stack>
  )
}

export default Card
