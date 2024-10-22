import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import Hero from "../components/hero";
import Form from "../components/form";


export async function loader(){
	return json(await client.getPage("Groepsboekingen"))
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  
  return [
    { title: seoMetadata.title },
    { name: "description", content: seoMetadata.description },
    { property: "og:image", content: seoMetadata.ogImage.url }
  ];
};


export default function Groepsboekingen() {
	const {walkInfoCollection, hero } = useLoaderData();

  return (
    <>
			<Hero hero={hero} walkInfoCollection={walkInfoCollection} />
      <Form />
    </>
  );
}
