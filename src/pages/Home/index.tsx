import { useEffect, useState } from "react";
import CardView from "../../components/Card/CardView";
import { IPost } from "../../interfaces/IPost";
import { GetAllPosts } from "../../server/Posts/get.post";
import { CardContainer, Container, TextFeed } from "./styles";
import CardCreate from "../../components/Card/CardCreate";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPosts = async () => {
    try {
      const res = await GetAllPosts();

      setPosts(
        res.sort(
          (a, b) =>
            new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        )
      );
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
      <CardCreate onPostCreated={getAllPosts} />

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
