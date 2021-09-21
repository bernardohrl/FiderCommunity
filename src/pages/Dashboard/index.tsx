import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Card, Image, Name } from './styles';
import api from '../../services/api';

interface Post {
    id: string,
    name: string,
    logo_url: string,
    url: string,
}

export const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  
  const headerInfos = [
    {
      "link": "/settings",
      "name": "Settings"
    }
  ]

  useEffect(()=> {
      api.get("projects")
        .then(res => setPosts(res.data));
  }, []);
  
  return (
    <>
      <Header headerInfos={headerInfos} ></Header>

      <Container>
        <ul>
          {posts.map(post => {
            return  <Card key={post.id}>
                      <a href={post.url}>
                        <Image src={post.logo_url} alt="Community Image" ></Image>
                        <Name>{post.name}</Name>
                      </a>
                    </Card>
          })}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
