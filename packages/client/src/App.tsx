import { trpc } from "./trpc";

export const App = () => {
  const { data } = trpc.useQuery(["hello"]);

  return (
    <div>
      <span>Hello</span>
      <span>{data}</span>
    </div>
  );
};
