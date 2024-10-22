import { getPlaiceholder } from "plaiceholder";

const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

async function apiCall(query, variables) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
    const options = {
        method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
    }
    return await fetch(fetchUrl, options)
}

async function getProjects() {
    
    const query = `
    {
        projectsCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`;
    const response = await apiCall(query);
    const json = await response.json()
    const formattedData = await json.data.projectsCollection.items.map(
		async (project) => {
			const { title, desc, releaseDate, link, previewImage } = project;
			const { css, img } = await getPlaiceholder(previewImage.url);
			return {
				title,
				desc,
				releaseDate,
				link,
				image: img,
				imageAlt: previewImage.description,
				css,
			};
		}
	);
	return Promise.all(formattedData)
}

async function getPage(title) {
    const query=`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            walkInfoCollection{
              items{
                ... on WalkInfo {
                 info
                }
               ... on WalkInfoR {
                 infoR
                }
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
            hero {
              title
              button
              description
              image {
                url
              }
            }
          }
        }
      }
    `
    const variables = {
        title: title
    };
    const response = await apiCall(query,variables);
    const json = await response.json();

    return await json.data.pageCollection.items[0]

}

export const client = {getProjects, getPage}