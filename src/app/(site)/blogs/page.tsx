import { Flex, Group, Title } from '@mantine/core';
import DisplayMode from '@/components/DislayMode';
import { client } from '@/sanity/lib/client';

const getCategories = async () => {
  const data = client.fetch(`*[_type == "category"]`);

  return data;
};

export default async function Page() {
  const categories = await getCategories();

  console.log(categories);

  return (
    <Flex direction='column' flex={4} px='xl' py='lg'>
      <Group w='100%' justify='space-between'>
        <Title order={3}>Dive into my latest blog post.</Title>
        <DisplayMode mode='detailed' />
      </Group>
    </Flex>
  );
}
