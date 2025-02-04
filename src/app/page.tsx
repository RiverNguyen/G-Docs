import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-500">
      <p>Hello World</p>
      <Button variant={"link"}>Click me</Button>
    </div>
  );
};

export default Home;
