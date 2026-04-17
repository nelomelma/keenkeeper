import Banner from "../components/Banner";
import FriendsGrid from "../components/FriendsGrid";
import PageLoader from "../components/PageLoader";
import SummaryCards from "../components/SummaryCards";
import { useAppContext } from "../context/AppContext";

export default function HomePage() {
  const { friends, loading } = useAppContext();

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto flex container-width flex-col gap-10">
        <Banner />
        <SummaryCards />
        {loading ? <PageLoader /> : <FriendsGrid friends={friends} />}
      </div>
    </div>
  );
}