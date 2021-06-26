import {StyledPage} from "./TableFooter/Page"

const Footer = ()=>
<div className="pd-20 mb-20 card-box d-flex justify-content-end">
  <StyledPage text="1" active={true} />
  <StyledPage text="2" active={false} />
</div>


export default Footer