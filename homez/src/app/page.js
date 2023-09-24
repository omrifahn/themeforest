import Wrapper from "./layout-wrapper/wrapper";
import Home_V5 from "@/app/home_v5_page";

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
