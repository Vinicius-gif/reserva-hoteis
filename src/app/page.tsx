import BannerHome from '../components/bannerHome';
import FormDestino from '../components/formDestino';
import HotelsList from '../components/hotelsList';

export default function Home() {
  return (
    <>
      <FormDestino />
      <BannerHome />
      <HotelsList />
    </>
  );
}
