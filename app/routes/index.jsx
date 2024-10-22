import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import Home from "../components/home";

export async function loader(){
	return json(await client.getPage("Home"))
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  
  return [
    { title: seoMetadata.title },
    { name: "description", content: seoMetadata.description },
    { property: "og:image", content: seoMetadata.ogImage.url }
  ];
};

export default function Index() {
	const {hero} = useLoaderData();

  return (
    <>
      <Home hero={hero} />
      <div className="carousel-title">
        <h2>Explore Cocktail Walks</h2>
        <h2>See all walks</h2>
      </div>
    </>
  );
}
