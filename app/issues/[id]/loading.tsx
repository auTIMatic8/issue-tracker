import { Skeleton } from '@/app/components'
import { Box, Card, Flex } from '@radix-ui/themes'

const LoadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex className='gap-2'>
        <Skeleton width='5 rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose mt-4'>
        <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default LoadingIssueDetailPage
