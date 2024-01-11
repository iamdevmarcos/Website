import { Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import { Container, Section } from 'components'
import { jobs } from 'mocks/jobs'

const Jobs = () => {
  return (
    <Container>
      <Flex
        as="section"
        aria-label="Blog Posts and Articles"
        mt={{ base: '6rem', sm: '8rem' }}
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Section heading="Experience">
          {jobs.map(
            ({
              company,
              companyPhoto,
              companyLink,
              date,
              locale,
              position
            }) => (
              <Job
                key={`Job - ${position}`}
                company={company}
                companyPhoto={companyPhoto}
                companyLink={companyLink}
                locale={locale}
                date={date}
                position={position}
              />
            )
          )}
        </Section>
      </Flex>
    </Container>
  )
}

export default Jobs

export type JobProps = {
  company: string
  companyPhoto: string
  companyLink: string
  locale: string
  date: string
  position: string
}

const Job = ({
  company,
  companyPhoto,
  companyLink,
  date,
  locale,
  position
}: JobProps) => {
  return (
    <Flex w="100%" gap="16px" alignItems="center">
      <Link isExternal href={companyLink}>
        <Center
          w="8rem"
          h="8rem"
          p="6px"
          border={{ base: 'none', lg: '0.1rem solid gray' }}
          borderRadius="50%"
          display={{ base: 'none', lg: 'block' }}
          cursor="pointer"
        >
          <Image borderRadius="50%" src={companyPhoto} alt={company} />
        </Center>
      </Link>

      <Flex flexDir="column" gap={{ base: '8px', lg: '4px' }}>
        <Flex
          gap={{ base: '2px', lg: '8px' }}
          fontSize={{ base: '2rem', md: '2.4rem' }}
          fontWeight="bold"
          alignItems={{ base: 'flex-start', md: 'center' }}
          color="white"
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Text>{position}</Text>
          <Flex
            w="4px"
            h="4px"
            bg="white"
            borderRadius="50%"
            display={{ base: 'none', md: 'block' }}
          />
          <Link isExternal href={companyLink}>
            <Text
              fontSize={{ base: '1.2rem', md: '1.8rem' }}
              fontWeight="light"
            >
              {company}
            </Text>
          </Link>
        </Flex>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          gap="8px"
        >
          <Flex
            background="white"
            border="0.1rem solid black"
            p="0 1rem"
            borderRadius="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="black"
          >
            <Text
              fontSize="1.4rem"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {date}
            </Text>
          </Flex>

          <Text fontSize="1.4rem" fontWeight="light" color="#ccc">
            {locale}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
