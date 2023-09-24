import Wrapper from "./layout-wrapper/wrapper";
import Home_V5 from "@/app/(home)/home-v5/page";

export const metadata = {
  title: "Homez",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V5 />
    </Wrapper>
  );
}
