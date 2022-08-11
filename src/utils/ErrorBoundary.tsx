import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import { Group, Title, Text, Image, Space, Stack, Anchor } from "@mantine/core";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
                <Group position="center">
                    <Stack justify="center" align="center">
                    <Title>Server Error</Title>
                    <ContentBox>
                        <Image src="/Errorimg.png" width="auto" height={200} placeholder />
                    </ContentBox>
                    <Text>Opps! Looks like I need a new cup of coffee.</Text>
                    <Space h="sm"/>
                    <Anchor component={Link} to="/">
                    {`<-`} Sorry about that. Let's head back home.
                    </Anchor>
                </Stack>
            </Group>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
