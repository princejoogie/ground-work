import type { NextPage } from "next";
import { Container, HomeLayout } from "@/components";

const About: NextPage = () => {
  return (
    <HomeLayout
      title="Ground Work | About"
      description="An online B2B platform designed to create and gather networks for business establishments in the country!"
    >
      <div className="flex flex-col mt-8">
        <Container>
          <h1>About</h1>
        </Container>
      </div>
    </HomeLayout>
  );
};

export default About;