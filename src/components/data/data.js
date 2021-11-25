import faker from "faker";

const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getTitle = () => faker.animal.dog();
const getText = () => faker.lorem.sentences();

const data = {
  url: getUrl(),
  title: getTitle(),
  description: getText(),
};

export default data;
