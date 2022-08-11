import { useLocation } from "react-router-dom";
import ContentBox from "./ContentBox";
import { Group, Title, Text, Image, Space, Stack, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";


export default function Error404() {
    const location = useLocation();
    return (
        <Group position="center">
            <Stack justify="center" align="center">
                <Title>Error 404</Title>
                <Text>"{location.pathname.replace("/", "")}"</Text>
                <Text>Not Found</Text>
                <ContentBox>
                    <Image src="/404img.png" width="auto" height={200} placeholder />
                </ContentBox>
                <Text>Opps! Did the dog eat the page?!</Text>
                <Space h="sm"/>
                <Anchor component={Link} to="/">
                {`<-`} Sorry about that. Let's head back home.
                </Anchor>
            </Stack>
        </Group>
    )
}