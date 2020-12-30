import './TopContent.css'
import { NavHashLink } from 'react-router-hash-link'

function TopContent() {
  return (
    <>
      <section id="top_content" class="top_cont_outer">
        <div class="top_cont_inner">
          <div class="container">
            <div class="top_content">
              <div class="row">
                <div class="col-lg-5 col-sm-7">
                  <div class="top_left_cont flipInY wow animated">
                    <h3>Colourful &amp; awesome!</h3>
                    <h2>creating websites that make you stop &amp; stare</h2>
                    <p> Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. </p>
                    <NavHashLink smooth to="#service" class="learn_more2">Learn more</NavHashLink>
                  </div>
                </div>
                <div class="col-lg-7 col-sm-5"> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopContent