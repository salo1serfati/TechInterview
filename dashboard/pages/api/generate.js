import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if(!req.body.prompt && req.body.prompt !== "" ) {
    throw Error("Oh no! Something went wrong")
  }
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: req.body.prompt,
    temperature:0.5,
    max_tokens:150,
    top_p:1,
    frequency_penalty:0,
    presence_penalty:0
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
