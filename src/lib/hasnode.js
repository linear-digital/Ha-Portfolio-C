import { request, gql } from "graphql-request";

const HASHNODE_API = "https://gql.hashnode.com";

export async function getPosts(limit) {
    const query = gql`
    query Publication {
      publication(host: "hazrat-ali.hashnode.dev") {
        posts(first: ${limit ? limit : 10}) {
          edges {
            node {
              id
              title
              slug
              brief
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

    const data = await request(HASHNODE_API, query);
    return data.publication.posts.edges.map((edge) => edge.node);
}

export const fetchHashnodeBlogs = async () => {
    const query = {
        query: `query {
        publication(host: "hazrat-ali.hashnode.dev") {
          posts(first: 10) {
            edges {
              node {
                id
                title
                slug
                subtitle
                url
                brief
                coverImage {
                  url
                }
                tags { id name slug }
                publishedAt
                author { id name username profilePicture }
                canonicalUrl
                series { id name }
                views
                seo { title description }
              }
            }
          }
        }
      }`,
    };

    try {
        const response = await fetch(HASHNODE_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
            cache: "no-cache",
        });

        const data = await response.json();
        return data.data.publication.posts.edges.map((edge) => edge.node);
    } catch (error) {
        console.error(error);
        return [];
    }
};

export async function getPostBySlug(slug) {
    const query = gql`
      query Publication {
        publication(host: "hazrat-ali.hashnode.dev") {
          post(slug: "${slug}") {
            id
            title
            slug
            content {
              markdown
              html
            }
            subtitle
            brief
            coverImage {
              url
            }
            tags { id name slug }
            publishedAt
            author { id name username profilePicture }
            canonicalUrl
            series { id name }
            views
            seo { title description }
          }
        }
      }
    `;

    const data = await request(HASHNODE_API, query);
    return data.publication.post;
}
