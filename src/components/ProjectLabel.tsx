import { Link, Text } from '@chakra-ui/react'

export type ProjectLabelProps = {
  title: string
  link: string
}

const ProjectLabel = ({ title, link }: ProjectLabelProps) => (
  <Link
    href={link}
    isExternal
    background="white"
    border="0.1rem solid black"
    p="0 1rem"
    borderRadius="0.5rem"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="black"
    _hover={{
      background: 'black',
      borderColor: 'white',
      color: 'white'
    }}
  >
    <Text fontSize="1.6rem" fontWeight="bold" textTransform="capitalize">
      {title}
    </Text>
  </Link>
)

export default ProjectLabel
