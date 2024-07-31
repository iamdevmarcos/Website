import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { Container, Section } from 'components'
import { jobs } from 'mocks/jobs'

const Jobs = () => {
  return (
    <Container>
      <Flex
        as="section"
        aria-label="Blog Posts and Articles"
        mt="6rem"
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Section heading="Experience">
          {jobs.map((job, jobIndex) => (
            <NewJob key={`Job - ${jobIndex}`} {...job} />
          ))}
        </Section>
      </Flex>
    </Container>
  )
}

export default Jobs

const NewJob = ({
  company,
  companyPhoto,
  companyLink,
  date,
  description,
  position
}: JobProps) => {
  return (
    <Link
      isExternal
      href={companyLink}
      style={{ textDecoration: 'none' }}
      border="1px solid #71717a"
      borderRadius="8px"
      _focusVisible={{ bg: '#27272a', borderColor: '#27272a' }}
      _hover={{
        bg: '#27272a',
        borderColor: '#27272a'
      }}
    >
      <Flex w="100%" flexDir="column" p="20px" gap="20px">
        <Flex
          flex="1"
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <Flex gap="20px" flexDir={{ base: 'column', md: 'row' }}>
            <Image
              borderRadius="50%"
              src={companyPhoto}
              alt={company}
              w="32px"
              h="32px"
            />

            <Text
              fontSize={{ base: '16px', md: '20px' }}
              color="white"
              fontWeight="600"
            >
              {position} at {company}
            </Text>
          </Flex>
          <Flex>
            <Flex
              flexDir="column"
              fontSize={{ base: '14px', md: '16px' }}
              color="white"
              fontWeight="400"
            >
              <Text>{date}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex="1">
          <Text
            fontSize={{ base: '14px', md: '16px' }}
            color="#D4D4D8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Flex>
      </Flex>
    </Link>
  )
}

export type JobProps = Record<
  | 'company'
  | 'companyPhoto'
  | 'companyLink'
  | 'locale'
  | 'date'
  | 'position'
  | 'description',
  string
>
