import { useEffect, useState } from "react";
import CardView from "../../components/Card/Card.View";
import { IPost } from "../../interfaces/IPost";
import { GetAllPosts } from "../../server/Posts/get.post";
import { CardContainer, Container, TextFeed } from "./styles";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPosts = async () => {
    try {
      const res = await GetAllPosts();
      setPosts(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      {isLoading ? (
        // TODO: Implementar Spinner
        <p>CARREGANDO...</p>
      ) : (
        <>
          <TextFeed>Feed</TextFeed>

          <CardContainer>
            {posts.map((post) => (
              <CardView
                key={post.id}
                name={post.author}
                url={post.url}
                text={post.message}
              />
            ))}
          </CardContainer>
        </>
      )}
    </Container>
  );
}
