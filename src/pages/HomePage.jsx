import NavBar from '../components/NavBar/NavBar.jsx'
import SliderBanner from '../components/SliderBanner/SliderBanner.jsx';
import Catalog from '../components/Catalog/Catalog.jsx'
import Suggest from '../components/Suggest/Suggest.jsx'
import BannerDownload from '../components/BannerDownload/BannerDownload.jsx';
import Footer from '../components/Footer/Footer.jsx';
import FormOrder from '../components/FormOrder/FormOrder.jsx'
import './homepage.scss'
export default function HomePage(props) {
    return (
        <>
            <NavBar></NavBar>
            <SliderBanner></SliderBanner>
            <div className='app-home'>
                <h3 className='title1'>DANH MỤC MÓN ĂN</h3>
                <Catalog></Catalog>
                <h3 className='title2'>CÓ THỂ BẠN SẼ THÍCH</h3>
                <Suggest></Suggest>
                <FormOrder></FormOrder>
            </div>
            <BannerDownload></BannerDownload>
            <Footer></Footer>
        </>
    )
}
