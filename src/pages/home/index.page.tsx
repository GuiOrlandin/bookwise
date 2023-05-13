import { ChartLineUp } from "phosphor-react";
import { Sidebar } from "./components/sidebar";
import { HomeContainer, HomeIndicator, RecentlyReviewedBooks } from "./styles";
import { Avaliations } from "./components/avaliations";

interface Props {
  UserAuthenticated?: boolean;
}

export default function Home({ UserAuthenticated = false }: Props) {
  return (
    <HomeContainer>
      <Sidebar UserAuthenticated={UserAuthenticated} />;
      <div>
        <HomeIndicator>
          <ChartLineUp size={32} color="#50B2C0" />
          Início
        </HomeIndicator>

        <RecentlyReviewedBooks>
          <p>Avaliações mais recentes</p>

          <Avaliations />
          <Avaliations />
          <Avaliations />
        </RecentlyReviewedBooks>
      </div>
    </HomeContainer>
  );
}
