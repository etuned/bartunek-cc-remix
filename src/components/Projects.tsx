import ContentBox from "./ContentBox";
import { 
    Group,
    Title, 
    Text, 
    Container, 
    Image, 
    Stack, 
    } from "@mantine/core";
import Character from "../assets/character.svg"

export default function Projects() {
    return (
        <Group position="center">
            <Stack justify="center" align="center">
                <Title>Here are some projects I have worked on.</Title>
                <ContentBox>
                    <Image src={Character} width="auto" height={300} placeholder />
                </ContentBox>
            </Stack>
        </Group>
    )
}