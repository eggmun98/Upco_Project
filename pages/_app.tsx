import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),

    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />

        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
