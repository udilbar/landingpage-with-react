import './Clients.css'
import QuoteSignLeft from '../../img/quote_sign_left.png'
import QuoteSignRight from '../../img/quote_sign_right.png'
import ClientPic1 from '../../img/client-pic1.jpg'
import ClientPic2 from '../../img/client-pic2.jpg'

function Clients() {
  return (
    <>
      <section class="main-section" id="client_outer">
        <h2>Happy Clients</h2>
        <div class="client_area ">
          <div class="client_section animated fadeInUp wow">
            <div class="client_profile">
              <div class="client_profile_pic">
                <img src={ClientPic1} alt="" />
              </div>
              <h3>Saul Goodman</h3>
              <span>Lawless Inc</span> </div>
            <div class="quote_section">
              <div class="quote_arrow"></div>
              <p><b><img src={QuoteSignLeft} alt="" /></b> Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src={QuoteSignRight} alt="" /></small> </p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="client_section animated  fadeInDown wow">
            <div class="client_profile flt">
              <div class="client_profile_pic"><img src={ClientPic2} alt="" /></div>
              <h3>Marie Schrader</h3>
              <span>DEA Foundation</span> </div>
            <div class="quote_section flt">
              <div class="quote_arrow2"></div>
              <p><b><img src={QuoteSignLeft} alt="" /></b> Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src={QuoteSignRight} alt="" /></small> </p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients